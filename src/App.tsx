import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState<string>("");
  const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [copyText, setCopyText] = useState<string>("Copy");

  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbersAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= passwordLength; i++) {
      const index = Math.floor(Math.random() * str.length);

      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [passwordLength, numbersAllowed, symbolsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, numbersAllowed, symbolsAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

    setCopyText("Copied!");

    setTimeout(() => {
      setCopyText("Copy");
    }, 4000);
  };

  return (
    <div className="w-full h-screen bg-slate-400 flex justify-center items-center px-2">
      <div className="w-full md:max-w-xl mx-auto bg-gray-800 shadow-md rounded-lg px-4 py-3">
        <h1 className="text-white text-center text-2xl py-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            aria-label="Copy password to clipboard"
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            {copyText}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 text-lg text-white mb-3">
          <div className="flex items-center gap-1">
            <input
              type="range"
              name="passwordLength"
              id="passwordLength"
              min={6}
              max={16}
              value={passwordLength}
              className="cursor-pointer"
              onChange={(event) =>
                setPasswordLength(parseInt(event.target.value))
              }
            />
            <label htmlFor="passwordLength"> {passwordLength}</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="numbersAllowed"
              name="numbersAllowed"
              defaultChecked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="numbersAllowed">Numbers</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="symbolsAllowed"
              name="symbolsAllowed"
              defaultChecked={symbolsAllowed}
              onChange={() => setSymbolsAllowed((prev) => !prev)}
            />
            <label htmlFor="symbolsAllowed">Special characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
