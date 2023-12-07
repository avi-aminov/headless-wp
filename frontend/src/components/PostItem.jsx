// src/Post.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../api';

const PostItem = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPostBySlug(slug);
                setPost(postData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching post:', error.message);
        return <div>Error fetching post</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title?.rendered || 'No Title'}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content?.rendered || 'No Content' }} />
        </div>
    );
};

export default PostItem;
