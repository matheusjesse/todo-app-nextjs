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
          type="checkbox"
          id="dayOfTheWeek1"
          name="dayOfTheWeek1"
          value="sunday"
          onChange={dayOfTheWeekChange}
        />
        Domingo 
      </label>
      <label htmlFor="dayOfTheWeek2">
        <input
          type="checkbox"
          id="dayOfTheWeek2"
          name="dayOfTheWeek2"
          value="monday"
          onChange={dayOfTheWeekChange}
        />
        Segunda
      </label>
      <label htmlFor="dayOfTheWeek3">
        <input
          type="checkbox"
          id="dayOfTheWeek3"
          name="dayOfTheWeek3"
          value="tuesday"
          onChange={dayOfTheWeekChange}
        />
        Terça
      </label>
      <label htmlFor="dayOfTheWeek4">
        <input
          type="checkbox"
          id="dayOfTheWeek4"
          name="dayOfTheWeek4"
          value="wednesday"
          onChange={dayOfTheWeekChange}
        />
        Quarta
      </label>
      <label htmlFor="dayOfTheWeek5">
        <input
          type="checkbox"
          id="dayOfTheWeek5"
          name="dayOfTheWeek5"
          value="thursday"
          onChange={dayOfTheWeekChange}
        />
        Quinta
      </label>
      <label fhtmlForor="dayOfTheWeek6">
        <input
          type="checkbox"
          id="dayOfTheWeek6"
          name="dayOfTheWeek6"
          value="friday"
          onChange={dayOfTheWeekChange}
        />
        Sexta
      </label>
      <label htmlFor="dayOfTheWeek7">
        <input
          type="checkbox"
          id="dayOfTheWeek7"
          name="dayOfTheWeek7"
          value="saturday"
          onChange={dayOfTheWeekChange}
        />
        Sábado
      </label>
    </DayOfTheWeekContainer>
   );
}
 
export default TodoList;