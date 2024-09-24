import axios from 'axios';

// Action for initiating the request
export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST',
});

// Action for successful data fetching
export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

// Action for failed data fetching
export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  error,
});

// Async function to fetch Reddit posts, supporting an optional category parameter
export const fetchPosts = (category = 'popular') => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(`https://www.reddit.com/r/${category}.json`);
      const posts = response.data.data.children.map(child => child.data);
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

// Async function to search for posts, supporting sorting options
export const searchPosts = (query, sort = 'relevance') => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(`https://www.reddit.com/search.json?q=${query}&sort=${sort}`);
      const posts = response.data.data.children.map(child => child.data);
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
