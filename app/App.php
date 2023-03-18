<?php

namespace IframeManager;

use IframeManager\Helper\BlocksRegister;

// blocks callbacks
use IframeManager\Callbacks\Iframe;

 class App {
    /**
     * Construct method
     */
    public function __construct() {
        // blocks register
        $this->all_iframe_blocks();
    }

    /**
     * Register Single Block
     */
    public function all_iframe_blocks(){
        /**
         * All blocks list
         */
        $blocks = [
            [
                'name' => 'iframe',
                'args' => [
                    'render_callback' => [ new Iframe(), 'render_iframe_block' ]
                ]
            ]
        ]; 

        /**
         * Register all blocks
         */
        $block_register = new BlocksRegister();
        foreach ( $blocks as $block ) {
            $block_register->register_block( $block['name'], $block['args'] );
        }
    }
 }



