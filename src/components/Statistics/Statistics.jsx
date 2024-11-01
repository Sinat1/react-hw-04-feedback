import {
  StatsList,
  StatsListItem,
  StatsTotal,
  StatsPositiveRate,
} from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({
  options,
  optionsCount: { good, neutral, bad },
  onCapitalizeFirstLetter,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <>
    <StatsPositiveRate>
      Positive feedback, %: <span>{onCountPositiveFeedbackPercentage()}</span>
    </StatsPositiveRate>
    <StatsList>
      {options.map(option => (
        <StatsListItem key={option}>
          <span>{onCapitalizeFirstLetter(option)}: </span>
          {option === 'good' ? good : option === 'neutral' ? neutral : bad}
        </StatsListItem>
      ))}
    </StatsList>
    <StatsTotal>
      Total: <span>{onCountTotalFeedback()}</span>
    </StatsTotal>
  </>
);

Statistics.propTypes = {
  options: PropTypes.array.isRequired,
  optionsCount: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onCapitalizeFirstLetter: PropTypes.func.isRequired,
  onCountTotalFeedback: PropTypes.func.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
