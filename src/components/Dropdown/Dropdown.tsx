import React from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown.types'; // Import DropdownProps

interface StyledSelectProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
}

const Select = styled.select<StyledSelectProps>`
  padding: 8px;
  background-color: ${(props) => (props.disabled ? props.backgroundColor ||'#eee' : props.backgroundColor || 'white')}; /* Gray background for disabled state */
  color: ${(props) => (props.disabled ? '#666' : 'black')}; /* Gray text for disabled state */
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* Not-allowed cursor for disabled state */

  ${(props) =>
    props.hidden &&
    css`
      display: none; /* Hide the select element if hidden prop is true */
    `}
`;

const Dropdown = ({ options, onSelect, disabled, hidden, backgroundColor }: DropdownProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <Select onChange={handleSelect} disabled={disabled} hidden={hidden} backgroundColor={backgroundColor}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
