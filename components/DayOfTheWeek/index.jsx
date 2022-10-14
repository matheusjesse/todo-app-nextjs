import DayOfTheWeekContainer from './style';

const TodoList = () => {
  return ( 
    <DayOfTheWeekContainer>
      <label htmlFor="dayOfTheWeek1">
        <input type="checkbox" id="dayOfTheWeek1" name="dayOfTheWeek1" value="sunday" />
        Domingo 
      </label>
      <label htmlFor="dayOfTheWeek2">
        <input type="checkbox" id="dayOfTheWeek2" name="dayOfTheWeek2" value="monday" />
        Segunda
      </label>
      <label htmlFor="dayOfTheWeek3">
        <input type="checkbox" id="dayOfTheWeek3" name="dayOfTheWeek3" value="tuesday" />
        Terça
      </label>
      <label htmlFor="dayOfTheWeek4">
        <input type="checkbox" id="dayOfTheWeek4" name="dayOfTheWeek4" value="wednesday" />
        Quarta
      </label>
      <label htmlFor="dayOfTheWeek5">
        <input type="checkbox" id="dayOfTheWeek5" name="dayOfTheWeek5" value="thursday" />
        Quinta
      </label>
      <label fhtmlForor="dayOfTheWeek6">
        <input type="checkbox" id="dayOfTheWeek6" name="dayOfTheWeek6" value="friday" />
        Sexta
      </label>
      <label htmlFor="dayOfTheWeek7">
        <input type="checkbox" id="dayOfTheWeek7" name="dayOfTheWeek7" value="saturday" />
        Sábado
      </label>
    </DayOfTheWeekContainer>
   );
}
 
export default TodoList;