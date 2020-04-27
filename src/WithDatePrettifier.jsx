import React from 'react';

function prettifyDate(date) {
  let dateObj = new Date(date);
  let newDateString = ``;

  function calcMilisecsDiff(dateObj) {
    return Date.now() - dateObj.getTime()
  }

  if(calcMilisecsDiff(dateObj) > 86400*1000) {
    newDateString = `${Math.trunc(calcMilisecsDiff(dateObj) / (86400*1000))} дн. назад`
  } else if (calcMilisecsDiff(dateObj) > 3600*1000) {
    newDateString = `${Math.trunc(calcMilisecsDiff(dateObj) / (3600*1000))} ч. назад`
  } else if (calcMilisecsDiff(dateObj) > 60*1000) { 
    newDateString = `${Math.trunc(calcMilisecsDiff(dateObj) / (60*1000))} мин. назад`
  } else {
    newDateString = `менее минуты назад`
  }

  return newDateString;
};

function WithDatePrettifier({children}) {
    const newChildren = { 
      ...children, props: {
        ...children.props, date: prettifyDate(children.props.date)
      }
    };
  
    return (
      <>
      {newChildren}
      </>
    )
}

export default WithDatePrettifier;