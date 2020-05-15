import React,{useState} from 'react'

import {FetchDailyData} from '../api/Fetchdata'
import {Line,Bar} from 'react-chartjs-2'

export default function Chart(props){
    var data=FetchDailyData();
    
    var [Content,setContent]=useState([]);
    if(Content.length===0){
    data.then(data=>{
      
        setContent(p=>{
            return data;
        })
    })
    }
    const line= <Line
    data= {{
        labels: Content.map(c=>{
            return c.reportDate
        }),
        datasets: [{
    label: "Reported Cases",
    
    borderColor: 'blue',
    data: Content.map(c=>{
            return c.confirmed.total
        })
    },
    {
        label:"Deaths",
        borderColor:"red",
        data:Content.map(c=>{return c.deaths.total})
    }
    
    ]
    }}
     options={{maintainAspectRatio:false}}
     height={500}
     width={200}   

        />


    if(props.country!==null&&props.country!=="global"&&props.data!==null){
    console.log("From Bar chart",props.data);
    
    var bar=(<Bar
        data={{
            labels:["Confirmed","Recovered","Dead"],
            datasets:[
                {
                    label:["Confirmed","Recovered","Dead"],
                    backgroundColor:["blue","green","red"],
                    data:props.data.map(d=>(d.value))
                }
            ]
        }}
        options={{
            maintainAspectRatio:false,
            title:{
                display:true,
                text:`State of ${props.country}`,
                fontSize:20
            },
            legend:{
                display:false
                
            }
            
        }}
        height={500}
     width={200}   

    />)
    }
    return (
        <React.Fragment>
            
            {props.country!==null&&props.country!=="global"&&props.data!==null?bar:line}
    </React.Fragment>
    )
}
