<?php

namespace PostkitBlocks\Callbacks;

// RegisterStyle
use PostkitBlocks\Helper\RegisterStyle;

class Test extends RegisterStyle {
    /**
     * Test Block Callback
     */
    public function render_test_block( $attributes, $content ) {
        // handle 
        $handle = isset( $attributes['uniqueId'] ) ? $attributes['uniqueId'] :'';

        // attributes data 
        $color = isset( $attributes['color'] ) ? $attributes['color'] : '';

        // Inline Style
        $style = "
            .${handle} .heading {
                color: {$color};
            }
        ";

        // Register Inline Style
        $this->register_inline_style( $handle, $style );
        
        return $content;
    }
}
