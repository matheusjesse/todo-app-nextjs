import RegisterButtonContainer from './style';

const RegisterButton = ({ saveTodo, buttonDisabled }) => {
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