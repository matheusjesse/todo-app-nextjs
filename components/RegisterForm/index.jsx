import DayPeriod from '../DayPeriod';
import RegisterFormContainer from './style';
import DayOfTheWeekContainer from '../../components/DayOfTheWeek';
import NoteInpute from '../../components/NoteInput';
import RegisterButton from '../../components/RegisterButton';

const RegisterForm = () => {
  return ( 
    <RegisterFormContainer>
      <DayPeriod />
      <DayOfTheWeekContainer />
      <NoteInpute />
      <RegisterButton />
    </RegisterFormContainer>
   );
}
 
export default RegisterForm;