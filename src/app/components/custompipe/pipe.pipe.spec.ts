import { Custompipe } from './pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Custompipe();
    expect(pipe).toBeTruthy();
  });
});
