import RickUSA from "../integrations/rickUSA.js"

export default class RickUSAAdapter {
  static async getCharacters() {
    return RickUSA.getCharactersFromXML()
  }
}