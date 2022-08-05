import PropTypes from 'prop-types';
import {
  ButtonContainer,
  ButtonItem,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        return (
          <ButtonItem key={option}>
            <Button
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
