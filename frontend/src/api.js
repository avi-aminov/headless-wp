/* eslint-disable no-useless-catch */
// src/api.js
import axios from 'axios';

const BASE_URL = '/wp-json/wp/v2';

export const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts?slug=${slug}`);
        return response.data[0]; // Assuming there is only one post with a unique slug
    } catch (error) {
        throw error;
    }
};

export const getHomePage = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/pages?slug=home`);
        return response.data[0]; // Assuming there is only one page with the slug "home"
    } catch (error) {
        throw error;
    }
};

export const getMenu = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top-nav`);
        const menuItems = await response.json();
        return menuItems;
    } catch (error) {
        throw error;
    }
};