import { random, sample } from 'lodash';
import { MockMethod } from 'vite-plugin-mock';

import mockData from '../src/utils/mock-data';
import { resultSuccess } from './_util';

export default [
  {
    url: '/api/user/profile',
    timeout: 2000,
    method: 'get',
    response: () => {
      const profile = {
        id: mockData.id(1),
        cover: mockData.image.cover(1),
        position: '用户界面设计师',
        follower: random(99999),
        following: random(99999),
        quote: '我喜欢甜李子，我喜欢燕麦蛋糕。甜卷焦糖我喜欢枣。顶部蛋糕圆片.',
        country: mockData.address.country(1),
        email: mockData.email(1),
        company: mockData.company(1),
        school: mockData.company(2),
        role: '管理',
        facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
        instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
        linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
        twitterLink: `https://www.twitter.com/caitlyn.kerluke`
      };
      return resultSuccess({ profile });
    }
  },
  {
    url: '/api/user/all',
    timeout: 2000,
    method: 'get',
    response: () => {
      const users = [...Array(24)].map((_, index) => ({
        id: mockData.id(index),
        avatarUrl: mockData.image.avatar(index),
        cover: mockData.image.cover(index),
        name: mockData.name.fullName(index),
        follower: random(9999),
        following: random(9999),
        totalPost: random(9999),
        position: mockData.role(index)
      }));
      return resultSuccess({ users });
    }
  },
  {
    url: '/api/user/manage-users',
    timeout: 2000,
    method: 'get',
    response: () => {
      const users = [...Array(24)].map((_, index) => ({
        id: mockData.id(index),
        avatarUrl: mockData.image.avatar(index),
        name: mockData.name.fullName(index),
        email: mockData.email(index),
        phoneNumber: mockData.phoneNumber(index),
        address: '地址3002',
        country: mockData.address.country(index),
        state: '中国',
        city: '南京',
        zipCode: '85807',
        company: mockData.company(index),
        isVerified: mockData.boolean(index),
        status: sample(['active', 'banned']) || 'active',
        role: mockData.role(index)
      }));
      return resultSuccess({ users });
    }
  },
  {
    url: '/api/user/social/followers',
    timeout: 2000,
    method: 'get',
    response: () => {
      const followers = [...Array(18)].map((_, index) => ({
        id: mockData.id(index),
        avatarUrl: mockData.image.avatar(index),
        name: mockData.name.fullName(index),
        country: mockData.address.country(index),
        isFollowed: mockData.boolean(index)
      }));
      return resultSuccess({ followers });
    }
  },
  {
    url: '/api/user/social/friends',
    timeout: 2000,
    method: 'get',
    response: () => {
      const friends = [...Array(18)].map((_, index) => ({
        id: mockData.id(index),
        avatarUrl: mockData.image.avatar(index),
        name: mockData.name.fullName(index),
        role: mockData.role(index)
      }));
      return resultSuccess({ friends });
    }
  },
  {
    url: '/api/user/social/gallery',
    timeout: 2000,
    method: 'get',
    response: () => {
      const gallery = [...Array(18)].map((_, index) => ({
        id: mockData.id(index),
        title: mockData.text.title(index),
        postAt: mockData.time(index),
        imageUrl: mockData.image.cover(index)
      }));
      return resultSuccess({ gallery });
    }
  },
  {
    url: '/api/user/account/cards',
    timeout: 2000,
    method: 'get',
    response: () => {
      const cards = [...Array(2)].map((_, index) => ({
        id: mockData.id(index),
        cardNumber:
          (index === 0 && '**** **** **** 1234') ||
          (index === 1 && '**** **** **** 5678') ||
          '**** **** **** 5678',
        cardType: (index === 0 && 'master_card') || (index === 1 && 'visa') || 'master_card'
      }));
      return resultSuccess({ cards });
    }
  },
  {
    url: '/api/user/account/address-book',
    timeout: 2000,
    method: 'get',
    response: () => {
      const addressBook = [...Array(4)].map((_, index) => ({
        id: mockData.id(index),
        name: mockData.name.fullName(index),
        phone: mockData.phoneNumber(index),
        country: mockData.address.country(index),
        state: '中国',
        city: '香港',
        street: '41256 ',
        zipCode: '85807'
      }));
      return resultSuccess({ addressBook });
    }
  },
  {
    url: '/api/user/account/invoices',
    timeout: 2000,
    method: 'get',
    response: () => {
      const invoices = [...Array(10)].map((_, index) => ({
        id: mockData.id(index),
        createdAt: mockData.time(index),
        price: mockData.number.price(index)
      }));
      return resultSuccess({ invoices });
    }
  },
  {
    url: '/api/user/account/notifications-settings',
    timeout: 2000,
    method: 'get',
    response: () => {
      const notifications = {
        activityComments: true,
        activityAnswers: true,
        activityFollows: false,
        applicationNews: true,
        applicationProduct: false,
        applicationBlog: false
      };
      return resultSuccess({ notifications });
    }
  },
  {
    url: '/api/user/posts',
    timeout: 2000,
    method: 'get',
    response: () => {
      const posts = [...Array(3)].map((_, index) => ({
        id: mockData.id(index),
        author: {
          id: mockData.id(8),
          avatarUrl: mockData.image.avatar(1),
          name: 'garçon'
        },
        isLiked: true,
        createdAt: mockData.time(index),
        media: mockData.image.feed(index),
        message: mockData.text.sentence(index),
        personLikes: [...Array(36)].map((_, index) => ({
          name: mockData.name.fullName(index),
          avatarUrl: mockData.image.avatar(index + 2)
        })),
        comments: (index === 2 && []) || [
          {
            id: mockData.id(7),
            author: {
              id: mockData.id(8),
              avatarUrl: mockData.image.avatar(sample([2, 3, 4, 5, 6]) || 2),
              name: mockData.name.fullName(index + 5)
            },
            createdAt: mockData.time(2),
            message: '当我们第一次见面时，我们很害怕'
          },
          {
            id: mockData.id(9),
            author: {
              id: mockData.id(10),
              avatarUrl: mockData.image.avatar(sample([7, 8, 9, 10, 11]) || 7),
              name: mockData.name.fullName(index + 6)
            },
            createdAt: mockData.time(3),
            message:
              '又一次。不可能。当他们画了一个火炬，他们被画了，被画了，他们总是被要求的。但是阅读.'
          }
        ]
      }));
      return resultSuccess({ posts });
    }
  }
] as MockMethod[];
