import { far, foo } from './foo'

describe('foo', () => {
  it('should multiply by two', () => {
    expect(foo(5)).toEqual(10)
  })
})

describe('far', () => {
  it('should multiply by itself', () => {
    expect(far(5)).toEqual(25)
  })
})
