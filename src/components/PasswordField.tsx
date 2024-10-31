import { FaRegCopy } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';

type PasswordFieldProps = {
  password: string;
  onRefresh: () => void;
  onCopy: () => void;
  passwordRef: React.LegacyRef<HTMLInputElement> | undefined;
};

export const PasswordField = ({
  password,
  onRefresh,
  onCopy,
  passwordRef,
}: PasswordFieldProps) => (
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
        ref={passwordRef}
        readOnly
      />
      <div className="flex items-center gap-3">
        <FaRegCopy
          aria-label="Copy password to clipboard"
          onClick={onCopy}
          className="text-secondary cursor-pointer"
          title="Copy"
          size={20}
        />
        <LuRefreshCcw
          aria-label="Generate new password"
          onClick={onRefresh}
          className="text-secondary cursor-pointer"
          title="Generate new!"
          size={20}
        />
      </div>
    </div>
  </div>
);
