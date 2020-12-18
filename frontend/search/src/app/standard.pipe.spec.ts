import { StandardPipe } from './standard.pipe';

describe('StandardPipe', () => {
  it('create an instance', () => {
    const pipe = new StandardPipe();
    expect(pipe).toBeTruthy();
  });
});
