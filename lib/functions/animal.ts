import { Animal } from '../Animal'
import { AnimalKind } from '../types'
import { Cat } from '../Cat'
import { Context } from 'koa'
import { Dog } from '../Dog'

export const getAnimalKindFromContext = (ctx: Context): AnimalKind => {
  const kind = String(ctx.query.kind).toLowerCase()
  switch (kind) {
    case 'dog':
      return AnimalKind.Dog
    case 'cat':
      return AnimalKind.Cat
    default:
      return AnimalKind.Dog
  }
}

export const constructAnimal = (kind: AnimalKind, name: string): Animal => {
  switch (kind) {
    case AnimalKind.Dog:
      return new Dog(name)
    case AnimalKind.Cat:
      return new Cat(name)
  }
}
