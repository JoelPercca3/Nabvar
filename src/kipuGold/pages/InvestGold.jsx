import React from "react";
import KipuGoldLayout from "../layout/kIpuGoldLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import image_01 from "../../assets/images/invest-gold/image_01.png";
import gold_kbar from "../../assets/images/gold-kbar.png";
import kau_gold from "../../assets/icons/kau-gold.png";
import kau_silver from "../../assets/icons/kau-silver.png";
import country_01 from "../../assets/icons/country-01.png";
import country_02 from "../../assets/icons/country-02.png";
import country_03 from "../../assets/icons/country-03.png";
import country_04 from "../../assets/icons/country-04.png";
import country_05 from "../../assets/icons/country-05.png";
import country_06 from "../../assets/icons/country-06.png";
import country_07 from "../../assets/icons/country-07.png";
import country_08 from "../../assets/icons/country-08.png";
import country_09 from "../../assets/icons/country-09.png";

const COUNTRIES = [
  { id: 1, icon: country_01 },
  { id: 2, icon: country_02 },
  { id: 3, icon: country_03 },
  { id: 4, icon: country_04 },
  { id: 5, icon: country_05 },
  { id: 6, icon: country_06 },
  { id: 7, icon: country_07 },
  { id: 8, icon: country_08 },
  { id: 9, icon: country_09 },
];

