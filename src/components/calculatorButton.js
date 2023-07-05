import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

// Child component
export default function CalculatorButton({
  className, text, id, obj, setObj,
}) {
  const handleClick = (event) => {
    const operation = calculate(obj, event.target.textContent);

    setObj((oldObj) => ({
      ...oldObj,
      ...operation,
    }));

    const result = document.getElementById('result');
    // If there's a zero, update the content.
    if (result.textContent === '0') {
      result.textContent = '';
    }
    // Concat the operations.
    result.textContent += event.target.textContent;
    // If the user press equal, display the result.
    if (event.target.textContent === '=') {
      result.textContent = '';
      result.textContent = operation.total || '0';
    } else if (event.target.textContent === 'AC') {
      result.textContent = '0';
    }
  };

  return (
    <button type="button" className={className} id={id} onClick={handleClick}>
      {text}
    </button>
  );
}

CalculatorButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  obj: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  setObj: PropTypes.func.isRequired,
};
