import styled from 'styled-components';

const RegisterButtonContainer = styled.div`
  
  margin-bottom: 48px;

  button {
    width: 216px;
    height: 60px;
    left: 99px;
    top: 776px;
    background: #03213E;
    border-radius: 50px;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #FBFBFB;
    border: none;
  }

  button:disabled {
    background: var(--gray);
    color: var(--blue);
    border: 1px solid var(--blue);
    box-shadow: 0px 0px 4px 1px var(--blue);
  }

`;

export default RegisterButtonContainer;
