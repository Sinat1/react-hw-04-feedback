import {
  FeedbackList,
  FeedbackListItem,
  FeedbackListItemBtn,
} from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onHandleFeedback,
  options,
  onCapitalizeFirstLetter,
}) => (
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
);

FeedbackOptions.propTypes = {
  onHandleFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  onCapitalizeFirstLetter: PropTypes.func.isRequired,
};

export default FeedbackOptions;
