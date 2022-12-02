import React, { Component } from 'react'
import hotel_Infor from '../Home';

class hotel_info {
  constructor(data) {
    this.hotel_name = data.hotel_name;
    this.hotel_address = data.hotel_address;
    this.hotel_map_coordination = data.hotel_map_coordination;
    this.hotel_owner_name = data.hotel_owner_name;
    this.hotel_owner_email = data.hotel_owner_email;
    this.hotel_owner_phone = data.hotel_owner_phone;
    this.hotel_rooms_name = data.hotel_rooms.room_name;
    this.hotel_bathroom = data.hotel_rooms.Bathroom;
    this.hotel_bedroom = data.hotel_rooms.Bedroom;
    this.hotel_kitchen = data.hotel_rooms.Kitchen;
    this.hotel_room_rate = data.hotel_rooms.room_rate;
    this.hotel_number_of_person = data.hotel_rooms.number_of_person;
    this.hotel_number_of_days = data.hotel_rooms.number_of_days;

  
  }
}

class booking_information {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.pricePaid = data.pricePaid;
    this.phone_number = data.phone_number;
    this.check_in_time = data.check_in_time;
    this.check_out_time = data.check_out_time;
    this.number_of_days = data.number_of_days;
    this.number_of_people = data.number_of_people;

  }
}
export default class HotelInfo extends Component {
  render() {
    return (
      <div><h1></h1></div>
    )
  }
}
