import React from 'react'
import SeatComponent from '../Home/Home';
import { useState,useEffect,useRef } from 'react';
import Home from '../Home/Home';
const Seatdata = () => {
    
    const [standardSeats, setStandardSeats] = useState([]);
    const [premiumSeats, setPremiumSeats] = useState([]);
    const isMounted = useRef(true);

        // Generate 48 standard seats
       useEffect(()=>{

     
            const generateSeatsData = () => {
              // Generate 144 standard seats
              const newStandardSeats = [];
              for (let seatNumber = 1; seatNumber <= 144; seatNumber++) {
                const seatId = `A${seatNumber}`;
                newStandardSeats.push({ id: seatId, type: 'standard', booked: false });
              }
              setStandardSeats((prevStandardseats)=>{
              return  [prevStandardseats,...newStandardSeats]
              })
       
              // Generate 25 premium seats
              const newPremiumSeats = [];
              for (let seatNumber = 1; seatNumber <= 25; seatNumber++) {
                const seatId = `B${seatNumber}`;
                newPremiumSeats.push({ id: seatId, type: 'premium', booked: false });
              }
             setPremiumSeats((prevPremiumSeats)=>{
           return [prevPremiumSeats,...newPremiumSeats]

             });

             
            };
        
            generateSeatsData();

          
        },[]) 
         
            
     //console.log("standardseats==>",standardSeats);
     
      
      // You can use the seatsData array in your component state or API responses.
     
  return (
    <div>
     
      <Home
      standardSeats={standardSeats}
      premiumSeats={premiumSeats}/>
    </div>
  )
}

export default Seatdata
