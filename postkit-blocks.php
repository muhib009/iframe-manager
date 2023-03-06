<?php
//  stop direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * @package PostKit Blocks
 * @version 1.0.0
 * @author  PostsKit
 * 
 * Plugin Name: Postkit Blocks
 * Plugin URI: https://postkit-blocks.com
 * Description: Postkit Blocks is a Collection of Gutenberg Blocks for WordPress.
 * Version: 1.0.0
 * Author: BDThemes
 * Author URI: https://bdthemes.com
 * License: GPL2
 * Text Domain: postkit-blocks
 * Domain Path: /languages
 */

 // require_once autoload.php
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

use PostkitBlocks\App;
use PostkitBlocks\Traits\Singleton;
use PostkitBlocks\Helper\BlocksCategory;

/**
 * Final class PostkitBlocks
 */
 final class PostkitBlocks {
    use Singleton;

    /**
     * Construct method
     */
    private function __construct() {
        // init constants
        $this->constants();
        // App class
        new App();
        // blocks category
        new BlocksCategory();
        // load textdomain
        add_action( 'plugins_loaded', [ $this, 'load_textdomain' ] );
        // enqueue scripts for editor and frontend
        add_action( 'enqueue_block_assets', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Constants
     */
    public function constants(){
        if( ! defined( 'POSTKIT_BLOCKS_VERSION' ) ) {
            define( 'POSTKIT_BLOCKS_VERSION', '1.0.0' );
        }
        
        if( ! defined( 'POSTKIT_BLOCKS_FILE' ) ) {
            define( 'POSTKIT_BLOCKS_FILE', __FILE__ );
        }
        
        
        if( ! defined( 'POSTKIT_BLOCKS_DIR' ) ) {
            define( 'POSTKIT_BLOCKS_DIR', __DIR__ );
        }
        
        if( ! defined( 'POSTKIT_BLOCKS_PATH' ) ) {
            define( 'POSTKIT_BLOCKS_PATH', plugin_dir_path( POSTKIT_BLOCKS_FILE ) );
        }
        
        if( ! defined( 'POSTKIT_BLOCKS_URL' ) ) {
            define( 'POSTKIT_BLOCKS_URL', plugins_url( '/', POSTKIT_BLOCKS_FILE ) );
        }
        
        if( ! defined( 'POSTKIT_BLOCKS_ASSETS' ) ) {
            define( 'POSTKIT_BLOCKS_ASSETS', POSTKIT_BLOCKS_URL . 'assets/' );
        }
    }

    /**
     * Load textdomain
     *
     * @return void
     */
    public function load_textdomain() {
        load_plugin_textdomain( 'postkit-blocks', false, POSTKIT_BLOCKS_PATH . '/languages' );
    }

    /**
     * Enqueue scripts
     */
    public function enqueue_scripts(){
        // enqueue style
        wp_enqueue_style(
            'postkit-blocks-fontawesome-style',
            POSTKIT_BLOCKS_ASSETS . 'css/all.min.css',
            [],
            POSTKIT_BLOCKS_VERSION
        );
    }
 }

// init PostkitBlocks
function postkit_blocks() {
    return PostkitBlocks::get_instance();
}

// kick-off the plugin
postkit_blocks();
