import { Button, Container } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={nanoid()}
          type="button"
          onClick={() => onLeaveFeedback(`${option}`)}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};
