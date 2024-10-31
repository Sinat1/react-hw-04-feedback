import {
  Stats,
  StatsText,
  StatsList,
  StatsListItem,
  StatsTotal,
  StatsPositiveRate,
} from './Statistics.styled';

const Statistics = ({
  options,
  optionsCount: { good, neutral, bad },
  onCapitalizeFirstLetter,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <Stats>
    <StatsText>Statistics</StatsText>
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
  </Stats>
);

export default Statistics;
