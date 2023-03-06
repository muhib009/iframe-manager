<?php

namespace PostkitBlocks\Helper;

class BlocksCategory {
    /**
     * BlocksCategory constructor.
     */
    public function __construct() {
        add_filter( 'block_categories', [ $this, 'register_block_category' ], 10, 2 );
    }

    /**
     * Register block category
     *
     * @param array $categories
     * @return array
     */
    public function register_block_category( $categories ) {
        return array_merge(
            [
                [
                    'slug' => 'postkit-blocks',
                    'title' => __( 'Postkit Blocks', 'postkit-blocks' )
                ],
            ],
            $categories
        );
    }
}
