type Token = {
  label: string;
  color?: string;
};

type TokenDisplayProps = {
  tokens: Token[];
  tokensPerRow: number;
};

type generateToken = {
  tokens: number | null;
  prefix: string;
  perRow: number | null;
};

type locationProps = {
  branch: string;
};

type TokenGeneratorFormProps = {
  onGenerate: (formData: generateToken) => void;
  onClear: () => void;
};

export type {
  Token,
  TokenDisplayProps,
  generateToken,
  TokenGeneratorFormProps,
  locationProps,
};
