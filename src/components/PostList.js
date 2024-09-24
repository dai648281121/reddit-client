import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchPosts } from '../redux/actions'; // Correct import path

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({});
  const videoRefs = useRef([]);

  useEffect(() => {
    // popular posts are obtained by default when the page loads
    if (!posts.length) {
      dispatch(fetchPosts('popular')); 
    }

    const currentVideoRefs = videoRefs.current;
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const videoIframe = entry.target;
        if (entry.isIntersecting) {
          videoIframe.src = videoIframe.dataset.src;
        } else {
          videoIframe.src = '';
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    currentVideoRefs.forEach((iframe) => {
      if (iframe) {
        observer.observe(iframe);
      }
    });

    return () => {
      currentVideoRefs.forEach((iframe) => {
        if (iframe) {
          observer.unobserve(iframe);
        }
      });
    };
  }, [dispatch, posts]);

  const toggleComments = async (postId) => {
    if (showComments[postId]) {
      setShowComments((prevState) => ({ ...prevState, [postId]: false }));
    } else {
      if (!comments[postId]) {
        const commentResponse = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
        const commentData = commentResponse.data[1].data.children.map(child => child.data);
        setComments((prevState) => ({ ...prevState, [postId]: commentData }));
      }
      setShowComments((prevState) => ({ ...prevState, [postId]: true }));
    }
  };

  // This function ensures URLs use HTTPS instead of HTTP
  const secureUrl = (url) => {
    const decodedUrl = decodeURIComponent(url);
    return decodedUrl.startsWith('http://') ? decodedUrl.replace('http://', 'https://') : decodedUrl;
  };

  const getImageUrl = (post) => {
    if (post.preview && post.preview.images && post.preview.images.length > 0) {
      return secureUrl(post.preview.images[0].source.url);
    }
    if (post.thumbnail && post.thumbnail.startsWith('http')) {
      return secureUrl(post.thumbnail);
    }
    return null;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!posts.length) {
    return <div>No posts available. Please select a category or search for posts.</div>;
  }

  return (
    <div>
      <h2>Reddit Posts</h2>
      {posts.map((post, index) => (
        <div key={post.id} className="post-container">
          <h3>{post.title}</h3>
          <div>{post.selftext || '  '}</div>

          {/* Handling image display */}
          {!post.media?.reddit_video && getImageUrl(post) && (
            <img
              src={getImageUrl(post)}
              alt="Post media"
              style={{ width: '50%', height: '500px' }}
            />
          )}

          {/* Handling Reddit video display */}
          {post.media?.reddit_video && (
            <div className="video-container">
              <iframe
                ref={(el) => (videoRefs.current[index] = el)}
                data-src={`https://www.reddit.com/mediaembed/${post.id}?autoplay=1&muted=1`}
                title="Reddit Video"
                allow="autoplay; fullscreen"
                scrolling="no"
                frameBorder="0"
                style={{ border: 'none', width: '100%', height: '500px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="post-footer">
            <div className="post-votes">
              <span>👍 {post.ups}</span>
            </div>
            <div className="post-comments">
              <button onClick={() => toggleComments(post.id)}>
                {showComments[post.id] ? 'Hide Comments' : `View Comments (${post.num_comments})`}
              </button>
            </div>
          </div>

          {/* Display comments section if they are toggled */}
          {showComments[post.id] && comments[post.id] && (
            <div className="comments-section">
              <ul>
                {comments[post.id].length > 0 ? (
                  comments[post.id].map((comment) => (
                    <li key={comment.id}>
                      <p><strong>{comment.author}</strong>: {comment.body}</p>
                      <p><strong>Upvotes:</strong> {comment.ups}</p>
                    </li>
                  ))
                ) : (
                  <p>No comments available.</p>
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
