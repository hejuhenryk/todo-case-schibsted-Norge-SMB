import styled from 'styled-components'

export const ListViewStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cancelBtn {
    border: 0;
    background-color: black;
    cursor: pointer;
    font-size: 1.8rem;
    height: 2.8rem;
    padding: 0 0.5rem;
    > * {
      color: white;
    }
  }
`;

export const ListTitleStyled = styled.div`
  width: 100%;
  height: 2.8rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  border: black dashed 2px;
  border-width: 0 0 2px 0;
  margin: 1.3rem auto;
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 0;
    margin: 0 0.5rem;
  }
  a {
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    color: black;
    text-decoration: none;
  }
  div {
    display: flex;
  }
`;