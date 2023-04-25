export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button type="button" name={option} onClick={onLeaveFeedback} key={option}>
      {option}
    </button>
  ));
};
