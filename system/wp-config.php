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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pswatch' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'L/k9IP|O^=kw#C<ovUqwC?f$}%z!6~?,tuRErUJ um5=_|UWpz!:f(hb{1@+@~QL' );
define( 'SECURE_AUTH_KEY',  '|m^ux!^OX?d)@gp0D(i45?Mtnf+AB!hw>{&e(PJ$;3fe$_X}3@%.yhkN$tLakhX@' );
define( 'LOGGED_IN_KEY',    '2AL2EYbfd+<1SWz %84ju>xPkpa9w`sFXn$!r|`Moo:18As7*uzbvYc;*EA|Jd9r' );
define( 'NONCE_KEY',        'M+Y7hz9m95SHxKYy9+-|Q6f#I0:F.oSKzhSMiaVVg%.>l]qXRpKnV@:P#a< S4]!' );
define( 'AUTH_SALT',        'PZJO,t;%i,S8:y~F;*p}I|@3&f|IE-3X.m|X7kvym2@]G<dGq5zmCPt6uw0iZHyC' );
define( 'SECURE_AUTH_SALT', '3%P.rk&U)&*D-`+n,^)a,Y[!mi4CFP(`]>)1g =_4Z{RKz[))r5;P$HUPNUq9Bc4' );
define( 'LOGGED_IN_SALT',   '~GK`X5wLi#GBkAm~OSYufN_c@bD)hz/ip,^R28&nG;jwmg_:hRu:M/N:)+68`0R9' );
define( 'NONCE_SALT',       '/?8s)MeKf>C*mHP1pFPn;efz?}~OK1JROD4yv0lePnJv_9i7PWJL<eCJ`uOwTj>#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('FS_METHOD','direct');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
