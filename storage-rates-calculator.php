<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://smartz.com
 * @since             1.0.0
 * @package           Storage_Rates_Calculator
 *
 * @wordpress-plugin
 * Plugin Name:       Storage Rates Calculator
 * Plugin URI:        http://smartz.com
 * Description:       Calculates storage rate values based on google map locations. Built for Storage2u by Smartz
 * Version:           1.0.0
 * Author:            Ben Weibel
 * Author URI:        http://smartz.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       storage-rates-calculator
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'STORAGE_RATES_CALCULATOR_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-storage-rates-calculator-activator.php
 */
function activate_storage_rates_calculator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-storage-rates-calculator-activator.php';
	Storage_Rates_Calculator_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-storage-rates-calculator-deactivator.php
 */
function deactivate_storage_rates_calculator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-storage-rates-calculator-deactivator.php';
	Storage_Rates_Calculator_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_storage_rates_calculator' );
register_deactivation_hook( __FILE__, 'deactivate_storage_rates_calculator' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-storage-rates-calculator.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_storage_rates_calculator() {

	$plugin = new Storage_Rates_Calculator();
	$plugin->run();

}
run_storage_rates_calculator();

