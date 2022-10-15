import DayPeriod from '../DayPeriod';
import RegisterFormContainer from './style';
import DayOfTheWeekContainer from '../../components/DayOfTheWeek';
import NoteInpute from '../../components/NoteInput';
import RegisterButton from '../../components/RegisterButton';
import { useEffect, useState } from 'react';
import TodoList from '../../components/DayOfTheWeek';

const RegisterForm = () => {
  const [dayPeriod, setDayPeriod] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState([]);
  const [noteText, setNoteText] = useState('');

  function saveTodo() {
    const data = JSON.parse(localStorage.getItem('todoList'));
    console.log(data);
    const todo = {
      id: Date.now(),
      dayPeriod,
      dayOfTheWeek,
      noteText,
    }
    localStorage.setItem('todoList', JSON.stringify([...data, todo]));
  }

  return ( 
    <RegisterFormContainer>
      <DayPeriod setDayPeriod={setDayPeriod} dayPeriod={dayPeriod} />
      <DayOfTheWeekContainer setDayOfTheWeek={setDayOfTheWeek} dayOfTheWeek={dayOfTheWeek}/>
      <NoteInpute noteText={noteText} setNoteText={setNoteText}/>
      <RegisterButton saveTodo={saveTodo}/>
    </RegisterFormContainer>
   );
}
 
export default RegisterForm;