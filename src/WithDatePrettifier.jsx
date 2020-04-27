import React from 'react';

function WithDatePrettifier({children}) {

    function prettifyDate(date) {
      let dateObj = new Date(date);
      let newDateString = ``;

      console.log(dateObj.getTime())

      if(dateObj.getTime() > 86400*1000) {
        let fullValue = dateObj.getTime() / 86400*1000
        console.log(fullValue)
        newDateString = `${Math.trunc(fullValue)} дн. назад`
      } else if (dateObj.getTime() > 3600*1000) {
        let fullValue = dateObj.getTime() / 3600*1000
        console.log(fullValue)
        newDateString = `${Math.trunc(fullValue)} ч. назад`
      } else if (dateObj.getTime() > 60*1000) { 
        let fullValue = dateObj.getTime() / 60*1000
        console.log(fullValue)
        newDateString = `${Math.trunc(fullValue)} мин. назад`
      } else {
        newDateString = `меньше минуты назад`
      }

      console.log (newDateString);
    };

    prettifyDate(children.props.date);

    const newChildren = { 
      ...children, props: {
        ...children.props, date: `Yo!`
      }
    };
  
    return (
      <>
      {newChildren}
      </>
    )
}


export default WithDatePrettifier;