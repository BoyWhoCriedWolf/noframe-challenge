import { Box } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_GREEN } from "../../constants/colors";

const StepSlider = ({ value = 0, max = 3, step = 1 }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 10,
        py: 0.5,
        cursor: "pointer",
      }}
    >
      {/* progress bar background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 2,
          background: "white",
        }}
      ></Box>

      {/* progress bar */}
      <Box
        sx={{
          position: "absolute",
          top: 4,
          left: 0,
          height: 2,
          width: `${(value / (max - step)) * 100}%`,
          background: COLOR_PRIMARY_GREEN,
        }}
      ></Box>

      {/* step points */}
      {Array.from({ length: Math.floor(max / step) }).map((item, itemIndex) => {
        const stepValue = itemIndex * step;
        return (
          <Box
            key={itemIndex}
            sx={{
              position: "absolute",
              width: 10,
              height: 10,
              top: 0,
              left: `${(stepValue / (max - step)) * 100}%`,
              background: "white",
              borderRadius: "50%",
            }}
          ></Box>
        );
      })}

      {/* indicator */}
      {Array.from({ length: Math.floor(value / step) + 1 }).map(
        (item, itemIndex) => {
          const stepValue = itemIndex * step;
          return (
            <Box
              key={itemIndex}
              sx={{
                position: "absolute",
                width: 10,
                height: 10,
                top: 0,
                left: `${(stepValue / (max - step)) * 100}%`,
                background: COLOR_PRIMARY_GREEN,
                borderRadius: "50%",
              }}
            ></Box>
          );
        }
      )}
    </Box>
  );
};

export default StepSlider;
