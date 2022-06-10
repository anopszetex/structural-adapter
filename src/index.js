import RickBRLAdapter from "./business/adapters/rickBRLAdapter.js"
import RickUSAAdapter from "./business/adapters/rickUSAAdapter.js"

const data = [
    RickBRLAdapter, 
    RickUSAAdapter
  ].map(integration => integration.getCharacters())


const all = await Promise.allSettled(data)

const successes = all.filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value)
    .reduce((acc, element) => [...acc, ...element], [])

const errors = all.filter(({ status }) => status === 'rejected')

console.table(successes);
console.table(errors);