<?php
/*
Plugin Name: Headless Helper
Description: Adds REST API support for fetching the 'top-nav' menu.
Version: 1.0
Author: Avi Aminov
*/

// Add menu support
add_theme_support('menus');

// Return formatted top-nav menu
function get_top_nav_menu() {
    $menu_name = 'top-nav';

    // Check if the menu exists
    if (($menu = wp_get_nav_menu_object($menu_name)) && isset($menu->term_id)) {
        $menu_items = wp_get_nav_menu_items($menu->term_id);

        $result = array_map(
            function ($item) {
                return [
                    'id'      => $item->ID,
                    'name'    => $item->title,
                    'href'    => $item->url,
                    'classes' => implode(' ', $item->classes),
                ];
            },
            $menu_items
        );

        return $result;
    } else {
        // Handle the case where the menu doesn't exist
        return [];
    }
}

// Add endpoint
add_action('rest_api_init', function () {
    // top-nav menu
    register_rest_route('wp/v2', 'top-nav', array(
        'methods'  => 'GET',
        'callback' => 'get_top_nav_menu',
    ));
});
