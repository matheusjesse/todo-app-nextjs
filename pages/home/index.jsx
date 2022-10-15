import { useEffect } from 'react';
import HomeContainer from './style';
import Header from '../../components/Header';

function Home() {
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify([]));
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
