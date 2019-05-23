'use strict';

function createCalendar(id, year, month) {
    let elem = document.getElementById(id);
    const monthFromZero = month - 1;     
    let dateForTable = new Date(year, monthFromZero);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    
    for (let i = 0; i < getDay(dateForTable); i++) {
      table += '<td></td>';
    }
   
    while (dateForTable.getMonth() == monthFromZero) {
      table += `<td> ${dateForTable.getDate()} </td>`;
      
      if (getDay(dateForTable) % 7 == 6) { 
        table += '</tr><tr>';
      }
      dateForTable.setDate(dateForTable.getDate() + 1);
    }
    
    if (getDay(dateForTable) !== 0) {
      for (let i = getDay(dateForTable); i < 7; i++) {
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
