
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
const myButton = document.getElementById("myBtn")

function weather(userCity){
    fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${userCity}&appid=d407c23c84bcbce8dc544d4ae41b3daa`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const container = document.getElementById("container");
        container.innerHTML=`<h1>${data.main.temp}</h1>`
        
    })
    .catch(error=>{
        console.log(error);
    });
}
myButton.addEventListener("click",()=>{
    weather(myInput.value)
})



   







