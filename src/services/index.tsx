import {POKEMON_URL} from '../constants'

import axios from 'axios'

  export async function bringPokemons(){
    return await axios.get(POKEMON_URL);
}

