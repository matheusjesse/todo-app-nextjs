import NoteInputeContainer from './style';

const NoteInpute = ({noteText, setNoteText}) => {

  function handleTextInput(e) {
    const { value } = e.target;
    setNoteText(value);
  }

  return ( 
    <NoteInputeContainer>
      <h2>Note</h2>
      <label htmlFor="todoText">
        <input
          data-testid="note-text-id"
          type="text"
          id="todotext"
          name="todoText"
          value={noteText}
          onChange={handleTextInput}
        />
      </label>
    </NoteInputeContainer>
   );
}
 
export default NoteInpute;