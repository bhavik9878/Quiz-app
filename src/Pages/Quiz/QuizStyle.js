import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.body};
`;

export const CardHeading = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: flex-start;
  padding: 12px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const CardBody = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RadioButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuestionText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const NotAttamptedText = styled.div`
  color: #0dcaf0;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

export const BoldText = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: inherit;
`;

export const SelectedAnsText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: initial;
  margin-top: 0.5rem;
`;

export const IncorrectAnsText = styled.div`
  color: #dc3545;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: initial;
  margin-top: 1.5rem;
`;

export const CorrectAnsText = styled.div`
  color: #198754;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: initial;
  margin-top: 0.5rem;
`;

export const RadioButton = styled.div`
  margin-top: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

export const QuizTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeButton = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
