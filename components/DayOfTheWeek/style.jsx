import styled from 'styled-components';

const DayOfTheWeekContainer = styled.div`
  width: 94vw;
  height: 258px;
  background-color: var(--gray);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 38px;

  input {
    margin-right: 14px;
  }

  input[type=checkbox] {
    transform: scale(2);
  }

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 124px;
    height: 44px;
    padding-left: 12px;
    border-radius: 6px;
    font-size: 1.4em;
    background-color: var(--gray);
    color:  var(--blue);    
    margin-right: 12px;
  }
`;

export default DayOfTheWeekContainer;
