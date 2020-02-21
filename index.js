// Add your code here

function configObj(name, email) {
    return {
        method: 'POST',
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

function submitData(name, email) {
    fetch("http://localhost:3000/users", configObj(name, email) )
        .then( resp => resp.json() )
        // .then( userData => console.log(userData) )
        .then( userData => {
        document.body.innerHTML = userData["id"] 
        })
        .catch( error => document.body.innerHTML = error.message)
};