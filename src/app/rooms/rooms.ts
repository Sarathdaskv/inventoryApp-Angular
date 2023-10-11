export interface Rooms{
    totalRooms:number,
    booked:number,
    availableRooms:number,
    
}
export interface roomList{
    roomNumber:string,
    roomType:string,
    amenities:string,
    photos:string,
    price:number,
    checkInTime:Date,
    checkoutTime:Date,
    rating:number
}
export interface photos{
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string
}