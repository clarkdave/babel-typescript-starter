import { Animal } from './Animal'

export class Dog extends Animal {
  sound() {
    return this.bark()
  }

  private bark() {
    return 'Woof'
  }
}
