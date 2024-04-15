import React from "react";

const Table = ({ data = [], columns = [] }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => {
            return <th key={columnIndex}>{column?.label ?? ""}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, itemIndex) => {
          return (
            <tr key={itemIndex}>
              {columns.map((column, columnIndex) => {
                const renderValue = item?.[column?.name ?? ""] ?? "";
                return <td key={columnIndex}>{renderValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
