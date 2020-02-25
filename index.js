function postObject(name, email) {
    let reqObj = {
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
    return reqObj
}


function submitData(name, email) {
    return fetch("http://localhost:3000/users", postObject(name, email))
    .then(resp => resp.json())
    .then(object => document.body.append(object["id"]))
    .catch(function(error) {
        document.body.innerHTML = error.message
    }
)}
