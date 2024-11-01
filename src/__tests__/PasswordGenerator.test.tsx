import '@testing-library/jest-dom';
import ToggleOption from '../components/ToggleOption';
import LengthSelector from '../components/LengthSelector';
import { PasswordField } from '../components/PasswordField';
import { generatePassword } from '../utils/passwordGenerator';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Password Generator', () => {
  describe('generatePassword', () => {
    const passwordConfigs = {
      length: 12,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: true,
    };
    test('generates a password with the correct length', () => {
      const password = generatePassword(passwordConfigs);
      expect(password.length).toBe(12);
    });

    test('includes uppercase letters when configured', () => {
      const password = generatePassword(passwordConfigs);
      expect(password).toMatch(/[A-Z]/);
    });

    test('includes numbers when configured', () => {
      const password = generatePassword(passwordConfigs);
      expect(password).toMatch(/\d/);
    });

    test('includes symbols when configured', () => {
      const password = generatePassword(passwordConfigs);
      expect(password).toMatch(/[!@#$%^&*()_+]/);
    });
  });

  describe('PasswordField', () => {
    test('displays the correct password', () => {
      render(
        <PasswordField
          password="mypassword"
          onRefresh={() => {}}
          onCopy={() => {}}
        />
      );
      expect(screen.getByDisplayValue('mypassword')).toBeInTheDocument();
    });

    test('calls the onCopy function when the copy icon is clicked', () => {
      const mockOnCopy = jest.fn();
      render(
        <PasswordField
          password="mypassword"
          onRefresh={() => {}}
          onCopy={mockOnCopy}
        />
      );
      fireEvent.click(screen.getByLabelText('Copy password to clipboard'));
      expect(mockOnCopy).toHaveBeenCalledTimes(1);
    });

    test('calls the onRefresh function when the refresh icon is clicked', () => {
      const mockOnRefresh = jest.fn();
      render(
        <PasswordField
          password="mypassword"
          onRefresh={mockOnRefresh}
          onCopy={() => {}}
        />
      );
      fireEvent.click(screen.getByLabelText('Generate new password'));
      expect(mockOnRefresh).toHaveBeenCalledTimes(1);
    });
  });

  describe('LengthSelector', () => {
    test('displays the correct password length', () => {
      render(<LengthSelector length={12} onLengthChange={() => {}} />);
      expect(screen.getByText('12')).toBeInTheDocument();
    });

    test('calls the onLengthChange function when the slider value changes', () => {
      const mockOnChange = jest.fn();
      render(<LengthSelector length={12} onLengthChange={mockOnChange} />);
      fireEvent.change(screen.getByRole('slider'), { target: { value: 16 } });
      expect(mockOnChange).toHaveBeenCalledWith(16);
    });
  });

  describe('ToggleOption', () => {
    test('displays the correct label', () => {
      render(
        <ToggleOption
          label="Include uppercase letters"
          value={true}
          onValueChange={() => {}}
        />
      );
      expect(screen.getByText('Include uppercase letters')).toBeInTheDocument();
    });

    test('calls the onValueChange function when the toggle is clicked', () => {
      const mockOnChange = jest.fn();
      render(
        <ToggleOption
          label="Include uppercase letters"
          value={true}
          onValueChange={mockOnChange}
        />
      );
      fireEvent.click(screen.getByRole('button'));
      expect(mockOnChange).toHaveBeenCalledWith(false);
    });
  });
});
