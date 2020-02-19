// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObject)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            let ptag = document.createElement('p')
            document.body.appendChild(ptag)
            ptag.innerHTML = object.id
        })
        .catch(function(error) {
            let errorMessage = document.createElement('p')
            document.body.appendChild(errorMessage)
            errorMessage.innerHTML = error.message
        })
}