import request from './request';

export interface User {
  name: string;
  userId: number;
}

export async function getUserName(userId: number): Promise<string> {
  const user = await request(`/users/${userId}`);
  return user.name;
}
