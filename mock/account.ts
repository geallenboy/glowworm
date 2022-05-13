import { v4 as uuidv4 } from 'uuid';
import { MockMethod } from 'vite-plugin-mock';

import { resultSuccess } from '../mock/_util';
import { decrypt, encrypt } from '../src/utils/crypto';

const users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'garron',
    email: 'demo@163.com',
    password: '123456',
    photoURL: '/static/mock-images/avatars/avatar_default.jpg',
    phoneNumber: '+40 777666555',
    country: '中国',
    address: '南京188号',
    state: '江苏',
    city: '南京',
    zipCode: '210000',
    about:
      'code e6f50bb95d53eeb4c4015d0e0d33f6e7e5010ab0a363bd2bc8f77231ef7fea16ebcb443269bd8cfb7c14b301a1fe0bce.',
    role: 'admin',
    isPublic: true
  }
];

export default [
  {
    url: '/api/account/login',
    timeout: 3000,
    method: 'post',
    response: (params: any) => {
      const { email, password } = params.body;
      const user: any = users.find((_user) => _user.email === email);

      if (!user) {
        return [400, { message: '没有找到对应的用户.' }];
      }

      if (user.password !== password) {
        return [400, { message: '密码错误' }];
      }
      const accessToken = encrypt(user.id);
      user.accessToken = accessToken;
      console.log(user);
      return resultSuccess({ users, accessToken });
    }
  },
  {
    url: '/api/account/register',
    timeout: 5000,
    method: 'post',
    response: (params: any) => {
      const { email, password, firstName, lastName } = params.body;
      let user: any = users.find((_user) => _user.email === email);

      if (user) {
        return [400, { message: '电子邮件地址已存在.' }];
      }

      user = {
        id: uuidv4(),
        displayName: `${firstName} ${lastName}`,
        email,
        password,
        photoURL: null,
        phoneNumber: null,
        country: null,
        address: null,
        state: null,
        city: null,
        zipCode: null,
        about: null,
        role: 'user',
        isPublic: true
      };

      const accessToken = decrypt(user.id);
      return resultSuccess({ accessToken, user });
    }
  },
  {
    url: '/api/account/my-account',
    timeout: 5000,
    method: 'get',
    response: (config: any) => {
      const { authorization } = config.headers;
      if (!authorization) {
        return [401, { message: '缺少授权令牌' }];
      }
      const accessToken = authorization.split(' ')[1];
      const userId = decrypt(accessToken);
      const user = users.find((_user) => _user.id === userId);

      if (!user) {
        return [401, { message: '无效的授权令牌' }];
      }
      return resultSuccess({ user, accessToken });
    }
  }
] as MockMethod[];
