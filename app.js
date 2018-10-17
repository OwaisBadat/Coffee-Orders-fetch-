
let coffeeType = document.getElementById('coffeeType')
let orderEmail = document.getElementById('emailAddress')
let searchEmail = document.getElementById('searchEmail')
let addOrderButton = document.getElementById('addOrder')



const ORDER_LIST = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/';


fetch(ORDER_LIST)
.then(function(response){

  return response.json()
}).then(function(coffeeOrder){
  let listItems = ""
  console.log(coffeeOrder)
  for (email in coffeeOrder) {

    listItems += `<li>Email: ${coffeeOrder[email].emailAddress}</li>
    <p>Coffee Order: ${coffeeOrder[email].coffee}</p>
    `
  }

  currentOrders.innerHTML = (listItems)
})

// function displayOrder(orders){
//   let listItems = ""
//
//   for (key in orders){
//     let order = orders[key]
//   }
// }





addOrderButton.addEventListener('click', function() {
    let coffeeType = $('#coffeeType').val();
    let orderEmail = $('#emailAddress').val();
    console.log(coffeeType)
    console.log(orderEmail);
    fetch(ORDER_LIST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailAddress: orderEmail,
            coffee: coffeeType,
        })
    })
    
});
