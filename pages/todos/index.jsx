import TodosContainer from './style';
import Header from '../../components/Header';
import TodosConfig from '../../components/TodosConfig';

function Todos() {
  return (
    <>
      <Header />
      <TodosContainer>
        <h1>ToDos</h1>
      <TodosConfig />
      </TodosContainer>
    </>
  );
}

export default Todos;
