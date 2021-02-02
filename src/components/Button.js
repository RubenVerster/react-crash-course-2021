import PropTypes from 'prop-types';

function Button({ text, color, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
}
Button.defaultProps = {
  color: 'steelblue',
  text: 'Add',
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
