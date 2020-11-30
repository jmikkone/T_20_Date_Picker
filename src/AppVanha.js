import React, { useState }  from 'react';
import './App.css';
import '@material-ui/styles';
//import {DatePicker} from '@material-ui/pickers/DatePicker';


import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

/* export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
        }  */

function App() {
  const [todo, setTodo] = useState({desc: ''});
  const [todos, setTodos] = useState([]);

  const [selectedDate, setSelectedDate] = useState({});

  const [date, setDate] = useState(new Date());

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
   

  const handleDateChange=(date)=> {
    setSelectedDate(date);
    const currentDate = selectedDate || date;
    const d = currentDate.getDate();
    const m = currentDate.getMonth();
    const y = currentDate.getFullYear();
    const dateString = `${d}.${m}.${y}`;

    setDate(dateString);
    console.log(dateString);  
    
  }

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker selected={selectedDate} 
      onChange={handleDateChange}>
        
      </DatePicker>
    </MuiPickersUtilsProvider>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{date.toUTCString()}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
    }

export default App;
