import{
    FETCHING_INFO,
    FETCHING_INFO_FAILURE,
    FETCHING_INFO_SUCCESS
} from './infoActionTypes'

//state type
export interface infoState{
    isFetching: boolean,
    success: boolean,
    errors: string,
    searchResult: Array<Object>
}
//initial state
const initialState ={
    isFetching: false,
    success: false,
    errors: '',
    searchResult: [],
}

//REDUCER 
const infoReducer = (state:infoState = initialState, action:any):infoState =>{
    switch(action.type){
        case FETCHING_INFO:{
            return{
                ...state,
                isFetching: true,
                success: false,
                errors: '',
                searchResult: [],
            };
        }
        case FETCHING_INFO_FAILURE:{
            return {
                ...state,
                isFetching: false,
                success: false,
                errors: action.payload,
                searchResult: [],
            }
        }
        case FETCHING_INFO_SUCCESS:{
            return {
                ...state,
                isFetching: false,
                success: true,
                errors: '',
                searchResult: action.payload.data,
            }
        }
        default:
            return state;
    }
}

export default infoReducer;