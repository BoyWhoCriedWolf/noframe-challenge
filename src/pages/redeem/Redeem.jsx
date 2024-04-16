import { Container } from "@mui/material";
import React from "react";
import PageHeading from "../../components/typography/page-heading";
import PageContent from "../../layout/page-content";
import RedeemCard from "./RedeemCard";

const Redeem = () => {
  return (
    <Container maxWidth="md">
      <PageHeading>Redeem</PageHeading>
      <PageContent>
        <RedeemCard />
      </PageContent>
    </Container>
  );
};

export default Redeem;
