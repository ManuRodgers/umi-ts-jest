import { getUserName } from '../user';

jest.mock('../request.ts');

it('should work with promises', async () => {
  expect.assertions(1);
  const data = await getUserName(4);
  return expect(data).toEqual('Mark');
});
