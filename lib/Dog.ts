import { Animal } from './Animal'
import { sealed } from './functions/decorators'

@sealed
export class Dog extends Animal {
  sound() {
    return this.bark()
  }

  private bark() {
    return 'Woof'
  }
}
