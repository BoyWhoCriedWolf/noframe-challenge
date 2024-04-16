import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/search-box/SearchBox";
import PageHeading from "../../components/typography/page-heading/PageHeading";
import PageSubtitle from "../../components/typography/page-subtitle";
import PageContent from "../../layout/page-content";
import MarketsTable from "./MarketsTable";
import MarketFilter from "./market-filter";

const Markets = () => {
  const navigate = useNavigate();

  const [filterForm, setFilterForm] = useState({
    search: "",
    filter: "Active",
  });

  const handleClickRow = (row, rowIndex) => {
    navigate(`/market/${row?.id ?? "#"}`);
  };

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
            <SearchBox />
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
          ]}
          onClickRow={handleClickRow}
        />
      </PageContent>
    </Container>
  );
};

export default Markets;
