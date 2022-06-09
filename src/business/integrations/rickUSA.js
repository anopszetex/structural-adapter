import axios from 'axios'
import { parseStringPromise } from 'xml2js'
import Character from '../../entities/character.js'

const URL = ''
export default class RickUSA {
  static async getCharactersFromXML () {
    const { data } = await axios.get(URL)

    const options = {
      explicitRoot: false,
      explicitArray: false
    }

    const { results: { element: results = [] } } = await parseStringPromise(data, options)
    
    const defaultFormat = Array.isArray(results) ? results : [results]

    return defaultFormat.map(char => new Character(char))
  }
}