import { Animal } from './Animal'

export class Dog extends Animal {
  speak() {
    return this.bark()
  }

  private bark() {
    return 'Woof'
  }
}
