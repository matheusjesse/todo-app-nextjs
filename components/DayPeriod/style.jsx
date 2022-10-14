import styled from 'styled-components';

const DayPeriodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 94vw;
  margin-bottom: 18px;

  input {
    margin-right: 10px;
  }

  input[type=checkbox] {
    transform: scale(1.5);
  }

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 32%;
    height: 44px;
    box-shadow: 0px 0px 1px 1px rgb(3, 33, 62, 0.4);
    padding-left: 12px;
    border-radius: 6px;
    font-size: 1.3em;
    background-color: var(--gray);
    color:  var(--blue);
    font-size-adjust: 0.1;
  }
`;

export default DayPeriodContainer;
