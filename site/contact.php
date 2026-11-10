<?php
declare(strict_types=1);
/**
 * bballin.me – contact form handler
 *
 * - Accepts POST from the site's own form, nothing else.
 * - Validates, rejects spam (honeypot field, submit time, same-origin), sends the
 *   message by e-mail and stores NOTHING on the server (no log, no database).
 * - Answers JSON when the page's JavaScript calls it (Accept: application/json),
 *   otherwise renders a small confirmation page, so the form also works without JS.
 *
 * Configure the two addresses below. $FROM must be an address of a domain in your
 * Strato package (create the mailbox or at least the alias), otherwise Strato's
 * mail server may refuse or spam-flag the message.
 */

$TO   = 'betty.ballin@yahoo.de';
$FROM = 'website@bballin.me';
$MAX  = ['name' => 100, 'email' => 200, 'message' => 5000];

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Cache-Control: no-store');

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
$lang = (($_POST['lang'] ?? 'de') === 'en') ? 'en' : 'de';

$text = [
    'de' => [
        'title_ok'    => 'Nachricht gesendet',
        'ok'          => 'Danke, Ihre Nachricht ist angekommen. Ich melde mich bald.',
        'title_err'   => 'Senden nicht möglich',
        'invalid'     => 'Bitte füllen Sie Name, E-Mail und Nachricht korrekt aus.',
        'failed'      => 'Das Senden hat nicht geklappt. Bitte schreiben Sie direkt an',
        'back'        => 'Zurück zur Startseite',
        'home'        => '/',
    ],
    'en' => [
        'title_ok'    => 'Message sent',
        'ok'          => 'Thanks, your message has arrived. I will get back to you soon.',
        'title_err'   => 'Could not send',
        'invalid'     => 'Please fill in name, email and message correctly.',
        'failed'      => 'Sending failed. Please write directly to',
        'back'        => 'Back to homepage',
        'home'        => '/en/',
    ],
][$lang];

function respond(bool $ok, string $code, int $status, array $text, bool $wantsJson, string $to): void
{
    http_response_code($status);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(['ok' => $ok, 'code' => $code], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Content-Type: text/html; charset=UTF-8');
    $title = $ok ? $text['title_ok'] : $text['title_err'];
    $msg   = $ok ? $text['ok'] : ($code === 'invalid' ? $text['invalid'] : $text['failed'] . ' ' . $to . '.');
    $h = fn(string $s): string => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
    echo '<!DOCTYPE html><html lang="' . ($text['home'] === '/en/' ? 'en' : 'de') . '"><head><meta charset="UTF-8">'
        . '<meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">'
        . '<title>' . $h($title) . '</title><link rel="stylesheet" href="/assets/css/site.css"><script src="/assets/js/theme.js"></script></head>'
        . '<body><main class="wrap legal-body"><h1>' . $h($title) . '</h1><p class="lead">' . $h($msg) . '</p>'
        . '<p><a class="button button-quiet" href="' . $h($text['home']) . '">' . $h($text['back']) . '</a></p></main></body></html>';
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'method', 405, $text, $wantsJson, $TO);
}

// Same-origin: the form lives on this host only.
$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $h) {
    if (!empty($_SERVER[$h])) {
        $srcHost = strtolower((string) parse_url($_SERVER[$h], PHP_URL_HOST));
        if ($srcHost !== '' && $srcHost !== $host && $srcHost !== 'www.' . $host && 'www.' . $srcHost !== $host) {
            respond(false, 'origin', 403, $text, $wantsJson, $TO);
        }
        break;
    }
}

// Spam heuristics: pretend success so bots learn nothing.
if (!empty($_POST['website'])) {
    respond(true, 'ok', 200, $text, $wantsJson, $TO);
}
$ts = (int) ($_POST['ts'] ?? 0);
if ($ts > 0 && (time() - $ts) < 3) {
    respond(true, 'ok', 200, $text, $wantsJson, $TO);
}

// Small helpers that work with or without the mbstring extension.
$len = static fn(string $s): int => function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : strlen(utf8_decode($s));
$cut = static fn(string $s, int $max): string => function_exists('mb_substr') ? mb_substr($s, 0, $max, 'UTF-8') : substr($s, 0, $max);
$mime = static fn(string $s): string => preg_match('/[^\x20-\x7e]/', $s) ? '=?UTF-8?B?' . base64_encode($s) . '?=' : $s;
$clean = static function (string $v, int $max) use ($cut): string {
    $v = trim(str_replace(["\r", "\n"], ' ', $v));
    return $cut($v, $max);
};
$name    = $clean((string) ($_POST['name'] ?? ''), $MAX['name']);
$email   = $clean((string) ($_POST['email'] ?? ''), $MAX['email']);
$message = trim($cut((string) ($_POST['message'] ?? ''), $MAX['message']));

if ($len($name) < 2 || $len($message) < 10 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'invalid', 422, $text, $wantsJson, $TO);
}

$subject = ($lang === 'de' ? 'Kontaktanfrage über bballin.me von ' : 'Contact request via bballin.me from ') . $name;
$body = ($lang === 'de' ? "Name: " : "Name: ") . $name . "\n"
      . ($lang === 'de' ? "E-Mail: " : "Email: ") . $email . "\n"
      . ($lang === 'de' ? "Sprache: " : "Language: ") . $lang . "\n"
      . ($lang === 'de' ? "Zeit: " : "Time: ") . date('Y-m-d H:i') . "\n\n"
      . $message . "\n";

$headers = [
    'From: bballin.me <' . $FROM . '>',
    'Reply-To: ' . $mime($name) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: bballin.me contact form',
];

$sent = @mail($TO, $mime($subject), $body, implode("\r\n", $headers));

respond((bool) $sent, $sent ? 'ok' : 'failed', $sent ? 200 : 502, $text, $wantsJson, $TO);
