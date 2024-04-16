import { Box, Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/typography/page-heading";
import PageContent from "../../../layout/page-content";
import MintCard from "../mint-card";
import DebitInfoCard from "./DebitInfoCard";
import MarketInfoCard from "./MarketInfoCard";

const MarketDetail = () => {
  const { market_id: marketId } = useParams();

  return (
    <Container maxWidth={"sm"}>
      <PageHeading>Mint fixUSD</PageHeading>
      <PageContent>
        <Box sx={{ width: "100%" }}>
          <MintCard marketId={marketId} />
        </Box>
        <Box sx={{ mt: 7.5, display: "flex", columnGap: 2.5 }}>
          <Box flexGrow={1}>
            <MarketInfoCard marketId={marketId} />
          </Box>
          <Box flexGrow={1}>
            <DebitInfoCard />
          </Box>
        </Box>
      </PageContent>
    </Container>
  );
};

export default MarketDetail;
