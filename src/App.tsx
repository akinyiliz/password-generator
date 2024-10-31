import { FaRegCopy } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { useState, useRef, useEffect, useCallback } from 'react';

function App() {
  const [password, setPassword] = useState<string>('');
  const [uppercaseAllowed, setUppercaseAllowed] = useState<boolean>(false);
  const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [copyText, setCopyText] = useState<string>('Copy');

  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';

    if (uppercaseAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbersAllowed) str += '0123456789';
    if (symbolsAllowed) str += '!@#$%^&*()_+';

    for (let i = 1; i <= passwordLength; i++) {
      const index = Math.floor(Math.random() * str.length);

      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [uppercaseAllowed, numbersAllowed, symbolsAllowed, passwordLength]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, numbersAllowed, symbolsAllowed, uppercaseAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

    setCopyText('Copied!');

    setTimeout(() => {
      setCopyText('Copy');
    }, 4000);
  };

  const min = 8;
  const max = 20;
  const fillPercentage = ((passwordLength - min) / (max - min)) * 100;

  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center px-2 overflow-auto">
      <div className="w-[90%] h-[550px] md:max-w-xl mx-auto bg-cardBg shadow-md rounded-2xl px-4 py-3 md:w-[50%] lg:w-[35%]">
        <h1 className="text-whiteText text-left text-2xl py-4">
          Password Generator
        </h1>

        <div className="pt-3 space-y-4">
          <div>
            <label htmlFor="passwordField" className="label-text">
              Generate Password
            </label>
            <div className="flex shadow rounded-xl overflow-hidden bg-inputBg px-4">
              <input
                id="passwordField"
                type="text"
                value={password}
                className="outline-none w-full py-3 bg-inputBg text-whiteText"
                placeholder="Password"
                readOnly
                ref={passwordRef}
              />
              <div className="flex items-center gap-3">
                <FaRegCopy
                  aria-label="Copy password to clipboard"
                  onClick={copyPasswordToClipboard}
                  className=" text-secondary cursor-pointer"
                  title={copyText}
                  size={20}
                />
                <LuRefreshCcw
                  aria-label="Copy password to clipboard"
                  onClick={generatePassword}
                  className=" text-secondary cursor-pointer"
                  title="Generate new!"
                  size={20}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="passwordLength" className="label-text">
                Character Length
              </label>
              <p className="text-secondary text-lg font-[600]">
                {passwordLength}
              </p>
            </div>
            <div className="bg-inputBg flex items-center gap-4 text-whiteText py-3 px-4 rounded-xl">
              <span>8</span>
              <input
                type="range"
                name="passwordLength"
                id="passwordLength"
                min={min}
                max={max}
                value={passwordLength}
                className="flex-1 custom-range"
                onChange={(event) =>
                  setPasswordLength(parseInt(event.target.value))
                }
                style={{
                  background: `linear-gradient(90deg, #d181ff ${fillPercentage}%, #56505d ${fillPercentage}%)`,
                }}
              />
              <span>20</span>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="" className="label-text">
              Settings
            </label>

            <div className="w-full flex flex-col justify-between gap-2 text-lg mb-3">
              <div className="settings-tab">
                <label htmlFor="uppercaseAllowed" className="text-sm">
                  Include uppercase letters
                </label>
                {uppercaseAllowed ? (
                  <BsToggleOn
                    size={30}
                    color="#d181ff"
                    onClick={() => setUppercaseAllowed(false)}
                  />
                ) : (
                  <BsToggleOff
                    size={30}
                    onClick={() => setUppercaseAllowed(true)}
                  />
                )}
              </div>

              <div className="settings-tab">
                <label htmlFor="numbersAllowed" className="text-sm">
                  Include numbers
                </label>
                {numbersAllowed ? (
                  <BsToggleOn
                    size={30}
                    color="#d181ff"
                    onClick={() => setNumbersAllowed(false)}
                  />
                ) : (
                  <BsToggleOff
                    size={30}
                    onClick={() => setNumbersAllowed(true)}
                  />
                )}
              </div>

              <div className="settings-tab">
                <label htmlFor="symbolsAllowed" className="text-sm">
                  Include symbols (special characters)
                </label>
                {symbolsAllowed ? (
                  <BsToggleOn
                    size={30}
                    color="#d181ff"
                    onClick={() => setSymbolsAllowed(false)}
                  />
                ) : (
                  <BsToggleOff
                    size={30}
                    onClick={() => setSymbolsAllowed(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
