import { useState } from 'react';
import { AppContainer } from './App.styled.js';
import Section from 'components/Section/';
import FeedbackOptions from 'components/Feedback';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const capitalizeFirstLetter = string =>
    string[0].toUpperCase() + string.slice(1);

  const handleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = good + neutral + bad;
  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onHandleFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
          onCapitalizeFirstLetter={capitalizeFirstLetter}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={['good', 'neutral', 'bad']}
            optionsCount={{ good, neutral, bad }}
            onCapitalizeFirstLetter={capitalizeFirstLetter}
            onCountTotalFeedback={countTotalFeedback}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </AppContainer>
  );
};

export default App;
