import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TokenGeneratorForm from "./form";
import TokenDisplay from "./tokenDisplay";
import {
  generateToken,
  locationProps,
  Token,
} from "../../utils/types/generateToken";

const GenerateToken: React.FC<locationProps> = ({ branch }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [perRow, setPerRow] = useState<number>(1);
  const handleGenerate = ({ tokens, prefix, perRow }: generateToken) => {
    const tokensArray: Token[] = Array.from(
      { length: tokens ?? 0 },
      (_, i) => ({
        label: `${prefix}-${i + 1}`,
        color: "#F48C06",
      })
    );
    setPerRow(perRow || 1);
    setTokens([...tokensArray]);
  };

  const handleClear = () => {
    setTokens([]);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        align="left"
        gutterBottom
        sx={{
          fontSize: "20px",
          color: "grey",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {branch} Exam Slot Booking
      </Typography>
      <TokenGeneratorForm onGenerate={handleGenerate} onClear={handleClear} />
      <TokenDisplay tokens={tokens} tokensPerRow={perRow} />
    </Box>
  );
};

export default GenerateToken;
