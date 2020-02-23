// Add your code here
let userInfo = {
    name: 'Steve',
    email: 'steve@steve.com'
}

let reqObj = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(userInfo)
};


function submitData(name, email) {
    return fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(personData => document.body.innerHTML = personData.id)
        .catch(err => document.body.innerHTML = err)
       
    }

    submitData()
