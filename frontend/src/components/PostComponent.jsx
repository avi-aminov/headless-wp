/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api'; // Import your API function
import {
    Container,
    LeftSide,
    PostList,
    PostItem,
    RightSide,
    PostTitle,
    PostContent,
    ExcerptButton,
    PostListContainer,
    SummarizeButton,
} from './PostComponent.style';

const PostComponent = ({ content }) => {
    const { data: posts, isLoading: isPostsLoading, error: postsError } = useQuery('posts', getPosts);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showExcerpt, setShowExcerpt] = useState(false);
    const [showAllPosts, setShowAllPosts] = useState(false);

    useEffect(() => {
        if (posts && posts.length > 0) {
            setSelectedPost(posts[0]); // Select the first post by default
        }
    }, [posts]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setShowExcerpt(false);
    };

    const handleExcerptButtonClick = () => {
        setShowExcerpt(!showExcerpt);
    };

    const handleShowMoreClick = () => {
        setShowAllPosts(true);
    };


    return (
        <Container>

            <LeftSide>
                {isPostsLoading && <p>Loading...</p>}
                {postsError && <p>Error fetching posts</p>}
                {posts && (
                    <PostListContainer showAll={showAllPosts}>
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                        <PostList>
                            {posts.slice(0, showAllPosts ? posts.length : 5).map((post) => (
                                <PostItem isActive={selectedPost && selectedPost.id === post.id} key={post.id} onClick={() => handlePostClick(post)}>
                                    {post.title.rendered}
                                </PostItem>
                            ))}

                            {!showAllPosts && (
                                <PostItem style={{ border: 0 }} onClick={handleShowMoreClick}>
                                    And more...
                                </PostItem>
                            )}

                        </PostList>
                    </PostListContainer>
                )}

            </LeftSide>
            <RightSide>
                {selectedPost && (
                    <>
                        <PostTitle>{selectedPost.title.rendered}</PostTitle>

                        <PostContent showExcerpt={showExcerpt}>
                            <p dangerouslySetInnerHTML={{ __html: showExcerpt ? selectedPost.excerpt.rendered : selectedPost.content.rendered }} />
                        </PostContent>

                        {showExcerpt ?
                            <SummarizeButton onClick={handleExcerptButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                                    <path d="M1 3.76312L5.02729 7.60545L13.3504 0.744141" stroke="#118432" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                {' '}
                                Summarized
                            </SummarizeButton>
                            : <ExcerptButton onClick={handleExcerptButtonClick}>
                                Summarize
                            </ExcerptButton>
                        }
                    </>
                )}
            </RightSide>
        </Container>
    );
};

export default PostComponent;
