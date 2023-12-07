// src/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts, getHomePage } from './api';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import NavMenu from './components/NavMenu';
import Loader from './components/Loader';
import { Wrapper, Container, NavWrap } from './App.style';

const App = () => {
  const { data: posts, isLoading: isPostsLoading, error: postsError } = useQuery('posts', getPosts);
  const { data: homePage, isLoading: isHomePageLoading, error: homePageError } = useQuery('homePage', getHomePage);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isPostsLoading && !isHomePageLoading) {
      setIsLoading(false);
    }

    if (postsError || homePageError) {
      setError(postsError || homePageError);
    }
  }, [isPostsLoading, isHomePageLoading, postsError, homePageError]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error('Error fetching data:', error.message);
    return <div>Error fetching data</div>;
  }

  return (
    <Wrapper>
      <NavWrap isSticky={isSticky}>
        <Container>
          <NavMenu menuSlug="top-nav" />
        </Container>
      </NavWrap>
      <Routes>
        <Route path="/" element={<HomePage data={homePage} />} />
        <Route
          path="/blog"
          element={
            <BlogPage posts={posts} />
          }
        />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
