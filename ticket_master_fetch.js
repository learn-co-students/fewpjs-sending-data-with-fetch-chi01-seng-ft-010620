// // Add your code here
// const ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=OxAUCcJUKtQrQ1kqMHoDype2kxM5A3Nz"
//
// let ticketMasterData
// let eventNames
//
//
// fetch(ticketMasterURL)
//   .then(resp => resp.json())
//   .then(data => {
//     ticketMasterData = data['_embedded']["events"][0]
//     const eventValues = Object.values(ticketMasterData);
//     console.log(eventValues)
//     console.log(ticketMasterData)
//     })
//   .catch(err => console.log(err))
//
// const sendDataObj = {
//
// }
//
// fetch("https://app.ticketmaster.com/discovery/v2/events/", sendDataObj)
