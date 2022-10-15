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
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(true);
    const fieldsValidation = dayPeriod.length > 0 && dayOfTheWeek.length > 0 && noteText.length > 3;
    if (fieldsValidation) setButtonDisabled(false);
  }, [dayOfTheWeek, dayPeriod, noteText]);

  function saveTodo() {
    const data = JSON.parse(localStorage.getItem('todoList'));
    const todo = {
      id: Date.now(),
      dayPeriod,
      dayOfTheWeek,
      noteText,
    }
    localStorage.setItem('todoList', JSON.stringify([...data, todo]));
    setDayPeriod([]);
    setDayOfTheWeek([]);
    setNoteText('');
  }

  return ( 
    <RegisterFormContainer>
      <DayPeriod setDayPeriod={setDayPeriod} dayPeriod={dayPeriod} />
      <DayOfTheWeekContainer setDayOfTheWeek={setDayOfTheWeek} dayOfTheWeek={dayOfTheWeek}/>
      <NoteInpute noteText={noteText} setNoteText={setNoteText}/>
      <RegisterButton saveTodo={saveTodo} buttonDisabled={buttonDisabled}/>
    </RegisterFormContainer>
   );
}
 
export default RegisterForm;