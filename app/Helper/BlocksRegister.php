<?php
/**
 * Class to register blocks
 */

namespace PostkitBlocks\Helper;

class BlocksRegister {
    /**
     * Register block
     *
     * @return void
     */
    public function register_block( $name, $args = [] ) {
        register_block_type(
            POSTKIT_BLOCKS_DIR . './build/blocks/' . $name,
            $args
        );
    }

}