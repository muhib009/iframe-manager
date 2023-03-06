<?php

namespace PostkitBlocks;

use PostkitBlocks\Helper\BlocksRegister;

// blocks callbacks
use PostkitBlocks\Callbacks\Test;

 class App {
    /**
     * Construct method
     */
    public function __construct() {
        // blocks register
        $this->all_postkit_blocks();
    }

    /**
     * Register Single Block
     */
    public function all_postkit_blocks(){
        /**
         * All blocks list
         */
        $blocks = [
            [
                'name' => 'boilerplate',
                'args' => []
            ],
            [
                'name' => 'test',
                'args' => [
                    'render_callback' => [ new Test(), 'render_test_block' ]
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



