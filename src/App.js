import React, { useState }  from 'react';
import './App.css';
import '@material-ui/styles';
//import {DatePicker} from '@material-ui/pickers/DatePicker';

//import 'date-fns';
import {format} from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';


export default function App() {
  const [todo, setTodo] = useState({desc: '', dateString:''});
  const [todos, setTodos] = useState([]);

  
  //const [currentDate2, setCurrentDate2]= useState({})
  //const [dateString, setDateString] = useState('');
  

 //const [date, setDate]= useState();
  //setDate(new Date());

  const addTodo= (event) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
   
 const [selectedDate, setSelectedDate] = useState('');
 
  const handleDateChange = (selectedDate,date) => {   
    setSelectedDate(date);
    const currentDate = selectedDate;
    /* const d = currentDate.getDate();
    const m = currentDate.getMonth());
    const y = currentDate.getFullYear();
    const dString = (`${d}.${m}.${y}`); 
    tämä yritelmä näytti kuukausina kuukauden indexi numeron??? */
    const dString = format(currentDate, 'dd.MM.yyyy')
    setTodo({...todo, dateString:dString})
    
    console.log(dString);
  }
    
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker selected={selectedDate}
      onChange={date => handleDateChange(date)}
      format="dd/MM/yyy"
      disablePast="true"
      >
        
      </DatePicker>
    </MuiPickersUtilsProvider>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.dateString}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
    } 