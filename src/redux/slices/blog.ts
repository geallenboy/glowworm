import { createSlice } from '@reduxjs/toolkit';

import axios from '@/utils/axios';

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
  post: null,
  recentPosts: [],
  hasMore: true,
  index: 0,
  step: 11
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsInitial(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getMorePosts(state) {
      const setIndex = state.index + state.step;
      state.index = setIndex;
    },
    noHasMore(state) {
      state.hasMore = false;
    },
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },
    getRecentPostsSuccess(state, action) {
      state.isLoading = false;
      state.recentPosts = action.payload;
    }
  }
});

export default slice.reducer;

export const { getMorePosts } = slice.actions;

export function getAllPosts() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/all');
      dispatch(slice.actions.getPostsSuccess(response.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getPostsInitial(index: any, step: any) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts', {
        params: { index, step }
      });
      const results = response.data.results.length;
      const { maxLength } = response.data;

      dispatch(slice.actions.getPostsInitial(response.data.results));

      if (results >= maxLength) {
        dispatch(slice.actions.noHasMore());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getPost(title: any) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title }
      });
      dispatch(slice.actions.getPostSuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getRecentPosts(title: any) {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title }
      });

      dispatch(slice.actions.getRecentPostsSuccess(response.data.recentPosts));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
