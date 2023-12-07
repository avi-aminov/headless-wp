// src/Posts.jsx
import { Link } from 'react-router-dom';

const BlogPage = ({ posts }) => {
    return (
        <div>
            <h1>WordPress Posts</h1>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPage;
