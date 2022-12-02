// const URL = "https://api.npoint.io/f39bd664969c4d3cf48c"
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

//               return (
//                 <div>
//                   <br/>
//                     <br/>
//                   <ul align='center'>
//                     <li className='hotel_info'>
//                     <ul class="list-group">
//                     <div class="d-flex justify-content-start">
//                     <div class="container">
//                       <div class="row">
//                         <div class="col">Name</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_name_value'>{todo.hotel_name}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Address</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_address_value'>{todo.hotel_address}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Map Coordination - Longtitude</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_map_coordination_longtitude_value'>{todo.hotel_map_coordination[0]}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Map Coordination - Latitude</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_map_coordination_latitude_value'>{todo.hotel_map_coordination[1]}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Owner</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_owner_value'>{todo.hotel_owner_name}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Email</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_owner_email_value'>{todo.hotel_owner_email}</li> 
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Phone Number</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_owner_phone_value'>{todo.hotel_owner_phone}</li> 
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Number of Rooms In This Hotel</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_number_of_rooms_value'>{todo.number_of_rooms}</li> 
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Room Type</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_room_name_value'>{todo.hotel_rooms.room_name}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Price to Pay for 1 Person For 1 Day</div>
//                         <div class="col-6">
//                         <li class="list-group-item"id='hotel_room_rate_value'>{todo.hotel_rooms.room_rate}$</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Bathroom</div>
//                         <div class="col-6">
//                         <li class="list-group-item"id='hotel_bathroom_value'>{todo.hotel_rooms.Bathroom}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Bedroom</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_bedroom_value'>{todo.hotel_rooms.Bedroom}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Kitchen</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_kitchen_value'>{todo.hotel_rooms.Kitchen}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">House Rule</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_house_rule_value'>{todo.house_rule}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Check In Time From: </div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_citf_value'>{todo.check_in_time.from}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Check In Time To: </div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_citt_value'>{todo.check_in_time.to}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Check Out Time From: </div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_cotf_value'>{todo.check_out_time.from}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Check Out Time To: </div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_cott_value'>{todo.check_out_time.to}</li>
//                         </div>
//                         <div class="w-100"></div>
//                         <div class="col">Utilities</div>
//                         <div class="col-6">
//                         <li class="list-group-item" id='hotel_utilities_value'>{todo.utilities}</li> 
//                         </div>
//                         <div class="w-100"></div>
//                       </div>
//                     </div>
//                     </div>
//                     <li class="list-group-item">{todo.photos.map(function(photo) {
//                       return (
//                         <div>
//                           <img src={photo.src} class="rounded float-start" alt="..."></img>
//                         </div>
//                       )
//                     })}</li>     
//                   </ul>
//                     </li>
//                     <li>
//                       <ul className='booking_order_ul'>
//                         {responseData.booking_order.map(function(todo) {
//                           return (
//                             <div className='checkbox' align='center'>
//                                 <Box key={todo.id}
//                                 sx={{
//                                     width: 500,
//                                     height: 300,
//                                     backgroundColor: 'primary.dark',
//                                   }}>
//                                     <div class="d-flex justify-content-start">...
//                                     <p className='button'>{todo.name}
//                                     <b-button-group>
//                                       <b-button><a href='/'>Edit   </a></b-button>
//                                       <b-button><a href='/'>   Delete</a></b-button>
//                                     </b-button-group>
//                                     </p>
//                                     </div>
//                                     <p className='text_color'>{todo.email} <br/>
//                                      {todo.phone_number}</p>
//                                     <p className='text_color'>Check In Time: {todo.check_in_time}, Check Out Time: {todo.check_out_time}</p>
//                                     <p className='text_color'>Number of days: {todo.number_of_days}, Number of people: {todo.number_of_people}, Price paid: {todo.pricePaid}</p>
//                                      </Box>
//                                      <br/>
//                             </div>
                            
//                         )
//                         })}
//                       </ul>
//                     </li>
//                   </ul>
//                   </div>
//               )
//           })
//           setShowPosts(displayData)
//       })
//       //return
//   }

//     useEffect(() => {
//         pullJson()
//     }, [])
