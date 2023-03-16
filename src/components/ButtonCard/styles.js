import styled from "styled-components";

export const ButtonSave = styled.button`
  height: 20px;
  width: 50px;
  box-sizing: border-box;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  margin-left: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  text-align: center;
  position: relative;
  :disabled {
    opacity: 0.7;
  }
`;
