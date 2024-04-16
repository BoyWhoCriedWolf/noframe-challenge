import React from "react";
import Table from "../../components/table";

const RedeemTable = () => {
  return (
    <Table
      columns={[
        { name: "owner", label: "Owner" },
        { name: "cr", label: "CR" },
        { name: "debt", label: "Debt" },
        { name: "new_debt", label: "New Debt" },
      ]}
      data={[
        {
          owner: "0xASD...CFb2",
          cr: "206.1%",
          debt: "2.02k",
          new_debt: "2.02k",
        },
        {
          owner: "0xASD...CFb2",
          cr: "206.1%",
          debt: "2.02k",
          new_debt: "2.02k",
        },
        {
          owner: "0xASD...CFb2",
          cr: "206.1%",
          debt: "2.02k",
          new_debt: "2.02k",
        },
        {
          owner: "0xASD...CFb2",
          cr: "206.1%",
          debt: "2.02k",
          new_debt: "2.02k",
        },
        {
          owner: "0xASD...CFb2",
          cr: "206.1%",
          debt: "2.02k",
          new_debt: "2.02k",
        },
      ]}
    />
  );
};

export default RedeemTable;
