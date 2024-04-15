import { Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/typography/page-heading/PageHeading";
import PageContent from "../../../layout/page-content";
import MintCard from "../mint-card";

const MarketDetail = () => {
  const { market_id: marketId } = useParams();

  return (
    <Container maxWidth={"sm"}>
      <PageHeading>Mint fixUSD</PageHeading>
      <PageContent>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <MintCard marketId={marketId} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}></Grid>
        </Grid>
      </PageContent>
    </Container>
  );
};

export default MarketDetail;
