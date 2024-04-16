import {
  AttachMoney,
  EmojiEventsOutlined,
  ShowChart,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import StateWidget from "../../components/state-widget";

const DashboardStates = () => {
  return (
    <Grid container alignItems={"stretch"} spacing={1}>
      {[
        {
          icon: <AttachMoney />,
          label: "My Current Balance",
          value: "$0.01",
        },
        {
          icon: <ShowChart />,
          label: "My Net P&L",
          value: "$489.49",
          additionalValue: "+2.68%",
        },
        {
          icon: <AttachMoney />,
          label: "My Total Capital",
          value: "$17,480.01",
        },
        {
          icon: <EmojiEventsOutlined />,
          label: "My Claimable Yield & Reward",
          value: "$17,480.01",
          showClaim: true,
        },
      ].map((item, itemIndex) => {
        return (
          <Grid
            key={itemIndex}
            item
            lg={3}
            ms={3}
            sm={3}
            xs={6}
            sx={{ height: "100%" }}
          >
            <StateWidget
              label={item?.label}
              icon={item?.icon}
              value={item?.value}
              additionalValue={item?.additionalValue}
              showClaim={item?.showClaim}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DashboardStates;
