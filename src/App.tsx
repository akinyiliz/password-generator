import ToggleOption from './components/ToggleOption';
import LengthSelector from './components/LengthSelector';
import { PasswordField } from './components/PasswordField';
import { useState, useRef, useEffect, useCallback } from 'react';
import { generatePassword, PasswordConfig } from './utils/passwordGenerator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [password, setPassword] = useState<string>('');
  const [passwordConfigs, setPasswordConfigs] = useState<PasswordConfig>({
    length: 8,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const passwordRef = useRef<HTMLInputElement>(null);

  const updatePasswordConfigs = (
    key: keyof PasswordConfig,
    value: boolean | number
  ) => {
    setPasswordConfigs((prev) => ({ ...prev, [key]: value }));
  };

  const refreshPassword = useCallback(() => {
    setPassword(generatePassword(passwordConfigs));
  }, [passwordConfigs]);

  useEffect(() => {
    refreshPassword();
  }, [passwordConfigs, refreshPassword]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

    toast('Password copied!', {
      type: 'success',
      autoClose: 3000,
      pauseOnHover: false,
    });
  };

  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center px-2 overflow-auto">
      <div className="w-[90%] h-[550px] md:max-w-xl mx-auto bg-cardBg shadow-md rounded-2xl px-4 py-3 md:w-[50%] lg:w-[35%]">
        <h1 className="text-whiteText text-left text-2xl py-4">
          Password Generator
        </h1>

        <div className="pt-3 space-y-4">
          <PasswordField
            password={password}
            onRefresh={refreshPassword}
            onCopy={copyPasswordToClipboard}
            passwordRef={passwordRef}
          />

          <LengthSelector
            length={passwordConfigs.length}
            onLengthChange={(length) => updatePasswordConfigs('length', length)}
          />

          <div className="w-ful space-y-1">
            <label htmlFor="" className="label-text">
              Settings
            </label>

            <div className="w-ful space-y-3">
              <ToggleOption
                label="Include numbers"
                value={passwordConfigs.includeNumbers}
                onValueChange={(value) =>
                  updatePasswordConfigs('includeNumbers', value)
                }
              />

              <ToggleOption
                label="Include uppercase letters"
                value={passwordConfigs.includeUppercase}
                onValueChange={(value) =>
                  updatePasswordConfigs('includeUppercase', value)
                }
              />

              <ToggleOption
                label="Include special characters"
                value={passwordConfigs.includeSymbols}
                onValueChange={(value) =>
                  updatePasswordConfigs('includeSymbols', value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
