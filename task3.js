let container=document.querySelector('.container')
fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then(Element=>{
    for(data of Element){
        for(key in data){
            if(key=='image'){
            let img=document.createElement('img');
            img.src=data[key];
            container.appendChild(img);
            }
        }
    }
})