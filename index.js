// Add your code here

function submitData(userName,email){
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${email}`
        })
    }
return fetch('http://localhost:3000/users', configObj)
.then(resp => resp.json())
//.then(data => console.log(data))
//.then (data => renderPostData(data))
.then( function(data){
    document.body.innerHTML = data["id"]
})
.catch( function(error){
 document.body.innerHTML= error.message
})
}

function renderPostData(data){
    const bodyTag = document.querySelector('body')
  const elementtag = document.createElement("h1")

    elementtag.innerHTML = `${data["id"]}`
  bodyTag.append(elementtag)
}