<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://smartz.com
 * @since      1.0.0
 *
 * @package    Storage_Rates_Calculator
 * @subpackage Storage_Rates_Calculator/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Storage_Rates_Calculator
 * @subpackage Storage_Rates_Calculator/admin
 * @author     Ben Weibel <ben@smartz.com>
 */
class Storage_Rates_Calculator_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Storage_Rates_Calculator_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Storage_Rates_Calculator_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/storage-rates-calculator-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Storage_Rates_Calculator_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Storage_Rates_Calculator_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/storage-rates-calculator-admin.js', array( 'jquery' ), $this->version, false );

	}

	public function add_custom_post_types() {



			/**
			 * Post Type: Rate Calculators.
			 */
		
			$labels = [
				"name" => esc_html__( "Rate Calculators", "storage2u" ),
				"singular_name" => esc_html__( "Rate Calculator", "storage2u" ),
				"menu_name" => esc_html__( "Rate Calculators", "storage2u" ),
				"all_items" => esc_html__( "All Rate Calculators", "storage2u" ),
				"add_new" => esc_html__( "Add new", "storage2u" ),
				"add_new_item" => esc_html__( "Add new Rate Calculator", "storage2u" ),
				"edit_item" => esc_html__( "Edit Rate Calculator", "storage2u" ),
				"new_item" => esc_html__( "New Rate Calculator", "storage2u" ),
				"view_item" => esc_html__( "View Rate Calculator", "storage2u" ),
				"view_items" => esc_html__( "View Rate Calculators", "storage2u" ),
				"search_items" => esc_html__( "Search Rate Calculators", "storage2u" ),
				"not_found" => esc_html__( "No Rate Calculators found", "storage2u" ),
				"not_found_in_trash" => esc_html__( "No Rate Calculators found in trash", "storage2u" ),
				"parent" => esc_html__( "Parent Rate Calculator:", "storage2u" ),
				"featured_image" => esc_html__( "Featured image for this Rate Calculator", "storage2u" ),
				"set_featured_image" => esc_html__( "Set featured image for this Rate Calculator", "storage2u" ),
				"remove_featured_image" => esc_html__( "Remove featured image for this Rate Calculator", "storage2u" ),
				"use_featured_image" => esc_html__( "Use as featured image for this Rate Calculator", "storage2u" ),
				"archives" => esc_html__( "Rate Calculator archives", "storage2u" ),
				"insert_into_item" => esc_html__( "Insert into Rate Calculator", "storage2u" ),
				"uploaded_to_this_item" => esc_html__( "Upload to this Rate Calculator", "storage2u" ),
				"filter_items_list" => esc_html__( "Filter Rate Calculators list", "storage2u" ),
				"items_list_navigation" => esc_html__( "Rate Calculators list navigation", "storage2u" ),
				"items_list" => esc_html__( "Rate Calculators list", "storage2u" ),
				"attributes" => esc_html__( "Rate Calculators attributes", "storage2u" ),
				"name_admin_bar" => esc_html__( "Rate Calculator", "storage2u" ),
				"item_published" => esc_html__( "Rate Calculator published", "storage2u" ),
				"item_published_privately" => esc_html__( "Rate Calculator published privately.", "storage2u" ),
				"item_reverted_to_draft" => esc_html__( "Rate Calculator reverted to draft.", "storage2u" ),
				"item_trashed" => esc_html__( "Rate Calculator trashed.", "storage2u" ),
				"item_scheduled" => esc_html__( "Rate Calculator scheduled", "storage2u" ),
				"item_updated" => esc_html__( "Rate Calculator updated.", "storage2u" ),
				"parent_item_colon" => esc_html__( "Parent Rate Calculator:", "storage2u" ),
			];
		
			$args = [
				"label" => esc_html__( "Rate Calculators", "storage2u" ),
				"labels" => $labels,
				"description" => "Setup and Configuration for a Storage2u Rate Calculator ",
				"public" => true,
				"publicly_queryable" => true,
				"show_ui" => true,
				"show_in_rest" => true,
				"rest_base" => "calculator",
				"rest_controller_class" => "WP_REST_Posts_Controller",
				// "rest_namespace" => "s2u",
				"has_archive" => false,
				"show_in_menu" => true,
				"show_in_nav_menus" => false,
				"delete_with_user" => false,
				"exclude_from_search" => true,
				"capability_type" => "post",
				"map_meta_cap" => true,
				"hierarchical" => false,
				"can_export" => false,
				"rewrite" => false,
				"query_var" => true,
				"menu_position" => 20,
				"menu_icon" => "dashicons-calculator",
				"supports" => [ "title" ],
				"show_in_graphql" => false,
			];
		
			register_post_type( "s2u_calculator", $args );
				

	}

}
