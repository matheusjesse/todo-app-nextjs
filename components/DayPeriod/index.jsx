import DayPeriodContainer from './style';

const DayPeriod = ({ setDayPeriod, dayPeriod }) => {

  function dayPeriodChange(e) {
    const {value, checked} = e.target;
    setDayPeriod([...dayPeriod, value]);

    if (!checked) {
      const removePeriod = dayPeriod.filter((element) => element !== value)
      setDayPeriod(removePeriod);
    }

  }

  return ( 
    <DayPeriodContainer>
      <label htmlFor="dayPeriod1">
      <input
        type="checkbox"
        id="dayPeriod1"
        name="dayPeriod1"
        value="morning"
        onChange={dayPeriodChange}
      />
       Manhã </label>
      <label htmlFor="dayPeriod2">
      <input
        type="checkbox"
        id="dayPeriod2"
        name="dayPeriod2"
        value="afternoon"
        onChange={dayPeriodChange}
      />
       Tarde </label>
      <label htmlFor="dayPeriod3">
      <input 
        type="checkbox"
        id="dayPeriod3"
        name="dayPeriod3"
        value="night"
        onChange={dayPeriodChange}
      />
       Noite </label>
    </DayPeriodContainer>
   );
}
 
export default DayPeriod;