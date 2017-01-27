<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wikicreation');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@^M?W9NUP$L$ ,{{&(.+es;/_i@=?%cXCxm?8)@I `jh,d3Z9cp*F${_<R0v/u(&');
define('SECURE_AUTH_KEY',  '5K~9)$X<`R^),zaL/H)Q{q|QcEIC~s=m1Nm1iUp_B$lmA4.3;g1PI1f(Q/s45BpL');
define('LOGGED_IN_KEY',    'Y`<Yq-yuIUUa%DWs_$H&Ft>^oN[(^[p~Zr9A6;l 31^HIq1.9CLYk#vAxw^vONp+');
define('NONCE_KEY',        'AOuvNIB).VqYSn>O[;{mFnL2XYXS:,4:Af(MvbAt*y&G1X%1Q%/eE#w+d|>V/8{v');
define('AUTH_SALT',        ',W+`NtL35yU z =b,}:obaRB[5G3!Jl<~`%8Ww6|ivA!;)~s+&dADf7!}PHM9Rx*');
define('SECURE_AUTH_SALT', '+,:%|?4y]H9=0)O3U*z<rI=D# Foj<(2HxClbgU-{G$8B0vZX/`BQw43|+#ewyI:');
define('LOGGED_IN_SALT',   'XD 8];:Gm,sGT^D7;Ljy|AIaq4D(>&BEDWL}*ODOL(@s[K8Fa^By4<c<@>>4T&c~');
define('NONCE_SALT',       '9}BrAjpF)pNyxg(Fj+vRrE6-ulMT&xkt.>Hz{Od>J:+i?-:{.Gf,I3pkY=wUsAhz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
