import Koa from 'koa'

import { Animal } from './Animal'
import { AnimalKind } from './types'
import { Cat } from './Cat'
import { Context } from 'koa'
import { Dog } from './Dog'
import { getAnimalKindFromQuery, constructAnimal } from './functions/animal'

const app = new Koa()
const port = process.env.PORT || 3300

interface Query {
  name?: string
  kind?: string
}

app.use(async ctx => {
  const name = (ctx.query as Query).name || 'Alice'
  const kind = getAnimalKindFromQuery(ctx.query)
  const animal = constructAnimal(kind, name)

  ctx.body = {
    animal: animal.toObject(),
  }
})

app.listen(port, () => console.log(`Listening on :${port}`))
