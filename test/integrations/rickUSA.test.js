import { 
  expect, 
  describe, 
  test, 
  jest, 
  beforeEach 
} from '@jest/globals'
import axios from 'axios'
import fs from 'fs/promises'

import RickUSA from '../../src/business/integrations/rickUSA.js'

  describe('RickUSA', () => {

    beforeEach(() => {
      jest.clearAllMocks()
    })

    test('getCharactersFromXML should return a list of Character Entity', async () => {
      const response = await fs.readFile('./test/mocks/characters.xml')
      
      jest.spyOn(axios, 'get').mockResolvedValue({ data: response })
      
      const result = await RickUSA.getCharactersFromXML()

      expect(result).toMatchObject(
        [
          {
          "gender": 
          "Male", 
          "id": 10, 
          "location": 
          "Worldender's lair", 
          "name": "Alan Rails", 
          "origin": "unknown", 
          "species": "Human", 
          "status": "Dead", 
          "type": "Superhuman (Ghost trains summoner)"
          }
        ]
      )
    })

    test('getCharactersFromXML should return an empty list if the API returns nothing', async () => {
      const response = await fs.readFile('./test/mocks/characters-empty.xml')
      
      jest.spyOn(axios, 'get').mockResolvedValue({ data: response })
      
      const result = await RickUSA.getCharactersFromXML()

      expect(result).toStrictEqual([])
    })
  });