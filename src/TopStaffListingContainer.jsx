import React, {useState} from 'react';
import TopStaffListing from './TopStaffListing';
import TopStaffListingHighlight from './TopStaffListingHighlight';

const TopStaffListingContainer = () => {
  const [focusedId, setFocusedId] = useState(null);

  return (
    <>
      <TopStaffListing focusedId={focusedId} setFocusedId={setFocusedId}/>
      <TopStaffListingHighlight focusedId={focusedId}/>
    </>
  )
};

export default TopStaffListingContainer;
