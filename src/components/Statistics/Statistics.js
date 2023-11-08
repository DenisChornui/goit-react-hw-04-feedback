import { Container, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercantage,
}) => {
  return (
    <Container>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>
        Positive feedback: {positiveFeedbackPercantage}%
      </StatisticsItem>
    </Container>
  );
};
