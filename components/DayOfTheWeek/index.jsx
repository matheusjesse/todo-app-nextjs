import DayOfTheWeekContainer from './style';

const TodoList = ({dayOfTheWeek, setDayOfTheWeek}) => {

  function dayOfTheWeekChange(e) {
    const {value, checked} = e.target;
    setDayOfTheWeek([...dayOfTheWeek, value]);

    if (!checked) {
      const removeDayOfTheWeek = dayOfTheWeek.filter((element) => element !== value)
      setDayOfTheWeek(removeDayOfTheWeek);
    }

  }
  return (
    <DayOfTheWeekContainer>
      <label htmlFor="dayOfTheWeek1">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek1"
          name="dayOfTheWeek1"
          value="sunday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'sunday').length}
        />
        Domingo 
      </label>
      <label htmlFor="dayOfTheWeek2">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek2"
          name="dayOfTheWeek2"
          value="monday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'monday').length}
        />
        Segunda
      </label>
      <label htmlFor="dayOfTheWeek3">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek3"
          name="dayOfTheWeek3"
          value="tuesday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'tuesday').length}
        />
        Terça
      </label>
      <label htmlFor="dayOfTheWeek4">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek4"
          name="dayOfTheWeek4"
          value="wednesday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'wednesday').length}
        />
        Quarta
      </label>
      <label htmlFor="dayOfTheWeek5">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek5"
          name="dayOfTheWeek5"
          value="thursday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'thursday').length}
        />
        Quinta
      </label>
      <label htmlFor="dayOfTheWeek6">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek6"
          name="dayOfTheWeek6"
          value="friday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'friday').length}
        />
        Sexta
      </label>
      <label htmlFor="dayOfTheWeek7">
        <input
          data-testid="day-of-the-week-id"
          type="checkbox"
          id="dayOfTheWeek7"
          name="dayOfTheWeek7"
          value="saturday"
          onChange={dayOfTheWeekChange}
          checked={dayOfTheWeek.filter((item) => item === 'saturday').length}
        />
        Sábado
      </label>
    </DayOfTheWeekContainer>
   );
}
 
export default TodoList;