import { useParams } from 'react-router-dom';
import Post from "../components/PostItem";

const PostPage = () => {
    const { slug } = useParams();

    return (
        <div>
            <h2>Post Page - {slug}</h2>
            <Post slug={slug} />
        </div>
    );
};


export default PostPage;