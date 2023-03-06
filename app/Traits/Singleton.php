<?php
/**
 * @package PostKit Blocks
 * @version 1.0.0
 * @author  PostKit
 * Singleton trait
 */

namespace PostkitBlocks\Traits;

trait Singleton {
    /**
     * Instance
     *
     * @var object
     */
    private static $instance = null;

    /**
     * Get instance
     *
     * @return object
     */
    public static function get_instance() {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}
