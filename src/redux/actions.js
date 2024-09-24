import axios from 'axios';

// 发起请求的动作
export const fetchPostsRequest = () => ({
  type: 'FETCH_POSTS_REQUEST',
});

// 请求成功的动作
export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

// 请求失败的动作
export const fetchPostsFailure = (error) => ({
  type: 'FETCH_POSTS_FAILURE',
  error,
});

// 异步函数：获取 Reddit 帖子，支持可选的分类参数
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

// 异步函数：搜索帖子，支持排序选项
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
