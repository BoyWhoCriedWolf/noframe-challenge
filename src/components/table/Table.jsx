import { Typography, useTheme } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_GRADIENT } from "../../constants/colors";
import "./table.css";

const Table = ({ data = [], columns = [] }) => {
  const th = useTheme();
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr
          style={{
            background: COLOR_PRIMARY_GRADIENT,
            border: `solid 1px ${th.palette.common.black}`,
          }}
        >
          {columns.map((column, columnIndex) => {
            return (
              <th
                key={columnIndex}
                align="center"
                style={{ paddingTop: 8, paddingBottom: 8 }}
              >
                <Typography fontWeight={500} fontSize={14} lineHeight={"20px"}>
                  {column?.label ?? ""}
                </Typography>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => {
          return (
            <React.Fragment key={itemIndex}>
              <tr>
                <td colSpan={columns.length} style={{ height: 8 }}></td>
              </tr>
              <tr align="center" className="table-row">
                {columns.map((column, columnIndex) => {
                  const renderValue = item?.[column?.name ?? ""] ?? "";
                  return (
                    <td
                      key={columnIndex}
                      style={{ paddingTop: 8, paddingBottom: 8 }}
                    >
                      {renderValue}
                    </td>
                  );
                })}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
