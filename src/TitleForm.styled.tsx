import styled from "styled-components";
export const FormStyled = styled.form`
    width: 100%;
    height: 2.8rem;
    position: relative;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: black solid 1px;
    margin: 1.3rem auto;
    label {
      position: absolute;
      top: -1.2rem;
      left: .5rem;
    }
    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      font-size: 1.8rem;
      padding: 0;
      margin: 0 0.5rem;
    }
    p {
      position: absolute;
      bottom: -1.3rem;
      left: .5rem;
      color: red;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: none;
      font: 1.5rem sans-serif;
      background-color: #eee;
      &:focus {
        outline: none;
        color: #888;
      }
    }
  `;
  