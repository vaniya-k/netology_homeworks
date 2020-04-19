import React from 'react';

const FilterItem = ({filterName, isActive, onFilterButtonClick}) => {
  return (
  <div className={`filter-item ${(isActive === true ? `filter-item__active` : null)}`} onClick={onFilterButtonClick}>{filterName}</div>
  )
}

const Filter = ({filters, activeFilter, onFilterButtonClick}) => {
  return(
    <div className="filter-container">
      {filters.map((filter, i) => 
        <FilterItem
          key={`key${i}`}
          filterName={filter}
          isActive={(filters.indexOf(filter) === activeFilter) ? true : false}
          onFilterButtonClick={() => onFilterButtonClick(i)}
        />
      )}
    </div>
  )
};

export default Filter;