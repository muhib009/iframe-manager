<?php
/**
 * @package PostKit Blocks
 * All blocks callbacks
 */

namespace PostkitBlocks\Helper;

class RegisterStyle {
    /**
     * Register Inline Style
     */
    public function register_inline_style( $name, $style ) {
        wp_register_style(
            $name,
            false,
            [],
            POSTKIT_BLOCKS_VERSION
        );
        wp_enqueue_style( $name );
        wp_add_inline_style( $name, $style );
    }
}