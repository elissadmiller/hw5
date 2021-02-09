function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE
 
  
//   (1 point) Add an event listener to the "All Rides" button, so that when it is clicked, there is some output in the console to indicate which button was clicked.
let allRides = document.querySelector('#all-filter')
allRides.addEventListener('click', async function(event) {
  console.log(event.target.innerHTML)

// (1 point) When the event occurs:
// request the ride data from our "API"
event.preventDefault()
document.querySelector('.rides').innerHTML = ''

  let response = await fetch('https://kiei451.com/api/rides.json')

  let json = await response.json()
  console.log(json)
// !!pass the array of rides to the provided renderRides() function to display all the rides (same as they appeared at the end of last week's assignment)
//renderRides(allRides)
renderRides(json)
    
//let arrayOfRides = document.querySelector('.rides')
//let html = renderRides(ride)
//arrayOfRides.insertAdjacentHTML('beforeend', `${html}`)
//allRides.insertAdjacentHTML('beforeend', renderRides(ride))

 
})
console.log(allRides)
// (2 points) Add an event listener to the "Noober Purple" button, so that when it is clicked, there is some output in the console to indicate which button was clicked.
let nooberPurple = document.querySelector('#noober-purple-filter')
nooberPurple.addEventListener('click', async function(event) {
  console.log(event.target.innerHTML)

// (4 points) When the event occurs:
// request the ride data from our "API"
event.preventDefault()

  let response = await fetch('https://kiei451.com/api/rides.json')

  let json = await response.json()
// create a new empty array
document.querySelector('.rides').innerHTML = ''
let purpleArray = []
// loop through the rides and for each ride, use the provided levelOfService() function to determine the service level, and use newArray.push(ride) to add "Noober Purple" rides into the new array

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(ride)

    levelOfService(ride)
    console.log(levelOfService(ride))

    
if (levelOfService(ride) == 'Noober Purple') {
  purpleArray.push(ride) 
} 
  }
  renderRides(purpleArray)
})
  
// lastly, pass the new array of filtered rides to the renderRides() function
// (2 points) Repeat steps 3 & 4 for the other 3 level of service button filters

let nooberPool = document.querySelector('#noober-pool-filter')
nooberPool.addEventListener('click', async function(event) {
  console.log(event.target.innerHTML)

// (4 points) When the event occurs:
// request the ride data from our "API"
event.preventDefault()

  let response = await fetch('https://kiei451.com/api/rides.json')

  let json = await response.json()
// create a new empty array
document.querySelector('.rides').innerHTML = ''
let poolArray = []
// loop through the rides and for each ride, use the provided levelOfService() function to determine the service level, and use newArray.push(ride) to add "Noober Purple" rides into the new array

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(ride)

    levelOfService(ride)
    console.log(levelOfService(ride))

    
if (levelOfService(ride) == 'Noober Pool') {
  poolArray.push(ride) 
} 
  }
  renderRides(poolArray)

//
}) 
let nooberXL = document.querySelector('#noober-xl-filter')
nooberXL.addEventListener('click', async function(event) {
  console.log(event.target.innerHTML)

// (4 points) When the event occurs:
// request the ride data from our "API"
event.preventDefault()

  let response = await fetch('https://kiei451.com/api/rides.json')

  let json = await response.json()
// create a new empty array
document.querySelector('.rides').innerHTML = ''
let XLArray = []
// loop through the rides and for each ride, use the provided levelOfService() function to determine the service level, and use newArray.push(ride) to add "Noober Purple" rides into the new array

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(ride)

    levelOfService(ride)
    console.log(levelOfService(ride))

    
if (levelOfService(ride) == 'Noober XL') {
  XLArray.push(ride) 
} 
  }
  renderRides(XLArray)
})
  

let nooberX = document.querySelector('#noober-x-filter')
nooberX.addEventListener('click', async function(event) {
  console.log(event.target.innerHTML)

// (4 points) When the event occurs:
// request the ride data from our "API"
event.preventDefault()

  let response = await fetch('https://kiei451.com/api/rides.json')

  let json = await response.json()
// create a new empty array
document.querySelector('.rides').innerHTML = ''
let xArray = []
// loop through the rides and for each ride, use the provided levelOfService() function to determine the service level, and use newArray.push(ride) to add "Noober Purple" rides into the new array

  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(ride)

    levelOfService(ride)
    console.log(levelOfService(ride))

    
if (levelOfService(ride) == 'Noober X') {
  xArray.push(ride) 
} 
  }
  renderRides(xArray)
})
  
})
