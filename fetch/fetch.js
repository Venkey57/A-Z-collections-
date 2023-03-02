fetch('https://fakestoreapi.com/products').then((data)=>{
    
    console.log(data);
    return data.json();
   
}).then ((completed)=>{
    console.log(completed);
    console.log(completed[2].title)
    let data1 = "";
    completed.map((values)=>{
        console.log(values);
        data1 +=`<div class="card">
        <h1 class="tittle">${values.title}</h1>
        <img class="image"
            src=${values.image}
            alt="img">
        <p class="des">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    })
    document.getElementById("cards").innerHTML=data1

})
.catch((error)=>{
    console.log(error)
})