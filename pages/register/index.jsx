import RegisterContainer from "./style";
import Header from '../../components/Header'
import RegisterFormContainer from '../../components/RegisterForm'

const Register = () => {
  return ( 
    <>
      <Header />
      <RegisterContainer>
        <h1>Cadastrar ToDo</h1>
        <RegisterFormContainer />
      </RegisterContainer>
    </>
   );
}

export default Register;