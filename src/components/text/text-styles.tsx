import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding-inline: 24px;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    max-width: 530px;
    margin: 0;
    padding: 0;
    width: 50%;
    margin-right: 22.5px;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.292px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.521px;
  }
`;
export const Description = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;
