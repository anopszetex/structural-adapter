import RickBRL from '../../src/business/integrations/rickBRL.js'
import RickBRLAdapter from '../../src/business/adapters/rickBRLAdapter.js'

import { 
  expect, 
  describe, 
  test, 
  jest, 
  beforeEach 
} from '@jest/globals'

  describe('RickBRLAdapter', () => {

    beforeEach(() => {
      jest.clearAllMocks()
    })

    test('getCharacters should be an adapter for rickBRLAdapter.getCharactersJSON', async () => {
      const brlIntegration = jest.spyOn(
        RickBRL,
        RickBRL.getCharactersFromJSON.name
      ).mockResolvedValue([])

      const result = await RickBRLAdapter.getCharacters()

      expect(brlIntegration).toHaveBeenCalled()
      expect(result).toEqual([])
    });
  })