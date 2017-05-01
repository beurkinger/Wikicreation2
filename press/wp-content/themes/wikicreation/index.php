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
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_DIR ?>/icons/apple-touch-icon.png?v=1">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_DIR ?>/icons/favicon-32x32.png?v=1">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_DIR ?>/icons/favicon-16x16.png?v=1">
    <link rel="manifest" href="<?php echo THEME_DIR ?>/icons/manifest.json?v=1">
    <link rel="mask-icon" href="<?php echo THEME_DIR ?>/icons/safari-pinned-tab.svg?v=1" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Muli:300,400,700" rel="stylesheet"> -->
    <link rel="stylesheet" type="text/css" href="<?php echo $cssPath ?>">
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="<?php echo $jsPath ?>"></script>
  </body>
</html>
