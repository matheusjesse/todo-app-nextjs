import RegisterButtonContainer from './style';

function RegisterButton({
  buttonDisabled,
  dayPeriod,
  dayOfTheWeek,
  noteText,
  setDayPeriod,
  setDayOfTheWeek,
  setNoteText,
}) {
  function saveTodo() {
    const data = JSON.parse(localStorage.getItem('todoList'));
    const todo = {
      id: Date.now(),
      dayPeriod: [dayPeriod[0]],
      dayOfTheWeek,
      noteText,
    };
    localStorage.setItem('todoList', JSON.stringify([...data, todo]));
    setDayPeriod([]);
    setDayOfTheWeek([]);
    setNoteText('');
  }

  return (
    <RegisterButtonContainer>
      <button
        type="button"
        onClick={saveTodo}
        disabled={buttonDisabled}
      >
        Salvar
      </button>
    </RegisterButtonContainer>
  );
}

export default RegisterButton;
