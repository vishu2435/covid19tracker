var url="https://covid19.mathdro.id/api"

var FetchData=(country)=>{
   var changeableUrl=url;
   if(country!=="global"&&country!==null){
    changeableUrl=url+"/countries/"+country;
   }
    console.log(changeableUrl);   
    return new Promise((resolve,reject)=>{
    fetch(changeableUrl)
    .then(response=>{
        resolve(response.json());
    })
    .catch(error=>{
        reject(error)
    })
   }) 
}


var FetchDailyData=()=>{
    return new Promise((resolve,reject)=>{
        fetch("https://covid19.mathdro.id/api/daily")
        .then(response=>{
            resolve(response.json());
        })
        .catch(error=>{
            reject(error)
        })
       })
}


var FetchCountries=()=>{
    return new Promise((resolve,reject)=>{
        fetch("https://covid19.mathdro.id/api/countries")
        .then(response=>{
            response.json().then(data=>{
                var cName=data.countries.map(c=>{return c.name})
                resolve(cName);
            })
        }).catch(err=>{
            console.log(err);
            reject(err);
            
        })
    })
}
export default FetchData
export {FetchDailyData}
export {FetchCountries};