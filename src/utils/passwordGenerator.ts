export type PasswordConfig = {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export const generatePassword = (config: PasswordConfig): string => {
  let charset = 'abcdefghijklmnopqrstuvwxyz';

  if (config.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (config.includeNumbers) charset += '0123456789';
  if (config.includeSymbols) charset += '!@#$%^&*()_+';

  return Array.from({ length: config.length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length))
  ).join('');
};
