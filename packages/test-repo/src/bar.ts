import {
  SomeLongConstantName,
  SomeLongConstantName2,
  SomeLongConstantName3,
  SomeLongConstantName4,
  SomeLongConstantName5,
  baz,
} from './baz'
import { far, foo } from './foo'

export function bar(n: number): number {
  return (
    foo(n) +
    baz(n) +
    far(n) +
    SomeLongConstantName +
    SomeLongConstantName2 +
    SomeLongConstantName3 +
    SomeLongConstantName4 +
    SomeLongConstantName5
  )
}
