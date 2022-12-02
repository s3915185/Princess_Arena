import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import React, {useState, useEffect} from 'react';

const buttonStyle = {
    border: "2px solid orange",
    color: 'orange'
}

export default function Home() {
    
//     let data = JSON.parse(localStorage.getItem("hotel_information"))
//     const [booking_orders, setBookingOrders] = useState(JSON.parse(localStorage.getItem("booking_orders")))
//     const [showPosts, setShowPosts] = useState()
//     const [hotel_name, setHotelName] = useState(data.hotel_name)
//     const [hotel_address, setHotelAddress] = useState(data.hotel_address)
//     const [hotel_map_coordination_longtitude, setHotelMapCoordinationLongtitude] = useState(data.hotel_map_coordination_longtitude)
//     const [hotel_map_coordination_latitude, setHotelMapCoordinationLatitude] = useState(data.hotel_map_coordination_latitude)
//     const [hotel_owner_name, setHotelOwnerName] = useState(data.hotel_owner_name)
//     const [hotel_owner_email, setHotelOwnerEmail] = useState(data.hotel_owner_email)
//     const [hotel_owner_phone, setHotelOwnerPhone] = useState(data.hotel_owner_phone)
//     const [hotel_number_of_rooms, setHotelNumberOfRooms] = useState(data.hotel_number_of_rooms)
//     const [hotel_room_rate, setHotelRoomRate] = useState(data.hotel_room_rate)
//     const [hotel_room_name, setHotelRoomName] = useState(data.hotel_room_name)
//     const [hotel_bathroom, setHotelBathroom] = useState(data.hotel_bathroom)
//     const [hotel_bedroom, setHotelBedroom] = useState(data.hotel_bedroom)
//     const [hotel_kitchen, setHotelKitchen] = useState(data.hotel_kitchen)
//     const [hotel_number_of_person, setHotelNumberOfPersonPerRate] = useState("")
//     const [hotel_number_of_days, setHotelNumberOfDayPerRate] = useState("")
//     const [hotel_house_rule, setHotelHouseRule] = useState(data.hotel_house_rule)
//     const [hotel_check_in_time_from, setHotelCheckInTimeFrom] = useState(data.hotel_check_in_time_from)
//     const [hotel_check_in_time_to, setHotelCheckInTimeTo] = useState(data.hotel_check_in_time_to)
//     const [hotel_check_out_time_from, setHotelCheckOutTimeFrom] = useState(data.hotel_check_out_time_from)
//     const [hotel_check_out_time_to, setHotelCheckOutTimeTo] = useState(data.hotel_check_out_time_to)
//     const [hotel_utilities, setHotelUtilities] = useState(data.hotel_utilities)
//     const [photosCollect, setPhotos] = useState("")

    
//     const storeData = () => {
//       let item = {hotel_name, hotel_address, hotel_map_coordination_longtitude, hotel_map_coordination_latitude, hotel_owner_name,
//         hotel_owner_email, hotel_owner_phone, hotel_number_of_rooms, hotel_room_rate, hotel_room_name, hotel_bathroom, hotel_bedroom, hotel_kitchen, hotel_house_rule,
//         hotel_check_in_time_from, hotel_check_in_time_to, hotel_check_out_time_from, hotel_check_out_time_to, hotel_utilities, photosCollect}
//         let myObject = JSON.stringify(item)
//         localStorage.setItem("hotel_information", myObject)
//     }
//     storeData()

//     let displayData
//     const URL = "https://api.npoint.io/f39bd664969c4d3cf48c"
//     function pullJson() {
//       fetch(URL)
//       .then(response => response.json())
//       .then(responseData => {
//           displayData = responseData.hotel_information.map(function(todo) {
//             setHotelName(todo.hotel_name)
//             setHotelAddress(todo.hotel_address)
//             setHotelMapCoordinationLongtitude(todo.hotel_map_coordination[0])
//             setHotelMapCoordinationLatitude(todo.hotel_map_coordination[1])
//             setHotelOwnerName(todo.hotel_owner_name)
//             setHotelOwnerEmail(todo.hotel_owner_email)
//             setHotelOwnerPhone(todo.hotel_owner_phone)
//             setHotelNumberOfRooms(todo.number_of_rooms)
//             setHotelRoomName(todo.hotel_rooms.room_name)
//             setHotelRoomRate(todo.hotel_rooms.room_rate)
//             setHotelBathroom(todo.hotel_rooms.Bathroom)
//             setHotelBedroom(todo.hotel_rooms.Bedroom)
//             setHotelKitchen(todo.hotel_rooms.Kitchen)
//             setHotelHouseRule(todo.house_rule)
//             setHotelNumberOfPersonPerRate(todo.hotel_rooms.number_of_person)
//             setHotelNumberOfDayPerRate(todo.hotel_rooms.number_of_days)
//             setHotelCheckInTimeFrom(todo.check_in_time.from)
//             setHotelCheckInTimeTo(todo.check_in_time.to)
//             setHotelCheckOutTimeFrom(todo.check_out_time.from)
//             setHotelCheckOutTimeTo(todo.check_out_time.to)
//             setPhotos(todo.photos)
//             setHotelUtilities(todo.utilities)
//           })
          
//           displayData = responseData.booking_order;
//           localStorage.setItem('booking_orders', JSON.stringify(displayData))
//           setShowPosts(displayData)
//       })
//   }
//   useEffect(() => {

//     // pullJson()
// }, [])

let displayData
const URL = "https://api.npoint.io/f39bd664969c4d3cf48c"
function pullJson() {
  fetch(URL)
  .then(response => response.json())
  .then(responseData => {
      displayData = responseData.hotel_information.map(function(todo) {
        localStorage.setItem('hotel_information', JSON.stringify(todo))
      })
      displayData = responseData.booking_order;
      localStorage.setItem('booking_orders', JSON.stringify(displayData))
  })
}

    const startReFetch = () => {
        pullJson()
        console.log("Went through this")
        localStorage.setItem('hotel_information_edit', JSON.stringify(JSON.parse(localStorage.getItem('hotel_information'))))
        localStorage.setItem('booking_orders_edit', JSON.stringify(JSON.parse(localStorage.getItem('booking_orders'))))
    }

  return (
    <body>
        
        <header>
        <div class="btn-group d-flex justify-content-between" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary"><a href='/Admin' className='text-button'>Admin</a></button>
        <button type="button" class="btn btn-primary"><a href='/Visitor' className='text-button'>Visitor</a></button>
        </div>
            </header>
        <main>
        <br/>
        

            <div class="container px-4">
            <div class="col gx-5">
                <div class="col">
                <div class="p-3 border">
                <h1 className='text_color'>Welcome to My Hotel Management App</h1> <br/>
                <h2 className='text_color'>Remaking website for The Princess of Arena Cam Ranh</h2>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border">
                <h1>
                <button type="button" onClick={startReFetch} class="btn btn-primary btn-lg btn-block">Fetch to Reset Data</button>
                </h1>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border"><h2 className='text_color'>Make sure you fetch before entering website</h2></div>
                </div>
            </div>
            </div>

        </main>
        <content>
            <div>
                
            </div>
        </content>
        <footer>
        
        </footer>
    </body>
  )
}
