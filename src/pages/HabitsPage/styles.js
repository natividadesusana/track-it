import styled from "styled-components";

export const ContainerHabits = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #E5E5E5; 
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E5E5E5;
  margin-bottom: 15px;
  h2 {
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    font-weight: 400;
    font-size: 27px;
    cursor: pointer;
  }
`;

export const HabitCardContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 725px) {
    justify-content: center;
  }
`;
