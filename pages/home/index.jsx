import { useEffect } from 'react';
import HomeContainer from './style';
import Header from '../../components/Header';
import mockData from '../../mocks/mockTodo';
import TodoList from '../../components/TodoList';

function Home() {
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(mockData));
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <h1>Afazeres de hoje</h1>
        <p>Manhã</p>
        <TodoList dayPeriod="morning" />
        <p>Tarde</p>
        <TodoList dayPeriod="afternoon" />
        <p>Noite</p>
        <TodoList dayPeriod="night" />
      </HomeContainer>
    </>
  );
}

export default Home;
