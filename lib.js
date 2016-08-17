'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {

      return carts.map((cart) => ({customer: cart.customer,total:
        [cart.items.reduce((total, item) => total +=
          listings.reduce((previous, listingName) => previous + listedPrice (listingName)(item),0),0)]}))
    }

// const cartNames =
// ['adam', 'david', 'michael', 'dillon']

// cartNames
//   .map(cartN =>
//     cartCheckers
//       .reduce()(cart, listing) => cart + listing(cartN), `${cartN}`)
//     )
//     .forEach(cart => console.log(msg))

//   const cartCheckers =
//    allCarts
//    .map(arr => isInCart(arr[0], arr[1]))
//
// const isInCart(){
//   if (cart.items === true) {
//   cart.items.reduce()(cart, items) => {
//
//     }, initial)
//   }
// }


module.exports = {
  listing,
  cart,
  calculateTotals
}
