// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })

    .then(function(response){
        return response.json()
    })
    .then(function(obj){
        document.body.innerHTML = obj["id"]
    })
    .catch(function(err){
        alert("ya!")
        document.body.innerHTML = err.message
    })
} 