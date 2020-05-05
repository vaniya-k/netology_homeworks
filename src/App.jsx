import React from 'react';
import StaffList from './StaffList.jsx';
import Details from './Details.jsx';
import FocusedIdProvider from './FocusedIdProvider.jsx';

const namesList = [
  {
      "id": 1,
      "name": "Dorthy McClure Sr."
  },
  {
      "id": 2,
      "name": "Kyleigh Ortiz"
  },
  {
      "id": 3,
      "name": "Delia Halvorson"
  },
  {
      "id": 4,
      "name": "Kelvin Harvey"
  },
  {
      "id": 5,
      "name": "Mohamed Kertzmann"
  },
  {
      "id": 6,
      "name": "Vladimir Tromp"
  },
  {
      "id": 7,
      "name": "Laron Trantow"
  },
  {
      "id": 8,
      "name": "Adolph Rohan"
  },
  {
      "id": 9,
      "name": "Dr. Grady Abernathy"
  },
  {
      "id": 10,
      "name": "Robbie Mayer"
  }
];

const App = () => {
  return (
    <div class="staff-page-wrapper">
      <FocusedIdProvider>
        <StaffList namesList={namesList}/>
        <Details/>
      </FocusedIdProvider>
    </div>
  )
};

export default App;