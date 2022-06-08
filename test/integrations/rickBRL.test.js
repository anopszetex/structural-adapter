import { 
  expect, 
  describe, 
  test, 
  jest, 
  beforeEach 
} from '@jest/globals'
import axios from 'axios'
import fs from 'fs/promises'

import Character from '../../src/entities/character.js'
import RickBRL from '../../src/business/integrations/rickBRL.js'

  describe('RickBRL', () => {
    
    beforeEach(() => {
      jest.clearAllMocks()
    })

    test('getCharactersFromJSON should return a list of Character Entity', async () => {
      const response = JSON.parse(await fs.readFile('./test/mocks/characters.json'))
      
      const expected = response.results.map(char => new Character(char))

      jest.spyOn(axios, 'get').mockResolvedValue({ data: response })
      
      const result = await RickBRL.getCharactersFromJSON()

      expect(result).toStrictEqual(expected)
    })

    test.todo('getCharactersFromJSON should return an empty list if the API returns nothing')
  });