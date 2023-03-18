<?php
/**
 * @package Iframe Manager Blocks
 * All blocks callbacks
 */

namespace IframeManager\Helper;

class RegisterStyle {
    /**
     * Register Inline Style
     */
    public function register_inline_style( $name, $style ) {
        wp_register_style(
            $name,
            false,
            [],
            IFRAMEMANAGER_BLOCKS_VERSION
        );
        wp_enqueue_style( $name );
        wp_add_inline_style( $name, $style );
    }
}