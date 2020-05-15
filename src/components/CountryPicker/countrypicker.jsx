import React ,{ useState} from 'react'
import { FormControl } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import {FetchCountries} from '../api/Fetchdata'
export default function CountryPicker(props){
    var data=FetchCountries();
    var [Content,setContent]=useState([]);
    
    data.then(data=>{
        setContent(p=>{
            return data;
        })  
    })
    return(
        <FormControl style={{width:"100%",margin:"90px 0"}}>

        
        <NativeSelect onChange={props.handleChange} value={props.value}>
            <option value="global">Global</option>
            {Content.map(c=>{
                return <option value={c}>{c}</option>})}
        </NativeSelect>
        </FormControl>
    )
}