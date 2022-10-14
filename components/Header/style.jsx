import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  margin: 0px 14px 0px 14px;

  h1 {
    font-size: 1.3em;
    color: var(--blue);
  }

  svg {
    height: 40px;
    width: 40px;
    fill: var(--blue);
  }
`;

export default HeaderContainer;
