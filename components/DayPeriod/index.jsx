import DayPeriodContainer from './style';

const DayPeriod = () => {
  return ( 
    <DayPeriodContainer>
      <label for="dayPeriod1">
      <input type="checkbox" id="dayPeriod1" name="dayPeriod1" value="morning" />
       Manhã </label>
      <label for="dayPeriod2">
      <input type="checkbox" id="dayPeriod2" name="dayPeriod2" value="afternoon" />
       Tarde </label>
      <label for="dayPeriod3">
      <input type="checkbox" id="dayPeriod3" name="dayPeriod3" value="afternoon" />
       Noite </label>
    </DayPeriodContainer>
   );
}
 
export default DayPeriod;