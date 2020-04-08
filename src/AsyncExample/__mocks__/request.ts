import { User } from '../user';
const users: User[] = [
  {
    userId: 4,
    name: 'Mark',
  },
  {
    userId: 5,
    name: 'Manu',
  },
];

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userId = parseInt(url.substr(`/users/`.length), 10);
    process.nextTick(() => {
      users.find(user => user.userId === userId)
        ? resolve(users.find(user => user.userId === userId))
        : reject({ error: `User with ${userId} not found` });
    });
  });
}
