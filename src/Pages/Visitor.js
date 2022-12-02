import React, {useState, useEffect} from 'react';
import './Visitor.css';


export default function Visitor() {

const [showPosts, setShowPosts] = useState()
const [number_of_days, setNumberOfDays] = useState()
const [number_of_people, setNumberOfPeople] = useState()

let data = JSON.parse(localStorage.getItem("hotel_information_edit"))
let room_rate_value = Number(data.hotel_room_rate)
let old_booking_order = JSON.parse(localStorage.getItem("booking_orders_edit"))
const addBooking = () => {
  let id = Number(document.getElementById('booking_id').value)
  let name = document.getElementById('booking_name').value
  let email = document.getElementById('booking_email').value
  let phone_number = document.getElementById('booking_phonenumber').value
  let check_in_time = Number(document.getElementById('booking_check_in_time').value)
  let check_out_time = Number(document.getElementById('booking_check_out_time').value)
  let pricePaid = room_rate_value * Number(number_of_days) * Number(number_of_people)
  let book = {id, name, number_of_people, email, phone_number, check_in_time, check_out_time,number_of_days, pricePaid}
  old_booking_order.push(book)
  localStorage.setItem('booking_orders_edit', JSON.stringify(old_booking_order))
}
const modifyPrice = () => {
  let price = room_rate_value * Number(number_of_days) * Number(number_of_people)
  document.getElementById('priceUpdate').innerHTML = price + "$"
}
  return (
    <div>
        <header>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary"><a href='/Visitor' className='text-button'>Visitor</a></button>
        <button type="button" class="btn btn-primary"><a href='/'  className='text-button'>Return to homescreen</a></button>
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
                    <div class="card">
  <div class="card-body">
  <button onClick={modifyPrice} class="btn btn-primary" >View Price</button>
  <form>
  <div class="form-group">

    <label for="exampleInputEmail1">Enter your id: </label>
    <input type="number" class="form-control" id="booking_id" aria-describedby="emailHelp" placeholder="Enter id"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter your name: </label>
    <input type="text" class="form-control" id="booking_name" aria-describedby="emailHelp" placeholder="Enter name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email: </label>
    <input type="email" class="form-control" id="booking_email" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Phone number: </label>
    <input type="text" class="form-control" id="booking_phonenumber" aria-describedby="emailHelp" placeholder="Enter phone number"/>
  </div>
  <div class="w-100"></div>
  <br/>

  <div class="d-flex flex-row">
  <div class="form-group">
    <label for="exampleInputPassword1">Guest:</label>
    <input type="number" class="form-control" id="booking_people" onChange={(e) => {setNumberOfPeople(e.target.value)}} placeholder="Enter your guest"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Check In: </label>
    <input type="number" class="form-control" id="booking_check_in_time" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Check Out: </label>
    <input type="number" class="form-control" id="booking_check_out_time" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Number of Days:</label>
    <input type="number" class="form-control" id="booking_days" onChange={(e) => {setNumberOfDays(e.target.value)}} placeholder="Enter days"/>
  </div>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">The amount you have to pay is: <p id='priceUpdate'>$</p></label>
  </div>
</form>
<button onClick={addBooking} class="btn btn-primary">Submit</button>
  </div>
</div>
                    </li>
                  </ul>
                  </div>          

</div>
        </content>
    </div>
  )
}
