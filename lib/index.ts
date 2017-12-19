import 'source-map-support/register'

import * as Koa from 'koa'

import { Animal } from './Animal'
import { AnimalKind } from './types'
import { Cat } from './Cat'
import { Context } from 'koa'
import { Dog } from './Dog'
import { getAnimalKindFromContext, constructAnimal } from './functions/animal'

const app = new Koa()
const port = process.env.PORT || 3300

interface Query {
  name?: string
}

app.use(async ctx => {
  const name = (ctx.query as Query).name || 'Alice'
  const kind = getAnimalKindFromContext(ctx)
  const animal = constructAnimal(kind, name)

  ctx.body = {
    animal: animal.toObject(),
  }
})

app.listen(port, () => console.log(`Listening on :${port}`))
