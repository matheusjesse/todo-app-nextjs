import DayPeriod from '../DayPeriod';
import RegisterFormContainer from './style';
import DayOfTheWeekContainer from '../../components/DayOfTheWeek';
import NoteInpute from '../../components/NoteInput';
import RegisterButton from '../../components/RegisterButton';
import { useEffect, useState } from 'react';

const RegisterForm = () => {
  const [dayPeriod, setDayPeriod] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState([]);
  const [noteText, setNoteText] = useState('');

  return ( 
    <RegisterFormContainer>
      <DayPeriod setDayPeriod={setDayPeriod} dayPeriod={dayPeriod} />
      <DayOfTheWeekContainer setDayOfTheWeek={setDayOfTheWeek} dayOfTheWeek={dayOfTheWeek}/>
      <NoteInpute noteText={noteText} setNoteText={setNoteText}/>
      <RegisterButton />
    </RegisterFormContainer>
   );
}
 
export default RegisterForm;