import { Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import PageHeading from "../../components/typography/page-heading/PageHeading";
import PageSubtitle from "../../components/typography/page-subtitle";
import PageContent from "../../layout/page-content";
import MarketFilter from "./market-filter";
import { Search } from "@mui/icons-material";

const Markets = () => {
  const [filterForm, setFilterForm] = useState({
    search: "",
    filter: "Active",
  });

  console.log(filterForm);

  return (
    <Container>
      <PageHeading>FixUSD</PageHeading>
      <PageSubtitle>
        Market for Pendle{"’"}s PT assets based on ETH liquid staking
        derivatives
      </PageSubtitle>
      <PageContent>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ py: 2 }}
        >
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search ..."
              InputProps={{ startAdornment: <Search /> }}
            />
          </Grid>
          <Grid item>
            <MarketFilter
              value={filterForm?.filter ?? "Active"}
              onChange={(v) =>
                setFilterForm((s = {}) => ({ ...(s ?? {}), filter: v }))
              }
            />
          </Grid>
        </Grid>
      </PageContent>
    </Container>
  );
};

export default Markets;
