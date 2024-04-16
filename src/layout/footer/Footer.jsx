import { Telegram, Twitter } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import React from "react";
import imgUnion from "../../assets/img/backgrounds/Union.svg";
import imgMedium from "../../assets/img/icons/medium.svg";
import Logo from "../../components/logo";
import SocialButton from "../../components/social-button/SocialButton";

const Footer = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <img
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          pointerEvents: "none",
        }}
        src={imgUnion}
        alt="union"
      />
      <Box
        sx={{
          position: "relative",
          borderTop: (th) => `solid ${th.palette.common.black} 1px`,
          background: (th) => th.palette.common.white,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              py: 1,
            }}
          >
            <Box sx={{ mr: 3 }}>
              <Logo variant="union" />
            </Box>

            {[
              { label: "Twitter", icon: <Twitter /> },
              { label: "Medium", icon: <img src={imgMedium} alt="Medium" /> },
              { label: "Telegram", icon: <Telegram /> },
            ].map((item, itemIndex) => {
              return (
                <Box key={itemIndex} sx={{ mr: 1 }}>
                  <SocialButton label={item?.label ?? ""} icon={item?.icon} />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
