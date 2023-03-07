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

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}