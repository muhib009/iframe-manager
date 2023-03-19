<?php
/**
 * Plugin Name:       iFrame Manager
 * Description:       A simple iFrame Manager plugins for WordPress editor.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ifm-manager
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [ifm] && [IFM] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Final Class
 */

final class IFM_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->ifm_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'ifm_blocks_init' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'ifm_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'ifm_register_block_category' ], 10, 2 );
		}
		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'ifm_external_libraries' ] );
		// defer enqueue scripts
        add_filter( 'script_loader_tag', [ $this, 'def_enqueue_scripts' ], 10, 3 );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function ifm_define_constants() {
		define( 'IFM_VERSION', '1.0.0' );
		define( 'IFM_URL', plugin_dir_url( __FILE__ ) );
		define( 'IFM_INC_URL', IFM_URL . 'includes/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function ifm_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	/**
	 * Blocks Initialization
	*/
	public function ifm_blocks_init() {
		// register single block
		$this->ifm_register_block( 'iframe' );
	}

	/**
	 * Register Block Category
	 */

	public function ifm_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'ifm',
					'title' => __( 'iFrame Blocks', 'ifm' ),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function ifm_external_libraries() {

		// styles loaded here
        wp_enqueue_style('iframe-manager-css', IFM_INC_URL . 'css/iframemanager.css', array(), IFM_VERSION);
        
        // scripts loaded here
        wp_enqueue_script( 'iframe-manager-js', IFM_INC_URL . 'js/iframemanager.js', array(), IFM_VERSION, true );
        wp_enqueue_script( 'iframe-app-js', IFM_INC_URL . 'js/app.js', array('iframe-manager-js', 'jquery'), IFM_VERSION, true );
	}

	// defer scripts
	public function def_enqueue_scripts( $tag, $handle, $src ) {
        $defer = array( 
          'iframe-manager-js',
          'iframe-app-js',
        );
        if ( in_array( $handle, $defer ) ) {
           return '<script defer src="' . $src . '" type="text/javascript"></script>' . "\n";
        }
          
          return $tag;
      }

}

/**
 * Kickoff
*/

IFM_BLOCKS_CLASS::init();
