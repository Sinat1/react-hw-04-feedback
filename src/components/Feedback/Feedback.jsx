import {
  FeedBack,
  Feedback__text,
  Feedback__list,
  Feedback__listItem,
  Feedback__listItemBtn,
} from './Feedback.styled';

const Feedback = ({ onHandleFeedback, options, onCapitalizeFirstLetter }) => (
  <FeedBack>
    <Feedback__text>Please leave feedback</Feedback__text>
    <Feedback__list>
      {options.map(option => (
        <Feedback__listItem key={option}>
          <Feedback__listItemBtn
            type="button"
            onClick={() => onHandleFeedback(option)}
          >
            {onCapitalizeFirstLetter(option)}
          </Feedback__listItemBtn>
        </Feedback__listItem>
      ))}
    </Feedback__list>
  </FeedBack>
);

export default Feedback;
