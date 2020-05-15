import React from 'react';
import NavBar from './NavBar';

const SearchZone = () => {
  return (
    <div style={{marginBottom: `30px`}}>
      <div style={{width: `800px`, height: `70px`, backgroundColor: `lavender`}}>
        <NavBar categories={[`Все`, `Что-то`, `Не то`]}/>
        <div>
          ПОИСКОВОЕ ПОЛЕ
        </div>
      </div>
    </div>
  )
};

export default SearchZone;
