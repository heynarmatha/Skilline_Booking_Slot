import React, { useState } from "react";
import { TextField, Button, Grid, Container } from "@mui/material";
import { TokenGeneratorFormProps } from "../../utils/types/generateToken";

const TokenGeneratorForm: React.FC<TokenGeneratorFormProps> = ({
  onGenerate,
  onClear,
}) => {
  const [formData, setFormData] = useState({
    tokens: null,
    prefix: "",
    perRow: null,
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleGenerate = () => {
    onGenerate(formData);
  };

  const handleClear = () => {
    onClear();
    setFormData({
      tokens: null,
      prefix: "",
      perRow: null,
    });
  };

  const renderTextField = (
    label: string,
    field: keyof typeof formData,
    type: "text" | "number" = "text"
  ) => (
    <Grid item xs={12} sx={{ paddingBottom: "8px" }}>
      <TextField
        fullWidth
        label={label}
        type={type}
        value={formData[field] ?? ""}
        onChange={(e) => handleChange(field, e.target.value)}
      />
    </Grid>
  );

  return (
    <Container>
      <Grid container spacing={2}>
        {renderTextField("Total No of Candidates ", "tokens", "number")}
        {renderTextField("Exam Prefix ID", "prefix")}
        {renderTextField("Seat Per Row", "perRow", "number")}
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: "#F48C06",
              fontSize: "13px",
              color: "white",
              padding: "8px 20px",
            }}
            onClick={handleGenerate}
          >
            Book
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              fontSize: "13px",
              padding: "8px 20px",
            }}
            onClick={handleClear}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TokenGeneratorForm;
