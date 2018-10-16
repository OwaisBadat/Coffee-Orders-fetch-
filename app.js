
let coffeeTpye = document.getElementById('coffeeTpye')
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

addOrderButton.click(function(){
  let orderEmail = $('#emailAddress').val()
  let coffeeTpye = $('#coffeeTpye').val()

  fetch(ORDER_LIST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ // converting object to string
      emailAddress: orderEmail,
      coffee: coffeeTpye,
    })
  })
})
