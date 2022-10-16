import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    color: var(--blue);
    text-align: center;
    margin-bottom: 24px;
  }

  p {
    width: 84vw;
    color: var(--blue);
  }
`;

export default HomeContainer;
