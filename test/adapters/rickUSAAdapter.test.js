import RickUSA from '../../src/business/integrations/rickUSA.js'
import RickUSAAdapter from '../../src/business/adapters/rickUSAAdapter.js'

import { 
  expect, 
  describe, 
  test, 
  jest, 
  beforeEach 
} from '@jest/globals'

  describe('RickUSAAdapter', () => {

    beforeEach(() => {
      jest.clearAllMocks()
    })

    test('getCharacters should be an adapter for RickUSAAdapter.getCharactersXML', async () => {
      const usaIntegration = jest.spyOn(
        RickUSA,
        RickUSA.getCharactersFromXML.name
      ).mockResolvedValue([])

      const result = await RickUSAAdapter.getCharacters()

      expect(usaIntegration).toHaveBeenCalled()
      expect(result).toEqual([])
    });
  })