import {
  FeedBack,
  FeedbackText,
  FeedbackList,
  FeedbackListItem,
  FeedbackListItemBtn,
} from './Feedback.styled';

const Feedback = ({ onHandleFeedback, options, onCapitalizeFirstLetter }) => (
  <FeedBack>
    <FeedbackText>Please leave feedback</FeedbackText>
    <FeedbackList>
      {options.map(option => (
        <FeedbackListItem key={option}>
          <FeedbackListItemBtn
            type="button"
            onClick={() => onHandleFeedback(option)}
          >
            {onCapitalizeFirstLetter(option)}
          </FeedbackListItemBtn>
        </FeedbackListItem>
      ))}
    </FeedbackList>
  </FeedBack>
);

export default Feedback;
