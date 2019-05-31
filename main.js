'use strict';

function createCalendar(id, year, month) {
    const elem = document.querySelector(`#${id}`);
    const monthFromZero = month - 1;     
    const date = new Date(year, monthFromZero);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    
    for (let i = 0; i < getDay(date); i++) {
      table += '<td></td>';
    }
   
    while (date.getMonth() == monthFromZero) {
      table += `<td> ${date.getDate()} </td>`;
      
      if (getDay(date) % 7 == 6) { 
        table += '</tr><tr>';
      }
      date.setDate(date.getDate() + 1);
    }
    
    if (getDay(date) !== 0) {
      for (let i = getDay(date); i < 7; i++) {
        table += '<td></td>';
      }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
  }
  
  function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  
  createCalendar("calendar", 2019, 5)
