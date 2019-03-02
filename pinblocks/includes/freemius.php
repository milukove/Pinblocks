<?php

if ( ! function_exists( 'pinblocks_fs' ) ) {
    // Create a helper function for easy SDK access.
    function pinblocks_fs() {
        global $pinblocks_fs;

        if ( ! isset( $pinblocks_fs ) ) {
            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/../freemius/start.php';

            $pinblocks_fs = fs_dynamic_init( array(
                'id'                  => '3299',
                'slug'                => 'pinblocks',
                'type'                => 'plugin',
                'public_key'          => 'pk_477ad72b4476f876d1f4708b84b8a',
                'is_premium'          => false,
                'has_addons'          => false,
                'has_paid_plans'      => false,
                'menu'                => array(
                    'first-path'     => 'plugins.php',
                    'account'        => false,
                    'contact'        => false,
                    'support'        => false,
                ),
            ) );
        }

        return $pinblocks_fs;
    }

    // Init Freemius.
    pinblocks_fs();
    // Signal that SDK was initiated.
    do_action( 'pinblocks_fs_loaded' );
}