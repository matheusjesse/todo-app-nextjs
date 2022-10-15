import RegisterButtonContainer from './style';

const RegisterButton = ({ saveTodo }) => {
  return ( 
    <RegisterButtonContainer>
      <button
        type="button"
        onClick={saveTodo}
      >
        Salvar
      </button>
    </RegisterButtonContainer>
   );
}
 
export default RegisterButton;