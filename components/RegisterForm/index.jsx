import { useEffect, useState } from 'react';
import DayPeriod from '../DayPeriod';
import RegisterFormContainer from './style';
import DayOfTheWeekContainer from '../DayOfTheWeek';
import NoteInpute from '../NoteInput';
import RegisterButton from '../RegisterButton';

function RegisterForm() {
  const [dayPeriod, setDayPeriod] = useState([]);
  const [dayOfTheWeek, setDayOfTheWeek] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    setButtonDisabled(true);
    const fieldsValidation = dayPeriod.length > 0 && dayOfTheWeek.length > 0 && noteText.length > 3;
    if (fieldsValidation) setButtonDisabled(false);
  }, [dayOfTheWeek, dayPeriod, noteText]);

  return (
    <RegisterFormContainer>
      <DayPeriod setDayPeriod={setDayPeriod} dayPeriod={dayPeriod} />
      <DayOfTheWeekContainer setDayOfTheWeek={setDayOfTheWeek} dayOfTheWeek={dayOfTheWeek} />
      <NoteInpute noteText={noteText} setNoteText={setNoteText} />
      <RegisterButton
        dayPeriod={dayPeriod}
        dayOfTheWeek={dayOfTheWeek}
        noteText={noteText}
        setDayPeriod={setDayPeriod}
        setDayOfTheWeek={setDayOfTheWeek}
        setNoteText={setNoteText}
        buttonDisabled={buttonDisabled}
      />
    </RegisterFormContainer>
  );
}

export default RegisterForm;
