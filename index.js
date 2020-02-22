// declared variables
const dogsURL = "http://localhost:3000/dogs"
const catsURL = "http://localhost:3000/cats"
const usersURL = "http://localhost:3000/users"
const robotsURL = "http://localhost:3000/robots"
const ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=OxAUCcJUKtQrQ1kqMHoDype2kxM5A3Nz"
const body = document.querySelector('body');
let dogsData
let catsData
let usersData
let robotsData

// fetch objects

const configObj = (name, email) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }
};

//  fetch requests

// fetch(ticketMasterURL)
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const submitData = (name, email) => {
  // event.preventDefault()
  // const name = event.target[0].value
  // const email = event.target[1].value
  return fetch(usersURL,configObj(name, email))
    .then(function(response) {
    return response.json();
  })
  .then(newUserData => renderNewUser(newUserData))
  .catch(err => renderNewUserError(err))
}

// defined functions

const renderNewUser = (newUserData) => {
  console.log(newUserData['id'])
  const newUserCard = `<div class="card">
    <h2>Name: ${newUserData.name}</h2>
    <p>Email: ${newUserData.email}</p>
    <p>ID: ${newUserData.id}</p>
  `
  body.innerHTML += newUserCard
}

const renderNewUserError = (err) => {
  console.log(err)
  const errorMessage = `<div class="card">
    <h2>Error: ${err}</h2>
  `
  body.innerHTML += errorMessage
}


// inkoved functions
