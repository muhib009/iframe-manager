<?php

namespace IframeManager\Callbacks;

// RegisterStyle
use IframeManager\Helper\RegisterStyle;

class Iframe extends RegisterStyle {
    /**
     * Test Block Callback
     */
    public function render_iframe_block( $attributes, $content ) {
        // handle 
        $handle = isset( $attributes['uniqueId'] ) ? $attributes['uniqueId'] :'';

        // attributes data 
       $dSize = isset( $attributes['iconSizes']['sizes']['desktop'] ) ? $attributes['iconSizes']['sizes']['desktop'] : '';

       $tSize = isset( $attributes['iconSizes']['sizes']['tablet'] ) ? $attributes['iconSizes']['sizes']['tablet'] : '';

       $mSize = isset( $attributes['iconSizes']['sizes']['mobile'] ) ? $attributes['iconSizes']['sizes']['mobile'] : '';

       $unit = isset( $attributes['iconSizes']['unit'] ) ?  $attributes['iconSizes']['unit'] : '';

        // Inline Style
        $style = "
            @media (min-width: 1024px) {
                .${handle} svg {
                    width: {$dSize}{$unit};
                    height: {$dSize}{$unit};
                }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
                .${handle} svg {
                    width: {$tSize}{$unit};
                    height: {$tSize}{$unit};
                }
            }
            @media (max-width: 767px) {
                .${handle} svg {
                    width: {$mSize}{$unit};
                    height: {$mSize}{$unit};
                }
            }
        ";

        // Register Inline Style
        $this->register_inline_style( $handle, $style );
        
        return $content;
    }
}
