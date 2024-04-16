import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

const SearchBox = () => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search ..."
      InputProps={{ startAdornment: <Search /> }}
    />
  );
};

export default SearchBox;
