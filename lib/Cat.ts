import { Animal } from './Animal'

export class Cat extends Animal {
  speak() {
    return this.meow()
  }

  private meow() {
    return 'Meow'
  }
}
