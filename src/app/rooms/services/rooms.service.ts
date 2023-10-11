import { Injectable } from '@angular/core';
import { roomList,photos } from '../rooms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  photo: photos[] = [];
  // roomList:roomList[] = [{
  //   roomNumber: 1,
  //   roomType: "Deluxe",
  //   price: 1000,
  //   checkInTime: new Date('2023-09-13'),
  // },
  // {
  //   roomNumber: 2,
  //   roomType: "suite",
  //   price: 1500,
  //   checkInTime: new Date('2023-09-13'),
  // },
  // {
  //   roomNumber: 3,
  //   roomType: "Luxury",
  //   price: 2000,
  //   checkInTime: new Date('2023-09-13'),
  // }
  // ]
  roomList:roomList[] = [];
   //header=new HttpHeaders({'token':'qwerty123456'})
  getRooms$=this.httpClient.get<roomList[]>('/api/rooms').pipe(shareReplay(1))


  constructor(private httpClient:HttpClient) { }

  getRooms(){
    return this.httpClient.get<roomList[]>('/api/rooms');
  }

  addRooms(room:roomList){
    return this.httpClient.post<roomList[]>('/api/rooms',room)
  }

  editRoom(room:roomList){
    return this.httpClient.put<roomList[]>(`/api/rooms/${room.roomNumber}`,room)
  }

  getPhotos(){
    const requests=new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',
    {
      reportProgress:true,
     
    }
    )
   return this.httpClient.request<photos[]>(requests);
  }
}
