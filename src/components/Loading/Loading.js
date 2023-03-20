import React from "react";
import styled from "styled-components";
import loading from "../../assets/images/loading.gif";

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon src={loading} alt="Loading icon" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const LoadingIcon = styled.img`
  height: 30%;
`;




