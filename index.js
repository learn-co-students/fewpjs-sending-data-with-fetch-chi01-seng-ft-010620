// Add your code here

const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', newPostObj(name, email))
        .then(resp => resp.json())
        .then(object => document.body.innerHTML = object["id"])
        .catch(err => document.body.innerHTML = err.message)
}

const newPostObj = (name, email) =>  {
    return { 
        method: "POST",
        headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
        }, 
        body: JSON.stringify( {
        name, 
        email
        })
    }
}

// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }