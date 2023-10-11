import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, roomList } from './rooms';
import { JsonPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.headerComponent.header_title = "Rooms Views";
    console.log(this.headerComponent);

  }
  constructor(private roomService: RoomsService) {
    roomService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    });
  

  }

  hotelName: string = "Novotel"
  available = true
  roomTitle = 'Room List'
  room: Rooms = {
    totalRooms: 10,
    booked: 5,
    availableRooms: 10,

  }
  roomList: roomList[] = []

  selectedroom!: roomList
  rooms$=this.roomService.getRooms$.pipe(
    map((room)=>{
      return room.length;
    })
  )



  addRoom() {
    const room: roomList = {
      roomNumber: '4',
      roomType: "random",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      checkoutTime: new Date('2023-09-15'),
      price: 1500,
      checkInTime: new Date('2023-09-14'),
      rating: 4.4
    }
    //this.roomList = [...this.roomList, room]
    this.roomService.addRooms(room).subscribe((data) => {
      this.roomList=data;
    })
    
  }

  ngOnInit(): void {
   
    this.roomService.getPhotos().subscribe((data)=>{
      console.log(data);
      
    })

  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; 




  roomSelected(room: roomList) {
    this.selectedroom = room;
  }
  toggle() {
    this.available = !this.available
  }
  editRooms(){
    const room: roomList = {
      roomNumber: '3',
      roomType: "random",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      photos: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      checkoutTime: new Date('2023-09-15'),
      price: 10000,
      checkInTime: new Date('2023-09-14'),
      rating: 4.4
    }
    this.roomService.editRoom(room).subscribe((data)=>{
      this.roomList=data;
    })
  }
  getPhotos(){
   
  }
}




