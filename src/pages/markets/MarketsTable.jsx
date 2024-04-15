import React from "react";
import Table from "../../components/table";

const MarketsTable = ({ data = [] }) => {
  return (
    <Table
      data={data}
      columns={[
        { name: "name", label: "Name" },
        { name: "maturity", label: "Maturity" },
        { name: "tvl", label: "TVL" },
        { name: "mint_fee", label: "Mint Fee" },
        { name: "borrow_rate", label: "Borrow Rate" },
        { name: "mcr", label: "MCR" },
        { name: "my_net_value", label: "My Net Value" },
      ]}
    />
  );
};

export default MarketsTable;
