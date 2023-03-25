import PropTypes from 'prop-types';
import { OptionsContainer, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionButton
          key={option}
          onClick={() => onLeaveFeedback(option)}
          color={option.toLowerCase()}
        >
          {option}
        </OptionButton>
      ))}
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
