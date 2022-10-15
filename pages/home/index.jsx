import { useEffect } from 'react';
import HomeContainer from './style';
import Header from '../../components/Header';
import mockData from '../../mocks/mockTodo';

function Home() {
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(mockData));
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <h1>Home page</h1>
      </HomeContainer>
    </>
  );
}

export default Home;
