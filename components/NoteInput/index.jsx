import NoteInputeContainer from './style';

const NoteInpute = () => {
  return ( 
    <NoteInputeContainer>
      <h2>Note</h2>
      <label htmlFor="todoText">
        <input type="text" id="todotext" name="todoText" />
      </label>
    </NoteInputeContainer>
   );
}
 
export default NoteInpute;