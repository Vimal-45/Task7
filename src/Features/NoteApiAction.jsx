
import axios from 'axios'
import { fetchData } from './NoteSlice';

export const NoteAction = ()=>async(dispatch)=>{
        try {
            const res = await axios.get('https://mocki.io/v1/4ef417eb-75d4-4e0a-ad2e-cb3683ef0cad');
            dispatch(fetchData(res.data))
            console.log(res.data);
        } catch (error) {
            console.log(error); 
        }
   
}