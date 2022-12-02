import React, { useState, useEffect } from 'react';
import './Admin.css';
import { Card, Button, Modal } from 'react-bootstrap';

export default function Admin() {
    let data = JSON.parse(localStorage.getItem("hotel_information_edit"))
    const [booking_orders, setBookingOrders] = useState(JSON.parse(localStorage.getItem("booking_orders_edit")))
    const [showPosts, setShowPosts] = useState()
    const [hotel_name, setHotelName] = useState(data.hotel_name)
    const [hotel_address, setHotelAddress] = useState(data.hotel_address)
    const [hotel_map_coordination_longtitude, setHotelMapCoordinationLongtitude] = useState(data.hotel_map_coordination_longtitude)
    const [hotel_map_coordination_latitude, setHotelMapCoordinationLatitude] = useState(data.hotel_map_coordination_latitude)
    const [hotel_owner_name, setHotelOwnerName] = useState(data.hotel_owner_name)
    const [hotel_owner_email, setHotelOwnerEmail] = useState(data.hotel_owner_email)
    const [hotel_owner_phone, setHotelOwnerPhone] = useState(data.hotel_owner_phone)
    const [hotel_number_of_rooms, setHotelNumberOfRooms] = useState(data.hotel_number_of_rooms)
    const [hotel_room_rate, setHotelRoomRate] = useState(data.hotel_room_rate)
    const [hotel_room_name, setHotelRoomName] = useState(data.hotel_room_name)
    const [hotel_bathroom, setHotelBathroom] = useState(data.hotel_bathroom)
    const [hotel_bedroom, setHotelBedroom] = useState(data.hotel_bedroom)
    const [hotel_kitchen, setHotelKitchen] = useState(data.hotel_kitchen)
    const [house_rule, setHotelHouseRule] = useState(data.house_rule)
    const [citf, setHotelCheckInTimeFrom] = useState(data.citf)
    const [citt, setHotelCheckInTimeTo] = useState(data.citt)
    const [cotf, setHotelCheckOutTimeFrom] = useState(data.cotf)
    const [cott, setHotelCheckOutTimeTo] = useState(data.cott)
    const [utilities, setHotelUtilities] = useState(data.utilities)
    const [photos, setPhotos] = useState(data.photosCollect)
    const storeData = () => {
      let item = {hotel_name, hotel_address, hotel_map_coordination_longtitude, hotel_map_coordination_latitude, hotel_owner_name,
        hotel_owner_email, hotel_owner_phone, hotel_number_of_rooms, hotel_room_rate, hotel_room_name, hotel_bathroom, hotel_bedroom, hotel_kitchen, house_rule,
        citf, citt, cotf, cott, utilities, photos}
        let myObject = JSON.stringify(item)
        localStorage.setItem("hotel_information_edit", myObject)
    }

    const deleteBooking = (e) => {
      let items = JSON.parse(localStorage.getItem('booking_orders_edit'));
      let value = e.target.id
      value = Number(value)
      const newList = items.filter((l) => l.id !== value);
      localStorage.setItem('booking_orders_edit', JSON.stringify(newList))
      setBookingOrders(JSON.parse(localStorage.getItem("booking_orders_edit")))
    }


    const handleClick  = () => {
      let item = {hotel_name, hotel_address, hotel_map_coordination_longtitude, hotel_map_coordination_latitude, hotel_owner_name,
        hotel_owner_email, hotel_owner_phone, hotel_number_of_rooms, hotel_room_rate, hotel_room_name, hotel_bathroom, hotel_bedroom, hotel_kitchen, house_rule,
        citf, citt, cotf, cott, utilities, photos}
        let myObject = JSON.stringify(item)
        localStorage.setItem("hotel_information_edit", myObject)
        let data = JSON.parse(localStorage.getItem("hotel_information_edit"))
        document.getElementById('hotel_name_value').innerHTML = data.hotel_name
        document.getElementById('hotel_address_value').innerHTML = data.hotel_address
        document.getElementById('hotel_map_coordination_longtitude_value').innerHTML = data.hotel_map_coordination_longtitude
        document.getElementById('hotel_map_coordination_latitude_value').innerHTML = data.hotel_map_coordination_latitude
        document.getElementById('hotel_owner_value').innerHTML = data.hotel_owner_name
        document.getElementById('hotel_owner_email_value').innerHTML = data.hotel_owner_email
        document.getElementById('hotel_owner_phone_value').innerHTML = data.hotel_owner_phone
        document.getElementById('hotel_number_of_rooms_value').innerHTML = data.hotel_number_of_rooms
        document.getElementById('hotel_room_name_value').innerHTML = data.hotel_room_name
        document.getElementById('hotel_room_rate_value').innerHTML = data.hotel_room_rate
        document.getElementById('hotel_bathroom_value').innerHTML = data.hotel_bathroom
        document.getElementById('hotel_bedroom_value').innerHTML = data.hotel_bedroom
        document.getElementById('hotel_kitchen_value').innerHTML = data.hotel_kitchen
        document.getElementById('hotel_house_rule_value').innerHTML = data.house_rule
        document.getElementById('hotel_utilities_value').innerHTML = data.utilities
        document.getElementById('hotel_citf_value').innerHTML = data.citf
        document.getElementById('hotel_citt_value').innerHTML = data.citt
        document.getElementById('hotel_cotf_value').innerHTML = data.cotf
        document.getElementById('hotel_cott_value').innerHTML = data.cott

    }

    useEffect(() => {
    }, [])

  return (
    <div>
      <header>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary"><a href='/Admin' className='text-button'>Admin</a></button>
        <button type="button" class="btn btn-primary"><a href='/'  className='text-button'>Return to homescreen</a></button>
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
          Edit
        </button>
        </div>
        </header>
      <content>
<div>
<div>

                  <br/>
                    <br/>
                  <ul align='center'>
                    <li className='hotel_info'>
                    <ul class="list-group">
                    <div class="d-flex justify-content-start">
                    <div class="container">
                      <div class="row">
                        <div class="col">Name</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_name_value'>{data.hotel_name}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Address</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_address_value'>{data.hotel_address}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Map Coordination - Longtitude</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_map_coordination_longtitude_value'>{data.hotel_map_coordination_longtitude}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Map Coordination - Latitude</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_map_coordination_latitude_value'>{data.hotel_map_coordination_latitude}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Owner</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_owner_value'>{data.hotel_owner_name}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Email</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_owner_email_value'>{data.hotel_owner_email}</li> 
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Phone Number</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_owner_phone_value'>{data.hotel_owner_phone}</li> 
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Number of Rooms In This Hotel</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_number_of_rooms_value'>{data.hotel_number_of_rooms}</li> 
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Room Type</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_room_name_value'>{data.hotel_room_name}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Price to Pay for 1 Person For 1 Day</div>
                        <div class="col-6">
                        <li class="list-group-item"id='hotel_room_rate_value'>{data.hotel_room_rate}$</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Bathroom</div>
                        <div class="col-6">
                        <li class="list-group-item"id='hotel_bathroom_value'>{data.hotel_bathroom}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Bedroom</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_bedroom_value'>{data.hotel_bedroom}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Kitchen</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_kitchen_value'>{data.hotel_kitchen}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">House Rule</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_house_rule_value'>{data.house_rule}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Check In Time From: </div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_citf_value'>{data.citf}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Check In Time To: </div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_citt_value'>{data.citt}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Check Out Time From: </div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_cotf_value'>{data.cotf}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Check Out Time To: </div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_cott_value'>{data.cott}</li>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">Utilities</div>
                        <div class="col-6">
                        <li class="list-group-item" id='hotel_utilities_value'>{data.utilities}</li> 
                        </div>
                        <div class="w-100"></div>
                      </div>
                    </div>
                    </div>
                  
                  </ul>
                    </li>
                    <li>
                      
                      <ul className='booking_order_ul'>
                        {
                          booking_orders.map(function(todo) {
                            return (
                              

                              <Card style={{ width: '18rem' }} key={todo.id}>
                              <Card.Body>
                                <Card.Title>{todo.name}</Card.Title>
                                <Card.Text>
                                  Email: {todo.email} <br/>
                                  Phone number: {todo.phone_number} <br/>
                                  Check In: {todo.check_in_time}h00   -    Check Out: {todo.check_out_time}h00 <br></br>
                                  Total Days: {todo.number_of_days}  -  Total Persons: {todo.number_of_people} <br/>
                                  Price Paid: {todo.pricePaid}$

                                </Card.Text>
                                <Button variant="primary"onClick={(e) => {deleteBooking(e)}} id ={todo.id} >Delete</Button>
                              </Card.Body>
                            </Card>
                            )
                          })
                        }
                      </ul>
                    </li>
                  </ul>
                  </div>          

</div>



<div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm " role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Name: </label>
                  <input type="text" class="form-control" id="hotel_nameInput" onChange={(e) => {setHotelName(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Hotel's Name"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Address: </label>
                  <input type="text" class="form-control" id="hotel_addressInput" onChange={(e) => {setHotelAddress(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Hotel's Address"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Map Coordination</label>
                  <div class="d-flex flex-row">
                  <input type="text" class="form-control" id="hotel_map_coordinationInputLongtitude"  onChange={(e) => {setHotelMapCoordinationLongtitude(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Longtitude"/>
                  <input type="text" class="form-control" id="hotel_map_coordinationInputLatitude" onChange={(e) => {setHotelMapCoordinationLatitude(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter Latitude"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Owner</label>
                  <input type="text" class="form-control" id="hotel_ownerInput" onChange={(e) => {setHotelOwnerName(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter owner"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Email</label>
                  <input type="text" class="form-control" id="hotel_emailInput" onChange={(e) => {setHotelOwnerEmail(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Phone Number</label>
                  <input type="text" class="form-control" id="hotel_phonenumberInput" onChange={(e) => {setHotelOwnerPhone(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter phone number"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Number Of Rooms Available</label>
                  <input type="number" class="form-control" id="hotel_number_of_roomsInput" onChange={(e) => {setHotelNumberOfRooms(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter number of rooms"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Hotel's Room Type</label>
                  <input type="text" class="form-control" id="hotel_room_typeInput" onChange={(e) => {setHotelRoomName(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter room type"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Price To Day For 1 Day 1 Customer</label>
                  <input type="text" class="form-control" id="hotel_room_rateInput" onChange={(e) => {setHotelRoomRate(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter room rate"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Bathroom per Room</label>
                  <input type="number" class="form-control" id="hotel_bathroomInput" onChange={(e) => {setHotelBathroom(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter number of bathrooms"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Bedroom per Room</label>
                  <input type="number" class="form-control" id="hotel_bedroomInput" onChange={(e) => {setHotelBedroom(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter number of bedrooms"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1">Kitchen per Room</label>
                  <input type="number" class="form-control" id="hotel_kitchenInput" onChange={(e) => {setHotelKitchen(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter number of kitchens"/>
                </div>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">House Rule</label>
                  <input type="text" class="form-control" id="hotel_house_ruleInput" onChange={(e) => {setHotelHouseRule(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter house rule"/>
                </div>
                
                <div class="form-group">
                  <label for="exampleInputEmail1">Check In Time</label>
                  <div class="d-flex flex-row">
                  <input type="number" class="form-control" id="hotel_check_in_time_from" onChange={(e) => {setHotelCheckInTimeFrom(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter check in time from"/>
                  <input type="number" class="form-control" id="hotel_check_in_time_to" onChange={(e) => {setHotelCheckInTimeTo(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter check in time to"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Check Out Time</label>
                  <div class="d-flex flex-row">
                  <input type="number" class="form-control" id="hotel_check_out_time_from" onChange={(e) => {setHotelCheckOutTimeFrom(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter check out time from"/>
                  <input type="number" class="form-control" id="hotel_check_out_time_to" onChange={(e) => {setHotelCheckOutTimeTo(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter check out time to"/>
                  </div>

                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Utilities</label>
                  <input type="email" class="form-control" id="hotel_utilities" onChange={(e) => {setHotelUtilities(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter utilities"/>
                </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                <button type="button" class="btn btn-primary" onClick={handleClick}>Save</button>
              </div>
            </div>
          </div>
        </div>
        
        
        <script>
          const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
        
        </script>
      </content>
    </div>
  )
}
