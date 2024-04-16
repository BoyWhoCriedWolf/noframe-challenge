import { WarningOutlined } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import GreenShadowContainer from "../../../components/containers/green-shadow-container";
import PageHeading from "../../../components/typography/page-heading";
import EarnDetailCard from "./EarnDetailCard";
import EarnSummaryWidget from "./EarnSummaryWidget";

const EarnDetail = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <PageHeading>Stability Pool fixUSD</PageHeading>
      <Box
        sx={{
          my: 2,
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          columnGap: 2.5,
        }}
      >
        <Box flexGrow={1}>
          <EarnSummaryWidget label="APR" value="16.64%" variant="gradient" />
        </Box>
        <Box flexGrow={1}>
          <EarnSummaryWidget label="Pool TVL" value="$33.03m" />
        </Box>
      </Box>

      <Typography fontWeight={500} fontSize={16} lineHeight={"24px"}>
        <WarningOutlined /> Deposit fixUSD to earn by liquidations and rewards.{" "}
        <Link>learn more</Link>
      </Typography>

      <Box sx={{ py: 2.75 }}>
        <PageHeading>Manage fixUSD Stability Pool</PageHeading>
      </Box>
      <GreenShadowContainer>
        <EarnDetailCard />
      </GreenShadowContainer>
    </Container>
  );
};

export default EarnDetail;
