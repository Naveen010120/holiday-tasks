let text=document.querySelector('.bg');
let h2=document.createElement('h2');
let h3=document.createElement('h3');
let h4=document.createElement('h4');
let h5=document.createElement('h5');
let h6=document.createElement('h6')
h2.innerHTML="<span style='color:green;text-align:center;'>Current Wheather</span>"
fetch("https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true")
.then(Response=>Response.json())
.then(Element=>{
    for(key in Element){
       if(typeof key[Element]!="object" && Element[key]!=null){
       for(firstInner in Element[key]){
           if(firstInner=="temperature"){
           h3.innerHTML=`<strong>${firstInner}:${Element[key][firstInner]}.7*C</strong>` 
        }else if(firstInner=="windspeed"){
            h4.innerHTML=`<b>${firstInner} :${Element[key][firstInner]}km/h</b>`
        }else if(firstInner=="weathercode"){
            h5.innerHTML=`<section>${firstInner} :${Element[key][firstInner]}</section>`
        }else if(firstInner=="time"){
            h6.innerHTML=`Observed ${firstInner} :${Element[key][firstInner]}AM`
      
        }
        
       }
       }
    }
})
text.append(h2,h3,h4,h5,h6);