import { useState } from "react";
import data from "../../Data/Data";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import {
  CardBody,
  CardHeading,
  CardWrapper,
  RadioButton,
  RadioButtonWrapper,
  QuestionText,
  NotAttamptedText,
  BoldText,
  SelectedAnsText,
  IncorrectAnsText,
  CorrectAnsText,
  ButtonWrapper,
  QuizTitleWrapper,
  ThemeButton,
} from "./QuizStyle";

const Quiz = ({ toggleTheme }) => {
  const [answers, setAnswers] = useState({});
  const [isSubmmited, setIsSubmmited] = useState(false);

  const handleFormSubmission = (e) => {
    setIsSubmmited(true);
    e.preventDefault();
  };

  return (
    <>
      <QuizTitleWrapper>
        <div></div>
        <h1>Quiz</h1>
        <ThemeButton onClick={toggleTheme}>
          {localStorage.getItem("theme") == "dark" ? "☀️" : "🌙"}
        </ThemeButton>
      </QuizTitleWrapper>
      <form onSubmit={handleFormSubmission}>
        {data?.map((item, index) => (
          <CardWrapper key={item.id}>
            <CardHeading>{`Question ${index + 1}`}</CardHeading>
            <CardBody>
              <QuestionText>{item.question}</QuestionText>
              {isSubmmited ? (
                answers[item.id] ? (
                  <div>
                    <SelectedAnsText>
                      selected answer is <BoldText>{answers[item.id]}</BoldText>
                    </SelectedAnsText>

                    {item.answer !== answers[item.id] ? (
                      <div>
                        <IncorrectAnsText>
                          The answer you have selected is incorrect.
                        </IncorrectAnsText>
                        <CorrectAnsText>
                          correct answer is <BoldText>{item.answer}</BoldText>
                        </CorrectAnsText>
                      </div>
                    ) : (
                      <CorrectAnsText>
                        You have selected correct answer!!
                      </CorrectAnsText>
                    )}
                  </div>
                ) : (
                  <NotAttamptedText>User Did not attempted.</NotAttamptedText>
                )
              ) : (
                <RadioButtonWrapper>
                  {item.options.map((option, idx) => (
                    <RadioButton key={idx}>
                      <Input
                        type="radio"
                        name={item.id}
                        label={option}
                        checked={answers[item?.id] == option}
                        onChange={() => {
                          setAnswers((answers) => ({
                            ...answers,
                            [item.id]: option,
                          }));
                        }}
                      />
                    </RadioButton>
                  ))}
                </RadioButtonWrapper>
              )}
            </CardBody>
          </CardWrapper>
        ))}
        {!isSubmmited ? (
          <ButtonWrapper>
            <Button type="reset" onClick={() => setAnswers({})}>
              Reset
            </Button>
            <Button type="submit" primary>
              submit
            </Button>
          </ButtonWrapper>
        ) : (
          <div>
            <Button
              type="button"
              fullWidth
              onClick={() => {
                setAnswers({}), setIsSubmmited(false);
              }}
            >
              Back to Quiz
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Quiz;
