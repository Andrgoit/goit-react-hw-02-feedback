import PropTypes from 'prop-types';
import {
  ButtonContainer,
  ButtonItem,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(btn => {
        return (
          <ButtonItem key={btn}>
            <Button type="button" name={btn} onClick={onLeaveFeedback}>
              {btn}
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
