import http from 'http';
import { User } from './user';

export default function request(url: string): Promise<User> {
  return new Promise(resolve => {
    http.get({ path: url }, response => {
      let data = {} as User;
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
