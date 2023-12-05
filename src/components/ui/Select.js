import React, { useState } from 'react';


const CustomSelect = ({ options, value }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false);
  };

  return (
    <div className="custom-select-container">
      <div
        className="custom-select"
        onClick={() => setOptionsVisible(!isOptionsVisible)}
      >
        {selectedOption ? selectedOption.label : value}
        <div className="custom-select-arrow">&#9660;</div>
      </div>
      {isOptionsVisible && (
        <div className="custom-options">
          {options.map((option) => (
            <div
              className="custom-option"
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
