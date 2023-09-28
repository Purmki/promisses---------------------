
// const myButton = document.getElementById("myBtn")

// function chuckNorris(){
// fetch('https://api.chucknorris.io/jokes/random')
//     .then(Response=>{
//     console.log(Response);
//     return Response.json();
// })
// .then(data=>{
//     console.log(data);
//     // container.innerHTML+=data.map(post=>
//     //     `<div>
//     //     <h3>${post.title}</h3>
//     //        <p>
//     //         ${post.body}
//     //        </p>
//     //      </div> `).join(" ")
//      const container = document.getElementById("container");
//     container.innerHTML=`<h1>${data.value}</h1>`
   
// })
// .catch(error=>{
//     console.log(error);
// });
// }
// myButton.addEventListener("click",chuckNorris)


  

//חשוב ביותר להבנה על עבודה של פונקציית קול באק ופארמטר של פונקצי
// const myButton = document.getElementById("myBtn")

// function weather(userCity){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${userCity}&appid=d407c23c84bcbce8dc544d4ae41b3daa`)
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data);
//         const container = document.getElementById("container");
//         container.innerHTML=`<h1>${data.main.temp}</h1>`
        
//     })
//     .catch(error=>{
//         console.log(error);
//     });
// }
// myButton.addEventListener("click",()=>{
//     weather(myInput.value)
// })




const myButton = document.getElementById("myBtn")

function weather(userCity){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=d407c23c84bcbce8dc544d4ae41b3daa`)
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const container = document.getElementById("container");
        container.innerHTML=`<h1>${data.city.name}</h1>`
       data.list
        .map(
            (weather)=>
        
        container.innerHTML+=`<p>${weather.main.temp}<p>
        <p>${weather.dt_txt}<p>
        <p>${weather.main.humidity}<p>`
        )

        
    })
    .catch(error=>{
        console.log(error);
    });

}
myButton.addEventListener("click",()=>{
    weather(myInput.value)
})






// let counter=0
// const booksArray=[]
// const logButton = document.getElementById("myBtn");
// logButton.addEventListener("click", function() {
//     counter++
//     const myInput1 = document.getElementById("myInput1").value;
//     const myInput2 = document.getElementById("myInput2").value;
//     const myInput3 = document.getElementById("myInput3").value;
//     const book = {
//         title: myInput1,
//         page: +myInput2,
//         author: myInput3
//     };
//     if(counter<4){
//         booksArray.push(book);
//         console.log(booksArray);
//     }
//     else if(counter==4){
//         localStorage.setItem("booksArray",JSON.stringify(booksArray))
//     }
//     else{
//         const storageValue=localStorage.getItem("booksArray")
//         console.log(JSON.parse(storageValue));
//         logButton.disabled = true
//     }
// });









   







