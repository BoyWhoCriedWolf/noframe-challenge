import { Box, Container } from "@mui/material";
import React from "react";
import PageHeading from "../../components/typography/page-heading";
import PageContent from "../../layout/page-content";
import RedeemCard from "./RedeemCard";
import RedeemTable from "./RedeemTable";

const Redeem = () => {
  return (
    <Container maxWidth="md">
      <PageHeading>Redeem</PageHeading>
      <PageContent>
        <RedeemCard />
        <Box sx={{ mt: 5 }}>
          <RedeemTable />
        </Box>
      </PageContent>
    </Container>
  );
};

export default Redeem;
