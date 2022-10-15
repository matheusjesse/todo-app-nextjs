import HomeContainer from "./style";
import Header from '../../components/Header'
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify([]));
  }, [])

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