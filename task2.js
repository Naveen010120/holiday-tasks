let Name=document.querySelector('.name')
let card=document.querySelector('.card')
let Email=document.querySelector('.email')
let loc=document.querySelector('.location')
let phn=document.querySelector('.phone')
let dateOfBirth=document.querySelector('.dob')
let img=document.getElementById('img')
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(Element => {

        let user=Element.results[0];
        img.src=user.picture.large;
        Name.innerHTML=`<b>Name:</b> ${user.name.first} ${user.name.last}`
        Email.innerHTML=`<b>Email:</b> ${user.email}`
        loc.innerHTML=`<b>Location:</b> ${user.location.city},${user.location.state},${user.location.country}.`
        phn.innerHTML=`<b>Phone:</b> ${user.phone}`
        dateOfBirth.innerHTML=`<b>DOB:</b> ${user.dob.date}`

    })

