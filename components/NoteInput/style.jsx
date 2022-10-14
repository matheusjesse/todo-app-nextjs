import styled from 'styled-components';

const NoteInputeContainer = styled.div`

  width: 94vw;
  margin-bottom: 48px;

  h2 {
    color:  var(--blue);
    margin-bottom: 12px;
  }

  input {
    width: 80%;
    height: 48px;
    border-radius: 50px;
    border: none;
    box-shadow: 0px 0px 1px 1px rgba(20, 104, 182, 0.25);
    background:  var(--gray);
  }
`;

export default NoteInputeContainer;
