import React from 'react';
import TopStaffList from './TopStaffList.jsx';
import TopStaffDetails from './TopStaffDetails.jsx';
import FocusedIdProvider from './FocusedIdProvider.jsx';

const App = () => {
  return (
    <div className="staff-page-wrapper">
      <FocusedIdProvider>
        <TopStaffList/>
        <TopStaffDetails/>
      </FocusedIdProvider>
    </div>
  )
};

export default App;