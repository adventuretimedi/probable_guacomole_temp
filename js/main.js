// fetch повертає нам проміс. це типу як запланувати запит,
//"Я тобі "promise" обіцяю, що щось колись принесу"

fetch('https://pokeapi.co/api/v2/pokemon/2')  //браузер, от на йди принеси
    .then(response => {                     //принесеш, попробуй розпарсити
        return response.json();
    
})
    .then(pockemon => {                    //якщо все ок, роби ось це
    console.log(pockemon);
    }).catch(error => {
        console.log(error);
})
//не якісний код вище, тому пишемо більш оптимальний