import { Container, Grid } from "@mui/material";
import React from "react";
import PageContent from "../../layout/page-content";
import SearchBox from "../../components/search-box/SearchBox";
import EarnsTable from "./EarnsTable";
import { useNavigate } from "react-router-dom";

const Earn = () => {
  const navigate = useNavigate();

  const handleClickRow = (row, rowIndex) => {
    navigate(`/earn/${row?.id ?? ""}`);
  };

  return (
    <Container>
      <PageContent>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ py: 2 }}
        >
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <SearchBox />
          </Grid>
        </Grid>

        <EarnsTable
          data={[
            {
              id: "stability-pool-fix-usd",
              name: "Stability Pool fixUSD",
              description: "No Frame",
              tvl: "$15.5m",
              unboosted_apr: "33%",
              boosted_apr: "43%",
              my_deposit: "$230",
              icon: null,
            },
            {
              id: "lp-fix-usd-usdc",
              name: "LP fixUSD/USDC",
              description: "Curve",
              tvl: "$15.5m",
              unboosted_apr: "33%",
              boosted_apr: "43%",
              my_deposit: "$230",
              icon: null,
            },
          ]}
          onClickRow={handleClickRow}
        />
      </PageContent>
    </Container>
  );
};

export default Earn;