const InvestGold = () => {
  return (
    <KipuGoldLayout>
      <Box component="main">
        <Box
          sx={{
            height: { xs: "630px", ml: "718px" },
            bgcolor: "#0D1D2C",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: { xs: "424px", ml: "508px" },
              textAlign: "center",
              mt: "92px",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", ml: "15px" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "13.78px", ml: "15.75px" },
                fontWeight: 400,
                textTransform: "uppercase",
                color: "#00ACA9",
              }}
            >
              Physical gold. Digital ownership.
            </Typography>
            <Typography
              component="h2"
              sx={{
                width: { xs: "345px", ml: "620px" },
                fontSize: { xs: "36px", ml: "64px" },
                fontWeight: 400,
                color: "#FFF",
                lineHeight: { xs: "47px", ml: "78px" },
              }}
            >
              The new way to invest in gold & silver
            </Typography>
            <Typography
              component="p"
              sx={{
                width: { xs: "342.89px", ml: "600.48px" },
                fontSize: { xs: "15.38px", ml: "16.88px" },
                fontWeight: 500,
                lineHeight: { xs: "24px", ml: "26px" },
                color: "#9EA5AB",
              }}
            >
              Kipu is the most cost-effective way to purchase and own fully
              allocated physical gold and silver.
            </Typography>
            <Button
              variant="text"
              sx={{
                fontSize: { xs: "15.5px", ml: "15.5px" },
                p: "10px 16px",
                bgcolor: "#017DE8",
                fontWeight: 500,
                color: "#fff",
                display: "block",
                mt: "15px",
                mx: "auto",
              }}
            >
              Open account
            </Button>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ bgcolor: "#F8F8F9" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "72px", ml: "96px" },
            }}
          >
            <Box
              component="img"
              sx={{
                width: { ml: "295px" },
                height: { ml: "24px" },
                display: "block",
              }}
              src={image_01}
              alt="image_01"
            />
          </Box>
          <Box
            sx={{
              width: { xs: "358px", md: "90%", ml: "1440px" },
              height: { xs: "", ml: "618px" },
              display: "flex",
              flexDirection: { xs: "column", ml: "row" },
              // justifyContent: "center",
              bgcolor: "#F8F8F9",
              py: { xs: "40px", ml: "0" },
              alignItems: "center",
              mx: "auto",
              gap: { xs: "50px 0", ml: "0 250px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "358px", ml: "510px" },
                height: { ml: "420px" },
                textAlign: { xs: "center", ml: "start" },
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "30px", ml: "48px" },
                  fontWeight: 400,
                  lineHeight: { xs: "40px", ml: "60px" },
                  color: "#0D1D2C",
                  mb: "24px",
                }}
              >
                Buy, sell and store precious metals at the lowest costs globally
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "", ml: "17.3px" },
                  fontWeight: 500,
                  lineHeight: { xs: "", ml: "26px" },
                  color: "#0D1D2C",
                  mb: "26px",
                }}
              >
                Kipu brings you the best price on gold and silver from our
                global network of vaults across 12 countries and all major
                trading hubs. 
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "", ml: "17.3px" },
                  fontWeight: 500,
                  lineHeight: { xs: "", ml: "26px" },
                  color: "#6E7780",
                }}
              >
                We don’t charge you for storage as we’re able to use the global
                vaults of our strategic partner, Allocated Bullion Exchange (
                <Typography component="span" sx={{ color: "#017DE8" }}>
                  ABX
                </Typography>
                ) – a global exchange that’s safeguarded the precious metals of
                institutions for over 10 years.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "358px", ml: "510px" },
                height: { xs: "", ml: "458px" },
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "", ml: "18.91px" },
                  fontWeight: 500,
                  lineHeight: { xs: "", ml: "32px" },
                  color: "#0D1D2C",
                  textAlign: { xs: "center", ml: "start" },
                }}
              >
                Buy gold and silver at the lowest price across our vaults
              </Typography>
              <Box
                comoponent="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: { xs: "10px", ml: "8px" },
                  flexWrap: "wrap",
                  mt: "10px",
                  mb: "40px",
                }}
              >
                {COUNTRIES.map((country) => (
                  <Box
                    key={country.id}
                    component="img"
                    src={country.icon}
                    alt={`country-${country.id}`}
                  />
                ))}
              </Box>
              <Box sx={{ height: { ml: "362px" } }}>
                <Box
                  sx={{
                    width: { xs: "95%", sm: "358px", ml: "386px" },
                    height: "44px",
                    display: "flex",
                    mx: "auto",
                    mb: "30px",
                  }}
                >
                  <Button sx={{ color: "#fff", bgcolor: "#0D1D2C" }}>
                    USD
                  </Button>
                  <Button>EUR</Button>
                  <Button>GBP</Button>
                  <TextField
                    sx={{
                      display: "block",
                      ml: "8px",
                      "& .MuiInputBase-root": {
                        height: "44px", // Altura total del input
                      },
                      "& .MuiInputBase-input": {
                        height: "44px", // Ajusta la altura interna
                        padding: "10px 14px", // Ajusta el padding
                      },
                    }}
                    type="number"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    height: "187px",
                    width: { xs: "auto", sm: "358px", ml: "510px" },
                    border: "1px solid #E7E8EA",
                    boxShadow: 1,
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { xs: "100%", ml: "254px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0 5px",
                        borderBottom: "1px solid #E7E8EA",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{ display: "block", width: "22px", height: "24px" }}
                        src={kau_gold}
                        alt="kau-gold"
                      />
                      <Typography component="p">Gold</Typography>
                    </Box>
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { xs: "178px", ml: "254px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: "1px solid #E7E8EA",
                        fontSize: { ml: "13.13px" },
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      <Typography component="p"> Buy</Typography>
                      <Typography component="p"> $85.22</Typography>
                    </Box>
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { xs: "178px", ml: "254px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: "1px solid #E7E8EA",
                        fontSize: { ml: "13.13px" },
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      <Typography component="p">SELL</Typography>
                      <Typography component="p"> $85.32</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderRight: "1px solid #E7E8EA",
                      borderLeft: "1px solid #E7E8EA",
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { xs: "178px", ml: "254px" },
                        display: "flex",
                        justifyContent: "center",
                        borderBottom: "1px solid #E7E8EA",
                        alignItems: "center",
                        gap: "0 5px",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{ display: "block", width: "22px", height: "24px" }}
                        src={kau_silver}
                        alt="kau-gold"
                      />
                      <Typography component="p">Gold</Typography>
                    </Box>
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { xs: "178px", ml: "254px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: "1px solid #E7E8EA",
                        fontSize: { ml: "13.13px" },
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      <Typography component="p">Buy</Typography>
                      <Typography component="p">$1.01</Typography>
                    </Box>
                    <Box
                      sx={{
                        height: { xs: "61px", ml: "61px" },
                        width: { sm: "178px", ml: "254px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: { ml: "13.13px" },
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      <Typography component="p">SELL</Typography>
                      <Typography component="p">$1.01</Typography>
                    </Box>
                  </Box>
                </Box>
                <Button
                  variant="text"
                  sx={{
                    width: { ml: "173px" },
                    height: { ml: "44px" },
                    bgcolor: "#017DE8",
                    color: "#fff",
                    fontSize: { ml: "15.5px" },
                    fontWeight: 500,
                    textTransform: "none",
                    display: "block",
                    mt: "50px",
                    mx: "auto",
                  }}
                >
                  Buy gold an silver
                </Button>
              </Box>
            </Box>
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "10.03px", ml: "11.4px" },
              fontWeight: 500,
              fontStyle: "italic",
              textAlign: "center",
              height: "40px",
            }}
          >
            Prices are indicative. For live pricing see the
            <Typography
              variant="span"
              sx={{
                color: "#017DE8",
                fontWeight: 500,
                fontSize: "11.25PX",
              }}
            >
              {" "}
              Kipu Exchange
            </Typography>
          </Typography>
        </Box>
        {/*  */}
        <Box>
          <Box
            sx={{
              width: { ml: "1328px" },
              height: { ml: "834px" },
              mx: "auto",
              pt: "120px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "29.3px", ml: "46.69px" },
                fontWeight: 400,
                color: "#0D1D2C",
                textAlign: "center",
              }}
            >
              Physical bars specs
            </Typography>
            <Box sx={{ mx: "auto", width: "140px" }}>
              <Button
                sx={{ borderBottom: "1px solid #017DE8", borderRadius: "0" }}
              >
                Gold
              </Button>
              <Button
                sx={{ borderBottom: "1px solid #017DE8", borderRadius: "0" }}
              >
                Silver
              </Button>
            </Box>
            <Box
              sx={{
                width: { ml: "1280px" },
                height: { ml: "548px" },
                pt: "80px",
                mx: "auto",
                display: "flex",
                justifyContent: { xs: "center", ml: "start" },
                gap: "50px",
                pl: { xs: "0", ml: "60px" },
              }}
            >
              <Box
                sx={{
                  width: { ml: "180px" },
                  display: { xs: "none", ml: "flex" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    textTransform: "none",
                    borderLeft: "3px solid #017DE8",
                    height: { ml: "56px" },
                    pl: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: { ml: "16px" },
                    fontWeight: 400,
                  }}
                >
                  1 kilo
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    textTransform: "none",
                    borderLeft: "3px solid #017DE8",
                    height: { ml: "56px" },
                    pl: "30px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: { ml: "16px" },
                    fontWeight: 400,
                  }}
                >
                  100g
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { ml: "730px" },
                  height: { ml: "438px" },
                  display: "flex",
                  flexDirection: { xs: "column", ml: "row" },
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", ml: "block" },
                    width: { ml: "180px" },
                    height: { ml: "207px" },
                  }}
                  component="img"
                  src={gold_kbar}
                  alt="gold_kbar"
                />
                <Box
                  sx={{
                    width: { xs: "358px", ml: "510px" },
                    maxWidth: { ml: "512px" },
                    height: { xs: "472px", ml: "438px" },
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "24px", ml: "36px" },
                      fontWeight: { ml: 400 },
                      color: "#0D1D2C",
                      textAlign: { xs: "center", ml: "start" },
                    }}
                  >
                    1 Kilo bar
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: "15.38px", ml: "17.3px" },
                      fontWeight: { ml: 500 },
                      lineHeight: { ml: "26px" },
                      textAlign: { xs: "center", ml: "start" },
                      color: "#868E95",
                      mt: { xs: "20px", ml: "0" },
                    }}
                  >
                    1 Kilogram (32.148 fine troy ounces) gold cast bar, of
                    minimum fineness 999.9, and bearing a serial number and
                    identifying stamp of an approved refiner.
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: { xs: "50px", ml: "20px" },
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Contract size:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        1 Kilo (32.148 Fine Troy Ounces)
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Fineness:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        Min. 999.9
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "61px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Price Quotation Currency:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        USD, EUR, GBP, AUD, CAD, SGD, CHF, AED
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Price Quotation Unit:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        1 troy ounce
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Tick Size:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        $0.01 USD, €0.01, £0.01
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Minimum Withdrawal Quantity:
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        1 bar (1 lot)
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "39px",
                        borderBottom: "1px solid #CFD2D5",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{ fontSize: { ml: "13.23px" } }}
                      >
                        Minimum Deposit Quantity
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { ml: "13.56px" },
                          color: "#868E95",
                          fontWeight: 500,
                        }}
                      >
                        1 bar (1 lot)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              component="p"
              sx={{
                width: { xs: "358px", ml: "1280px" },
                mt: { xs: "40px", ml: "0" },
                fontSize: "11.44px",
                color: "#6E7780",
                fontWeight: 500,
                textAlign: "center",
                mx: "auto",
              }}
            >
              Bar manufacturers include: Argor-Heraeus, Asahi, Metalor, Royal
              Canadian Mint, Suisse, Swiss, Valcambi. For full bar list
              <Typography
                component="span"
                sx={{ color: "#017DE8", fontSize: "11.25px" }}
              >
               {""} see latest audit
              </Typography>
            </Typography>
          </Box>
        </Box>
        {/*  */}
      </Box>
    </KipuGoldLayout>
  );
};

export default InvestGold;
