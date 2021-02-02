import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from './Button';
import { FaPlus, FaSortUp } from 'react-icons/fa';

const Header = ({ title, onAddToggle, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? <FaSortUp /> : <FaPlus />}
          color={showAdd ? 'red' : 'green'}
          onClick={() => onAddToggle()}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
