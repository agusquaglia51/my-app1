import {useDispatch, useSelector} from 'react-redux';
import { fetchData } from '../reducers/info/infoActions';
import { RootState } from '../reducers';

function FlatList() {
    //
    const dispatch = useDispatch();
    const info = useSelector((state:RootState) => state.information)
    return(
       <div>
            <button onClick={() => dispatch(fetchData())}>GET POKEMONS</button>
            <ul>
                {
                    info.searchResult ?
                    info.searchResult.map((item: any) =>(
                        <li key={item.name}>{item.name}</li>
                    )) : null
                    }
            </ul>
       </div>
    )
}

export default FlatList;