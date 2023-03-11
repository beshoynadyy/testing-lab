
import { TestPipe } from './test.pipe';

describe('TestPipe', () => {
  const pipe = new TestPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return number * 5',()=>{
  expect(pipe.transform(2)).toEqual(10)
  })
  it('if string',()=>{
    expect(pipe.transform("hi")).toEqual('not a number')
    })
});
