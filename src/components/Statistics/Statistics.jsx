import {
  Stats,
  Stats__text,
  Stats__list,
  Stats__listItem,
  Stats__total,
  Stats__positiveRate,
} from './Statistics.styled';

const Statistics = ({
  options,
  optionsCount: { good, neutral, bad },
  onCapitalizeFirstLetter,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <Stats>
    <Stats__text>Statistics</Stats__text>
    <Stats__positiveRate>
      Positive feedback, %: <span>{onCountPositiveFeedbackPercentage()}</span>
    </Stats__positiveRate>
    <Stats__list>
      {options.map(option => (
        <Stats__listItem key={option}>
          <span>{onCapitalizeFirstLetter(option)}: </span>
          {option === 'good' ? good : option === 'neutral' ? neutral : bad}
        </Stats__listItem>
      ))}
    </Stats__list>
    <Stats__total>
      Total: <span>{onCountTotalFeedback()}</span>
    </Stats__total>
  </Stats>
);

export default Statistics;
