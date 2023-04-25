import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button type="button" name={option} onClick={onLeaveFeedback} key={option}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
