import { Animal } from '../Animal'
import { AnimalKind } from '../types'
import { Cat } from '../Cat'
import { Context } from 'koa'
import { Dog } from '../Dog'

export const getAnimalKindFromQuery = (query: {
  kind?: string
}): AnimalKind => {
  const kind = query.kind ? String(query.kind).toLowerCase() : 'dog'
  switch (kind) {
    case 'dog':
      return AnimalKind.Dog
    case 'cat':
      return AnimalKind.Cat
    default:
      throw new Error(`Unknown kind of animal: ${kind}`)
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
