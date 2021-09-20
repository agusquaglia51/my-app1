import{
    FETCHING_INFO,
    FETCHING_INFO_FAILURE,
    FETCHING_INFO_SUCCESS
} from './infoActionTypes'
import {bringPokemons} from '../../services'

export const getData = () =>({
    type: FETCHING_INFO
})

export const getDataFailure = (errors:string) =>({
    type: FETCHING_INFO_FAILURE,
    payload: {errors}
})

export const getDataSucces = (data:Object) =>({
    type: FETCHING_INFO_SUCCESS,
    payload: {data}
})

// 
export const fetchData = () => (dispatch:any) => {
        dispatch(getData())
        return bringPokemons()  
            .then(response => {    
                dispatch(getDataSucces(response.data.results))
            })
            .catch(error => {
                dispatch(getDataFailure(error))
            })
}