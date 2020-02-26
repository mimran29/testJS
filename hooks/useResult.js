import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,setResult] = useState(''); //results = restaurants
    const [errorMessage,setErrorMessage]= useState('');
   
    const SearchApi = async (searchTerm)=>{
        try{

        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term : searchTerm,
                location : 'Kuala Lumpur'

            }
        });
        setResult(response.data.businesses);
        } catch (err){
        setErrorMessage('Something went Wrong');
        }
       
    };

    useEffect(()=>{
        SearchApi('pasta');

    },[]);

    return [SearchApi,results,errorMessage];

};