export {};
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(a: number, b: number): R;
    }
  }
}
