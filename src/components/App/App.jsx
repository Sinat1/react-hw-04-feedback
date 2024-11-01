import { Component } from 'react';
import { AppContainer } from './App.styled.js';
import Section from 'components/Section/';
import FeedbackOptions from 'components/Feedback';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1);

  handleFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onHandleFeedback={this.handleFeedback}
            options={['good', 'neutral', 'bad']}
            onCapitalizeFirstLetter={this.capitalizeFirstLetter}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={['good', 'neutral', 'bad']}
              optionsCount={{ good, neutral, bad }}
              onCapitalizeFirstLetter={this.capitalizeFirstLetter}
              onCountTotalFeedback={this.countTotalFeedback}
              onCountPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </AppContainer>
    );
  }
}

export default App;
