import RickBRL from "../integrations/rickBRL.js"

export default class RickBRLAdapter {
  static async getCharacters() {
    return RickBRL.getCharactersFromJSON()
  }
}