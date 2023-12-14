import React, { useState ,useEffect} from 'react';
import  'boxicons'; // Replace with the actual import statement for your box icon library
 // Import your CSS file for styling
import "./Home.css"
const Home= (props) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [standardSeats, setStandardSeats] = useState( []);
  const [premiumSeats, setPremiumSeats] = useState([]);
  const [seatbooked,setbooked]= useState(false)
  const [maxSeats, setMaxSeats] = useState(1);

  useEffect(()=>{
    setStandardSeats(props.standardSeats)
    setPremiumSeats(props.premiumSeats)
  },[props.standardSeats,props.premiumSeats,standardSeats,premiumSeats])
  
   console.log("premium seats==>",premiumSeats)
  const handleSeatTypeChange = (type) => {
    setSelectedType(type);
    setSelectedSeats([]);
  };

  const handleSeatSelection = (seat) => {
    const seatIndex = standardSeats.findIndex(s => s.id === seat.id);
    const updatedSeats = [...standardSeats];
  
    const seatIsSelected = selectedSeats.some(selectedSeat => selectedSeat.id === seat.id);
  
    if (seatIsSelected) {
      // Deselect the seat
      const updatedSelectedSeats = selectedSeats.filter(selectedSeat => selectedSeat.id !== seat.id);
      updatedSeats[seatIndex].booked = false;
      setSelectedSeats(updatedSelectedSeats);
    } else if (selectedSeats.length < maxSeats && updatedSeats[seatIndex].type === selectedType && !updatedSeats[seatIndex].booked) {
      // Select the seat
      updatedSeats[seatIndex].booked = true;
      setSelectedSeats([...selectedSeats, seat]);
    }
  
    setStandardSeats([...updatedSeats]); // Update state with the new array
  };
  
  
//   const handleProceed = () => {
//     // Mark selected seats as Unavailable
//     const updatedSeats = standardSeats.map(seat => ({
//       ...seat,
//       booked: selectedSeats.includes(seat) ? true : seat.booked,
//     }));

//     setStandardSeats(updatedSeats);
//     setSelectedSeats([]);
//     setSelectedType('');
//     //alert("seats are booked")
//   };

//  Function to generate seats data
// const handleProceed = () => {
//     // Mark selected seats as Booked
//     const updatedSeats = standardSeats.map(seat => ({
//       ...seat,
//       booked: selectedSeats.includes(seat) ? true : seat.booked,
//     }));

//     setStandardSeats(updatedSeats);
//     setSelectedSeats([]);
//     setSelectedType('');
//     // Additional logic for handling the booking (e.g., API call, displaying confirmation message, etc.)
//     alert("Seats are booked!");
//   };

  const renderDropdownOptions = () => {
    const options = [1, 2, 3, 4, 5, 6];
    return options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  // setStandardSeats(updatedSeats);

  const handleDropdownChange = (value) => {
    setMaxSeats(parseInt(value, 10));
    setSelectedSeats([]);
  };
  
  return (
    <div>
      <h2>BOOK MY SEAT</h2>
      <div>
        <label>Select Seat Type: </label>
        <select onChange={(e) => handleSeatTypeChange(e.target.value)}>
          <option value="">Select Type</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <label>Select Number of Seats: </label>
        <select onChange={(e) => handleDropdownChange(e.target.value)}>
          {renderDropdownOptions()}
        </select>
      <div className="Main-Container">
        <div className="container">
            <div className="row">
        
            {standardSeats.slice(0,7).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
           onClick={() => handleSeatSelection(seat)}
          >
          {seat.booked ? (
                  <box-icon
                    name="square"
                    type="solid"
                    color="#a15151"
                  ></box-icon>
                ) : (
                    <box-icon name='square' color='#a15151' ></box-icon>
                )}
          </div>
        ))}
            </div>
            
           
            <div className="row">
            {standardSeats.slice(8,15).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>

                        
            <div className="row">
            {standardSeats.slice(16,23).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
           onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>
            </div>


            <div className="container">
            <div className="row">
            {standardSeats.slice(24,30).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>
            
           
            <div className="row">
            {standardSeats.slice(31,39).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>

                        
            <div className="row">
            {standardSeats.slice(40,47).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>
            </div>


            <div className="container">
            <div className="row">
            {standardSeats.slice(48,56).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>
            
           
            <div className="row">
            {standardSeats.slice(56,64).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>

                        
            <div className="row">
            {standardSeats.slice(65,73).map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>
          
            </div>           
        
      </div>

      <div className="premium_row">
            {premiumSeats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.type} ${seat.booked ? 'booked' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            <box-icon name='square' type={seat.booked ? 'solid' : undefined} color={seat.booked ? '#9f8888' : '#a15151'}></box-icon>
          </div>
        ))}
            </div>

        {/* <button onClick={handleProceed} disabled={selectedSeats.length === 0}>
        Proceed
      </button>    */}
    </div>
  );
};

export default Home;
