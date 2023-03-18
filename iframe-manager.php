<?php
//  stop direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * @package iFrame Manager Blocks
 * @version 1.0.0
 * @author  PostsKit
 * 
 * Plugin Name: iFrame Manager
 * Plugin URI: https://makegutenblock.com/
 * Description: A simple iFrame Manager block for Gutenberg Editor.
 * Version: 1.0.0
 * Author: Make Guten Blocks
 * Author URI: https://makegutenblock.com/
 * License: GPL2
 * Text Domain: iframe-manager
 * Domain Path: /languages
 */

 // require_once autoload.php
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

use IframeManager\App;
use IframeManager\Traits\Singleton;
use IframeManager\Helper\BlocksCategory;

/**
 * Final class IframeManager
 */
 final class IframeManager {
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
        // defer enqueue scripts
        add_filter( 'script_loader_tag', [ $this, 'def_enqueue_scripts' ], 10, 3 );
    }

    /**
     * Constants
     */
    public function constants(){
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_VERSION' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_VERSION', '1.0.0' );
        }
        
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_FILE' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_FILE', __FILE__ );
        }
        
        
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_DIR' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_DIR', __DIR__ );
        }
        
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_PATH' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_PATH', plugin_dir_path( IFRAMEMANAGER_BLOCKS_FILE ) );
        }
        
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_URL' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_URL', plugins_url( '/', IFRAMEMANAGER_BLOCKS_FILE ) );
        }
        
        if( ! defined( 'IFRAMEMANAGER_BLOCKS_ASSETS' ) ) {
            define( 'IFRAMEMANAGER_BLOCKS_ASSETS', IFRAMEMANAGER_BLOCKS_URL . 'assets/' );
        }

    }

    /**
     * Load textdomain
     *
     * @return void
     */
    public function load_textdomain() {
        load_plugin_textdomain( 'iframe-manager', false, IFRAMEMANAGER_BLOCKS_PATH . '/languages' );
    }

    /**
     * Enqueue scripts
     */
    public function enqueue_scripts(){
        // styles loaded here
        wp_enqueue_style('iframe-manager-css', IFRAMEMANAGER_BLOCKS_URL . 'src/helper/css/iframemanager.css', array(), IFRAMEMANAGER_BLOCKS_VERSION);
        
        // scripts loaded here
        wp_enqueue_script( 'iframe-manager-js', IFRAMEMANAGER_BLOCKS_URL . 'src/helper/js/iframemanager.js', array(), IFRAMEMANAGER_BLOCKS_VERSION, true );
        wp_enqueue_script( 'iframe-app-js', IFRAMEMANAGER_BLOCKS_URL . 'src/helper/js/app.js', array('iframe-manager-js'), IFRAMEMANAGER_BLOCKS_VERSION, true );
    }

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

// init IframeManager
function iframemanger_blocks() {
    return IframeManager::get_instance();
}

// kick-off the plugin
iframemanger_blocks();
