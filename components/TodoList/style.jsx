import styled from 'styled-components';

const TodoListContainer = styled.div`
  width: 94vw;
  margin-bottom: 12px;
  border-radius: 8px;
  background: var(--gray);
  box-shadow: 0px 0px 2px 0px var(--blue);
  color: var(--blue);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px 0px 12px 0px;

  input {
    margin-right: 8px;
    margin-left: 12px;
  }

  label {
    width: 90%;
    height: 42px;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 0px -1px #000000;
    border-radius: 0px 2px 2px 0px;
  }

`;

export default TodoListContainer;
