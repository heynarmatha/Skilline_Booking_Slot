import React from "react";
import { Box } from "@mui/material";
import { TokenDisplayProps } from "../../utils/types/generateToken";

const TokenDisplay: React.FC<TokenDisplayProps> = ({
  tokens,
  tokensPerRow,
}) => {
  function chunkArray(array: any[], perRow: number): any[][] {
    const result: any[][] = [];
    let arrayCopy = [...array];
    console.log("arrayCopy.length > 0", arrayCopy.length > 0);

    while (arrayCopy.length > 0) {
      console.log("result", result);
      console.log("arrayCopy", arrayCopy);

      result.push(arrayCopy.splice(0, perRow));
      console.log("result 1", result[0]);
      console.log("arrayCopy 1", arrayCopy[0]);
    }
    console.log("result 2", result);
    console.log("arrayCopy 2", arrayCopy[0]);

    return result;
  }

  const rows = chunkArray(tokens, tokensPerRow);

  return (
    <Box
      sx={{
        margin: "30px 0",
        maxHeight: "250px",
        overflowY: "auto",
      }}
    >
      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            marginBottom: "10px",
            gap: "10px",
          }}
        >
          {row.map((token, index) => (
            <Box
              key={index}
              sx={{
                flex: `0 0 ${100 / tokensPerRow}%`,
                border: token.label ? "2px solid #F48C06" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                padding: "10px 15px",
                minWidth: "100px",
                boxSizing: "border-box",
                backgroundColor: token.label ? "white" : "transparent",
              }}
            >
              {token.label}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default TokenDisplay;
