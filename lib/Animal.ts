export abstract class Animal {
  constructor(readonly name: string) {}

  abstract speak(): string

  toObject() {
    return {
      name: this.name,
      speaking: this.speak(),
    }
  }
}
