import React,{useState} from 'react';
import FetchData from '../api/Fetchdata';
import Onecard from './onecard';
import {Grid} from '@material-ui/core';
export default function Card(props){
    // var data=FetchData();
    // var [Content,setContent]=useState([]);
    // var [date,setDate]=useState("");
    // var totalCases=0;
    // var count=0
    
    var style=[
        {
            borderBottom:"5px solid blue"
        },
        {
            borderBottom:"5px solid green"
        },
        {
            borderBottom:"5px solid red"
        }
    ]
    
    // data.then(da=>{
          
    //         var {confirmed,recovered,deaths,lastUpdate}=da;
           
    //         setDate(new Date(lastUpdate).toDateString());
    //         setContent(p=>{
    //             return [{...confirmed,title:"Confirmed"},{...recovered,title:"Recovered"},{...deaths,title:"Deaths"}]
    //         })
            
    //        // console.log(Content[0])        
            
            
    //     }
    // )
    var styleCount=-1;
    if(!props.content[0]){
       return <h1>Loading....</h1>
    }
    return (
        <Grid container spacing={3} item direction="row">
            {props.content.map(c=>{
               styleCount++
               return( <Grid item xs={12} sm={4}>
                <Onecard title={c.title} style={style[styleCount]} value={c.value} date={props.date}/>
                </Grid>);
            })}
        </Grid>
    )
}