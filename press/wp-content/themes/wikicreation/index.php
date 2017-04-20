<?php
  define('THEME_DIR', get_template_directory_uri());
  define('PROD', false);

  $cssPath = THEME_DIR . '/css/style.css';
  $jsPath = 'http://localhost:8080/transformed.js';

  if (PROD) {
    $cssPath = THEME_DIR . '/css/style.min.css';
    $jsPath = THEME_DIR . '/build/transformed-mini.js';
  }
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Wikicreation</title>
    <link rel="stylesheet" type="text/css" href="<?php echo $cssPath ?>">
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="<?php echo $jsPath ?>"></script>
  </body>
</html>
