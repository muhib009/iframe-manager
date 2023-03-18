<?php
/**
 * Class to register blocks
 */

namespace IframeManager\Helper;

class BlocksRegister {
    /**
     * Register block
     *
     * @return void
     */
    public function register_block( $name, $args = [] ) {
        register_block_type(
            IFRAMEMANAGER_BLOCKS_DIR . './build/blocks/' . $name,
            $args
        );
    }

}