import Information, {Profile} from "./components/information";
// import { Profile } from "./components/information";
import Counter from "./app/counter";
import Trafficlight from "./app/trafficlight";
import Search from "./app/search";

function App() {
  const person = {
    name: 'Priyanka Sinha',
    email: 'sngpriyanka445@gmail.com',

    address: {
      city: 'Kathmandu',
      country: 'Nepal',
      zip: 44600
    }
  };

  // function handleClick(){
  //   alert('hello World');
  // };

  //arrow function
  const handleClick = () => {
    alert('hello shriya');
  };

  const creatClick = () => {
    alert('hello ichhita');
  };


  return(
    <div>
      <h1>Personal Information</h1>
      
      <Search/>
      
          <h5>{person.name} {person.email}</h5>
          <p>{person.email}</p>
          <p>{person.address.city}</p>
          <p>{person.address.country}</p>
          <p>{person.address.zip}</p>
          
          <Profile/>
          <Information/>
          <Counter/>
          <Trafficlight/>

          <button onClick={handleClick}>Click</button>
          <button onClick={creatClick}>Click Me</button>
    </div>
  );
}

// const App = () => {
//   const car = {
//     model: 'ev',
//     make: '2018',
//     company: 'tata'
//   };

//   car.model = 'engine';

//   const person = {
//     Name: 'Priyanka Sinha',
//     Age: 22,
//     Height: 5,
//     phoneNumber: 9807797080,
//     Email: 'sngpriyanka@gmail.com',

//     Address: {
//       City: 'NayaThimi',
//       District: 'Bhaktapur',
//       Country: 'Nepal',
//       Zip: 44600
//     },

//     Education: {
//       Degree: 'Masters',
//       Level: '1',
//       schoolName: 'NCIT'
//     },

//     hasCitizenShip: false,
//     interest: ['football', 'food']
//   };


//   const apple= {
//     Type: 'Fruit',
//     Color: 'Red',
//     Taste: 'Sweet',
//     price: 300
//   };

//   const carPerson = {...car, ...person, name: 'Rupa'};
//   console.log(carPerson);

//   console.log(apple.Color);
//   console.log(person.Education.Degree);
//   console.log(person.Education.schoolName);


//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       {/* <User /> */}
//     </div>
//   );
// };

export default App;
