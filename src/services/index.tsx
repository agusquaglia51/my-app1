import {POKEMON_URL} from '../constants'

import axios from 'axios'
  //services
  export async function bringPokemons(){  
    return await axios.get(POKEMON_URL);
}

