<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       http://smartz.com
 * @since      1.0.0
 *
 * @package    Storage_Rates_Calculator
 * @subpackage Storage_Rates_Calculator/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Storage_Rates_Calculator
 * @subpackage Storage_Rates_Calculator/includes
 * @author     Ben Weibel <ben@smartz.com>
 */
class Storage_Rates_Calculator_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'storage-rates-calculator',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
