import { Animal } from './Animal'

export class Cat extends Animal {
  sound() {
    return this.meow()
  }

  private meow() {
    return 'Meow'
  }
}
