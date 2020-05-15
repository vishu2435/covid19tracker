import React , {useState,useEffect} from 'react'
import FetchData from './api/Fetchdata';
import Card from './cards/card'
import CountryPicker from './CountryPicker/countrypicker'
import {Grid} from '@material-ui/core';
import Chart from './Chart/chart'
var count=0;
export default function App(){
    var [countryValue,setCountryValue]=useState(null);
    var [Content,setContent]=useState([]);
    var [date,setDate]=useState("");
    function fetchCountry(countryValue){
        var data=FetchData(countryValue);
  
        data.then(da=>{
            console.log(da);
            
        var {confirmed,recovered,deaths,lastUpdate}=da;
       
        setDate(new Date(lastUpdate).toDateString());
        setContent(p=>{
            return [{...confirmed,title:"Confirmed"},{...recovered,title:"Recovered"},{...deaths,title:"Deaths"}]
        })
    }
    )
    }
    useEffect(()=>{
        if(count<1){
        fetchCountry(null);
        console.log("I am getch called");
        }
        count++;
    })
    function handleChange(e){
        setCountryValue(e.target.value);
        fetchCountry(e.target.value)
        // if(e.target.value==="global"){
        //     let contdata=FetchData();
        //     contdata.then(da=>{
          
        //         var {confirmed,recovered,deaths,lastUpdate}=da;
               
        //         setDate(new Date(lastUpdate).toDateString());
        //         setContent(p=>{
        //             return [{...confirmed,title:"Confirmed"},{...recovered,title:"Recovered"},{...deaths,title:"Deaths"}]
        //         })
                
        //        // console.log(Content[0])        
                
                
        //     }
        // )
        // }
        // else{
        //     let contdata=FetchData(e.target.value);
        //     contdata.then(da=>{
          
        //         var {confirmed,recovered,deaths,lastUpdate}=da;
               
        //         setDate(new Date(lastUpdate).toDateString());
        //         setContent(p=>{
        //             return [{...confirmed,title:"Confirmed"},{...recovered,title:"Recovered"},{...deaths,title:"Deaths"}]
        //         })
                
        //        // console.log(Content[0])        
                
                
        //     }
        // )
        // }
    }
   
    return (
        <div>
            <Grid container direction="column">
                <Grid item></Grid>
                <Grid style={{marginTop:40}} item container>
                    <Grid item xs={1} md={2}></Grid>
                    
                    <Grid item xs={10} md={8}>
                    <Card content={Content} date={date} />
                    </Grid> 
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
                <Grid item container>
                <Grid item xs={1} md={2}></Grid>
                    
                    <Grid item xs={10} md={8}>
                    <CountryPicker handleChange={handleChange} value={countryValue}/>                                       

                    </Grid> 
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
                <Grid item container>
                <Grid item xs={1} md={2}></Grid>
                    
                    <Grid item style={{height:"140%"}} xs={10} md={8}>
                    <Chart data={Content} country={countryValue} />
                    </Grid> 
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}