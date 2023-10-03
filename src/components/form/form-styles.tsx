import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 24px;
  @media (min-width: 768px) {
    max-width: 530px;
    margin: 0;
    padding: 0;
    width: 50%;
    margin-left: 22.5px;
  }
`;
export const FreeTrialBox = styled.div`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.violet};
  padding-inline: 66px;
  padding-block: 18px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.268px;
  margin-bottom: 24px;
`;
export const FreeTrialBold = styled.span`
  font-weight: 700;
`;
export const FormElem = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input<{ iserror: string | undefined }>`
  height: 56px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  border-radius: 5px;
  border: 1px solid #dedede;
  padding-inline: 10px;
  background-image: ${(props) =>
    props.iserror ? "url(images/icon-error.svg)" : "none"};
  background-repeat: no-repeat;
  background-position: 95%;
`;
export const InputContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  border-radius: 5px;
  padding: 15px 0px;
  margin-bottom: 8px;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
  border: none;
  @media (min-width: 768px) {
    cursor: pointer;
    &:hover {
      background-color: rgb(119, 226, 179);
      transition: 0.2s ease-in-out;
    }
  }
`;
export const FormWhiteContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
`;
export const Terms = styled.p`
  max-width: 250px;
  margin: auto;
  text-align: center;
  color: rgb(186, 183, 212);
  font-size: 11px;
  font-weight: 400;
  line-height: 21px;
`;
export const TermsLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.brickRed};
`;
export const ErrorMsg = styled.span`
  display: block;
  color: red;
  font-size: 11px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;
