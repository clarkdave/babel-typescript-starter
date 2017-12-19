export abstract class Animal {
  constructor(readonly name: string) {}

  abstract sound(): string

  toObject() {
    return {
      name: this.name,
      sound: this.sound(),
    }
  }
}
