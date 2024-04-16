import { WalletOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import DepositInput from "../../../components/deposit-input";
import { COLOR_PRIMARY_GRAY } from "../../../constants/colors";
import { MenuButton } from "../../../layout/menu/MenuButton";

const EarnDetailCard = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ width: "70%", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 2.5,
          }}
        >
          <MenuButton isActive={true} fullWidth outlined>
            Deposit
          </MenuButton>
          <MenuButton fullWidth outlined>
            Withdraw
          </MenuButton>
        </Box>

        <DepositInput />
      </Box>

      <Box sx={{ width: "50%", mx: "auto", my: 2.5 }}>
        <Box
          sx={{
            width: "100%",
            border: "solid 1px",
            background: COLOR_PRIMARY_GRAY,
            py: 1.5,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          <WalletOutlined sx={{ mr: 1 }} />
          <Typography fontWeight={400} fontSize={14} lineHeight={"21px"}>
            Connect wallet
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mx: "auto", py: 2.5, borderTop: "dashed 1px" }}>
        <Typography
          fontWeight={400}
          fontSize={14}
          lineHeight={"21px"}
          align="center"
        >
          More information
        </Typography>

        <table
          style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        >
          <tbody>
            <tr>
              <td style={{ padding: 4, opacity: 0.6 }}>
                <Typography fontWeight={400} fontSize={14} lineHeight={"21px"}>
                  Stability Pool:
                </Typography>
              </td>
              <td style={{ padding: 4 }}>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={"21px"}
                  color="secondary"
                >
                  0xed8B26D99834540C5013701bB3715faFD39993Ba 
                </Typography>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 4, opacity: 0.6 }}>
                <Typography fontWeight={400} fontSize={14} lineHeight={"21px"}>
                  Prisma mkUSD:
                </Typography>
              </td>
              <td style={{ padding: 4 }}>
                <Typography
                  fontWeight={400}
                  fontSize={14}
                  lineHeight={"21px"}
                  color="secondary"
                >
                  0xed8B26D99834540C5013701bB3715faFD39993Ba 
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default EarnDetailCard;
