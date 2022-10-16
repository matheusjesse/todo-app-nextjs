import DayPeriodContainer from './style';

function DayPeriod({ setDayPeriod, dayPeriod }) {
  function dayPeriodChange(e) {
    const { value, checked } = e.target;
    setDayPeriod([value]);

    if (!checked) {
      const removePeriod = dayPeriod.filter((element) => element !== value);
      setDayPeriod(removePeriod);
    }
  }

  return (
    <DayPeriodContainer>
      <label htmlFor="dayPeriod1">
        <input
          type="radio"
          id="dayPeriod1"
          name="dayPeriod1"
          value="morning"
          onChange={dayPeriodChange}
          checked={dayPeriod.filter((item) => item === 'morning').length}
        />
        Manhã
      </label>
      <label htmlFor="dayPeriod2">
        <input
          type="radio"
          id="dayPeriod2"
          name="dayPeriod2"
          value="afternoon"
          onChange={dayPeriodChange}
          checked={dayPeriod.filter((item) => item === 'afternoon').length}
        />
        Tarde
      </label>
      <label htmlFor="dayPeriod3">
        <input
          type="radio"
          id="dayPeriod3"
          name="dayPeriod3"
          value="night"
          onChange={dayPeriodChange}
          checked={dayPeriod.filter((item) => item === 'night').length}
        />
        Noite
      </label>
    </DayPeriodContainer>
  );
}

export default DayPeriod;
