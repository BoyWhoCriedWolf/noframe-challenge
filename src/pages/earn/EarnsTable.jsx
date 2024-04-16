import React from "react";
import Table from "../../components/table";

const EarnsTable = ({ data = [], onClickRow = () => {} }) => {
  return (
    <Table
      data={data}
      onClickRow={onClickRow}
      columns={[
        { name: "name", label: "Name" },
        { name: "tvl", label: "TVL" },
        { name: "unboosted_apr", label: "Unboosted APR" },
        { name: "boosted_apr", label: "Boosted APR" },
        { name: "my_deposit", label: "My deposit" },
      ]}
    />
  );
};

export default EarnsTable;
