import { createSlice } from '@reduxjs/toolkit';
import { filter, map } from 'lodash';

import axios from '@/utils/axios';

const initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  posts: [],
  users: [],
  userList: [],
  followers: [],
  friends: [],
  gallery: [],
  cards: null,
  addressBook: [],
  invoices: [],
  notifications: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    deleteUser(state: any, action) {
      const deleteUser = filter(state.userList, (user: any) => user.id !== action.payload);
      state.userList = deleteUser;
    },
    getFollowersSuccess(state, action) {
      state.isLoading = false;
      state.followers = action.payload;
    },
    onToggleFollow(state: any, action) {
      const followerId = action.payload;

      const handleToggle = map(state.followers, (follower) => {
        if (follower.id === followerId) {
          return {
            ...follower,
            isFollowed: !follower.isFollowed
          };
        }
        return follower;
      });

      state.followers = handleToggle;
    },
    getFriendsSuccess(state, action) {
      state.isLoading = false;
      state.friends = action.payload;
    },
    getGallerySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },
    getUserListSuccess(state, action) {
      state.isLoading = false;
      state.userList = action.payload;
    },
    getCardsSuccess(state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },
    getAddressBookSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = action.payload;
    },
    getInvoicesSuccess(state, action) {
      state.isLoading = false;
      state.invoices = action.payload;
    },
    getNotificationsSuccess(state, action) {
      state.isLoading = false;
      state.notifications = action.payload;
    }
  }
});
export default slice.reducer;
export const { onToggleFollow, deleteUser } = slice.actions;

export function getProfile() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/profile');
      dispatch(slice.actions.getProfileSuccess(response.data.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getPosts() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/posts');
      dispatch(slice.actions.getPostsSuccess(response.data.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getFollowers() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/social/followers');
      dispatch(slice.actions.getFollowersSuccess(response.data.data.followers));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getFriends() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/social/friends');
      dispatch(slice.actions.getFriendsSuccess(response.data.data.friends));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getGallery() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/social/gallery');
      dispatch(slice.actions.getGallerySuccess(response.data.data.gallery));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUserList() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/manage-users');
      dispatch(slice.actions.getUserListSuccess(response.data.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getCards() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/cards');
      dispatch(slice.actions.getCardsSuccess(response.data.data.cards));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getAddressBook() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/address-book');
      dispatch(slice.actions.getAddressBookSuccess(response.data.data.addressBook));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getInvoices() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/invoices');
      dispatch(slice.actions.getInvoicesSuccess(response.data.data.invoices));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getNotifications() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/account/notifications-settings');
      dispatch(slice.actions.getNotificationsSuccess(response.data.data.notifications));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUsers() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/all');
      dispatch(slice.actions.getUsersSuccess(response.data.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
