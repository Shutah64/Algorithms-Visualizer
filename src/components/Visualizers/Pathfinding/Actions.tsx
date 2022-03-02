import React from "react";
import { Button } from "@mui/material";

interface PropsType {
  isChanged: boolean;
  isSearching: boolean;
  onReset: () => void;
  onStart: () => void;
  onDrawPattern: () => void;
}
export default function Actions(props: PropsType) {
  const { onReset, onStart, onDrawPattern, isChanged, isSearching } = props;

  return (
    <div style={{ minWidth: "max-content" }}>
      <Button
        onClick={onStart}
        variant="contained"
        color="success"
        sx={{ mb: "5px", marginRight: "10px" }}
        disabled={isSearching}
      >
        Start
      </Button>
      <Button
        onClick={onDrawPattern}
        variant="contained"
        className="themeButton"
        sx={{ mb: "5px" }}
        disabled={isSearching}
      >
        Draw Pattern
      </Button>
      <Button
        onClick={onReset}
        color="error"
        variant="contained"
        sx={{ "&>div": { padding: "10px" }, mb: "5px" }}
        id="reset"
        disabled={!isChanged}
      >
        Reset
      </Button>
    </div>
  );
}
