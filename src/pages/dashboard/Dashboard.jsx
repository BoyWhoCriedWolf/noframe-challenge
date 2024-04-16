import { Box, Container } from "@mui/material";
import React from "react";
import MarketsTable from "../markets/MarketsTable";
import DashboardStates from "./DashboardStates";

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ my: 2.5 }}>
        <DashboardStates />
      </Box>

      <Box sx={{ mt: 12 }}>
        <MarketsTable
          data={[
            {
              id: "pt-wst-eth",
              name: "PT wstETH",
              description: "Lido",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$2399",
              icon: null,
            },
            {
              id: "pt-sw-eth",
              name: "PT swETH",
              description: "Swell",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$0",
              icon: null,
            },
            {
              id: "pt-wst-eth1",
              name: "PT wstETH",
              description: "Lido",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$2399",
              icon: null,
            },
          ]}
        />
      </Box>

      <Box sx={{ mt: 12 }}>
        <MarketsTable
          data={[
            {
              id: "pt-wst-eth",
              name: "PT wstETH",
              description: "Lido",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$2399",
              icon: null,
            },
            {
              id: "pt-sw-eth",
              name: "PT swETH",
              description: "Swell",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$0",
              icon: null,
            },
            {
              id: "pt-wst-eth1",
              name: "PT wstETH",
              description: "Lido",
              maturity: "2027-12-30",
              tvl: "$15.5m",
              mint_fee: "0.5%",
              borrow_rate: "3%",
              mcr: "110%",
              my_net_value: "$2399",
              icon: null,
            },
          ]}
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
