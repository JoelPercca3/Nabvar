import {
  Box,
  Button,
  Divider,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KipuGoldLayout from "../layout/kIpuGoldLayout";
import utility_icon from "../../assets/icons/utility-yields-icon.png";
import institutional from "../../assets/icons/institutional-icon.png";
import fully from "../../assets/icons/fully-icon.png";
import redemption from "../../assets/icons/redemption-icon.png";
import audit from "../../assets/icons/audit.png";
import value from "../../assets/icons/value-icon.png";
import arrow_icon from "../../assets/icons/arrow-icon.png";
import credit_card from "../../assets/images/credit-card.png";
import credit_card_responsive from "../../assets/images/credit_card_responsive.png";
import gold_specification from "../../assets/images/gold-bar-specification.png";
import governments from "../../assets/images/governments.png";
//
import Slider from "react-slick";
import { useRef } from "react";

const grid_items_column_general = [
  {
    id: 1,
    title: "Utility & yields",
    img: utility_icon,
    description: `  Use KAU as money with the Kipu Virtual Card, anywhere
                      MasterCard is accepted. Earn a return
                      on your KAU spending, holding or trading – with
                      yields paid monthly in physical gold.`,
  },
  {
    id: 2,
    title: "Institutional heritage",
    img: institutional,
    description: `All gold bullion is managed by our strategic partner,
    Allocated Bullion Exchange (ABX) - a leading global
    institutional exchange with over 10 years’ experience in
    the precious metals industry.`,
  },
  {
    id: 3,
    title: "Fully allocated ownership",
    img: fully,
    description: `All gold bullion underpinning KAU is fully allocated,
    held in your name, at all times. If you hold KAU, you
    own the underlying physical gold held in
    independent, fully insured vaults, across the globe.`,
  },
  {
    id: 4,
    title: "Redemption",
    img: redemption,
    description: `All underlying gold bars meet LBMA-approved good
delivery standards and can be redeemed at any time.
Take delivery of as little as 100g of your fine gold from
localised redemption hubs across 6 continents.`,
  },
  {
    id: 5,
    title: "Audited",
    img: audit,
    description: `All of the investment-grade gold behind KAU
undergoes independent biannual audits by a leading
commodity audit specialist, confirming the 1:1
allocation, stated quantity and quality (9999 fineness)
of all gold bars.`,
  },
  {
    id: 6,
    title: "Value",
    img: value,
    description: `Through ABX’s global vaulting network, Kipu offers
0% storage fees and the lowest prices – and tightest
spreads – aggregated across all major trading hubs
globally.`,
  },
];

const grid_items_column_01 = [
  {
    id: 1,
    title: "Utility & yields",
    img: utility_icon,
    description: `  Use KAU as money with the Kipu Virtual Card, anywhere
                      MasterCard is accepted. Earn a return
                      on your KAU spending, holding or trading – with
                      yields paid monthly in physical gold.`,
  },
  {
    id: 2,
    title: "Institutional heritage",
    img: institutional,
    description: `All gold bullion is managed by our strategic partner,
    Allocated Bullion Exchange (ABX) - a leading global
    institutional exchange with over 10 years’ experience in
    the precious metals industry.`,
  },
  {
    id: 3,
    title: "Fully allocated ownership",
    img: fully,
    description: `All gold bullion underpinning KAU is fully allocated,
    held in your name, at all times. If you hold KAU, you
    own the underlying physical gold held in
    independent, fully insured vaults, across the globe.`,
  },
];

const grid_items_column_02 = [
  {
    id: 1,
    title: "Redemption",
    img: redemption,
    description: `All underlying gold bars meet LBMA-approved good
delivery standards and can be redeemed at any time.
Take delivery of as little as 100g of your fine gold from
localised redemption hubs across 6 continents.`,
  },
  {
    id: 2,
    title: "Audited",
    img: audit,
    description: `All of the investment-grade gold behind KAU
undergoes independent biannual audits by a leading
commodity audit specialist, confirming the 1:1
allocation, stated quantity and quality (9999 fineness)
of all gold bars.`,
  },
  {
    id: 3,
    title: "Value",
    img: value,
    description: `Through ABX’s global vaulting network, Kipu offers
0% storage fees and the lowest prices – and tightest
spreads – aggregated across all major trading hubs
globally.`,
  },
];

const MainPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const imageSrc = isSmallScreen
    ? credit_card_responsive
    : isMediumScreen
    ? credit_card
    : credit_card;

  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    event.currentTarget.blur();
  };
  const handleBeforeChange = (current, next) => {
    const activeSlide = sliderRef.current?.querySelector(
      "[aria-hidden='false']"
    );
    if (activeSlide) {
      const focusedElement = activeSlide.querySelector(":focus");
      if (focusedElement) focusedElement.blur();
    }
  };

  const settings = {
    dots: true, // Muestra los puntos de navegación.
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    arrows: false, // Oculta las flechas.
    beforeChange: handleBeforeChange,
  };

  return (
    <KipuGoldLayout>
      <Box>
        {/*  */}
        <Box
          sx={{
            bgcolor: "white",
            py: "80px",
            mb: "150px",
          }}
        >
          <Box
            sx={{
              width: { xs: "95%", xl: "1384px" },
              mx: "auto",
            }}
          >
            <Box component="div">
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "30px", lg: "48px" },
                  fontWeight: 400,
                }}
              >
                We are not a bank. We’re better.
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "15px", lg: "17.3px" },
                  marginTop: "24px",
                  color: "#6E7780",
                }}
              >
                An independent monetary system for people who choose physical
                gold and silver, not paper money.
              </Typography>
            </Box>

            <Grid2
              container
              sx={{ mt: "50px", display: { xs: "none", lg: "block" } }}
            >
              {/* Primera columna */}
              <Grid2 size={12} sx={{ mb: "40px" }}>
                <Grid2 container spacing={10}>
                  {grid_items_column_01.map((item) => (
                    <Grid2
                      size={4}
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".8rem",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          width: "64px",
                          height: "64px",
                          mx: "auto",
                        }}
                        src={item.img}
                      />
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          fontSize: "23px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                        {/* Utility & yields */}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 500,
                          fontSize: "15.38px",
                          textAlign: "center",
                          color: "#6E7780",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
              {/* Segunda columna */}
              <Grid2 size={12}>
                <Grid2 container spacing={10}>
                  {grid_items_column_02.map((item) => (
                    <Grid2
                      size={4}
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".8rem",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          width: "64px",
                          height: "64px",
                          mx: "auto",
                        }}
                        src={item.img}
                      />
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          fontSize: "23px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                        {/* Utility & yields */}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 500,
                          fontSize: "15.38px",
                          textAlign: "center",
                          color: "#6E7780",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
            </Grid2>

            <Box
              sx={{
                display: {
                  xs: "block",
                  lg: "none",
                },
                width: { xs: "90%", sm: "400px", md: "500px" },
                m: "20px auto 0",
              }}
            >
              <Slider {...settings} className="alto">
                {grid_items_column_general.map((item) => (
                  <Grid2
                    size={4}
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6rem",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        width: "64px",
                        height: "64px",
                        mx: "auto",
                      }}
                      src={item.img}
                    />
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        textAlign: "center",
                        mb: "15px",
                      }}
                    >
                      {item.title}
                      {/* Utility & yields */}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontWeight: 500,
                        fontSize: "15px",
                        textAlign: "center",
                        color: "#6E7780",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid2>
                ))}
              </Slider>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "0 .5rem",
                mt: "50px",
              }}
            >
              <Button
                variant="contained"
                className="grantiend"
                sx={{ color: "#fff", py: 1.5 }}
              >
                Sign Up
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#F3F4F4",
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "14.75px",
                }}
              >
                Trust and Security
              </Button>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{}}>
          <Box
            sx={{
              width: { lg: "90%", xl: "1384px" },
              height: { xs: "auto", lg: "700px" },
              mx: "auto",
            }}
          >
            <Grid2
              container
              sx={{ height: "100%", display: "flex", gap: "4rem 0" }}
            >
              <Grid2
                size={{ xs: 12, lg: 6 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "30px", lg: "48px" },
                    fontWeight: 400,
                    color: "#0D1D2C",
                    width: { xs: "90%", md: "400px" },
                    textAlign: { xs: "center", md: "start" },
                    lineHeight: { md: "35px", lg: "60px" },
                  }}
                >
                  Earn gold every time you spend
                </Typography>
                <Typography
                  component="p"
                  color="initial"
                  sx={{
                    fontSize: { xs: "15px", md: "17px" },
                    fontWeight: 500,
                    color: "#6E7780",
                    width: { xs: "90%", md: "400px" },
                    textAlign: { xs: "center", md: "start" },
                    lineHeight: "26px",
                  }}
                >
                  Get access to our cashback plan for 6 months free from launch.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "0 .5rem",
                  }}
                >
                  <Button
                    variant="contained"
                    className="grantiend"
                    sx={{ py: 1.5 }}
                  >
                    Find out how
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#F3F4F4",
                      color: "#000",
                      fontWeight: 500,
                      fontSize: "14.75px",
                      ml: "4px",
                    }}
                  >
                    T&Cs
                  </Button>
                </Box>
              </Grid2>
              <Grid2
                size={{ xs: 12, lg: 6 }}
                sx={{ height: "100%", placeItems: "center" }}
              >
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    objectFit: "fill",
                    width: { xs: "358px", md: "500px", lg: "100%" },
                    height: { xs: "407px", md: "500px", lg: "100%" },
                  }}
                  src={imageSrc}
                />
              </Grid2>
            </Grid2>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{}}>
          <Box
            sx={{
              width: { xs: "90%", xl: "1384px" },
              mx: "auto",
              py: "80px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "30px", lg: "48px" },
                textAlign: "center",
              }}
            >
              Gold bar specifications
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "0  100px",
                mt: "50px",
                justifyContent: "center",
              }}
            >
              <Box sx={{ pl: "150px", display: { xs: "none", lg: "block" } }}>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    fontSize: "18px",
                    borderLeft: "2px solid #017DE8",
                    py: "15px",
                    pl: "15px",
                  }}
                >
                  100 gram bar
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    fontSize: "18px",
                    borderLeft: "2px solid #017DE8",
                    py: "15px",
                    pl: "15px",
                  }}
                >
                  1 kilogram bar
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" },
                  alignItems: { xs: "center", lg: "start" },
                  gap: "4rem 0",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    display: { xs: "none", lg: "block" },
                    width: "180px",
                    height: "208px",
                    m: "0 auto",
                  }}
                  src={gold_specification}
                />
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      lg: "none",
                    },
                    width: { xs: "300px", md: "400px" },
                  }}
                  style={{
                    margin: "0 auto",
                  }}
                >
                  <Slider {...settings}>
                    <div onMouseDown={handleMouseDown}>
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          width: "180px",
                          height: "208px",
                          m: "0 auto",
                        }}
                        src={gold_specification}
                      />
                    </div>

                    <div
                      onMouseDown={handleMouseDown}
                      style={{ border: "1px solid red" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          width: "180px",
                          height: "208px",
                          m: "0 auto",
                        }}
                        src={gold_specification}
                      />
                    </div>
                    <div onMouseDown={handleMouseDown}>
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          width: "180px",
                          height: "208px",
                          m: "0 auto",
                        }}
                        src={gold_specification}
                      />
                    </div>
                  </Slider>
                </Box>
                <Box
                  sx={{
                    width: { xs: "95%", sm: "550px", lg: "500px" },
                    ml: { xs: "0", lg: "35px" },
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        color: "#0D1D2C",
                        fontWeight: 400,
                        fontSize: { xs: "24px", lg: "36px" },
                        textAlign: { xs: "center", lg: "start" },
                      }}
                    >
                      100 gram bar
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        color: "#868E95",
                        fontSize: { xs: "15.38px", lg: "17.3px" },
                        fontWeight: 500,
                        textAlign: "center",
                        // width: { sm: "auto", lg: "auto" },
                        mt: "15px",
                      }}
                    >
                      100 gram (3.215 fine troy ounces) gold cast bar, of
                      minimum fineness 999.9, and bearing a serial number and
                      identifying stamp of an Approved Refiner.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5rem 0",
                      mt: "40px",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Contract Size:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        100 grams (3.215 fine troy ounces)
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Fineness:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        Min. 999.9
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Price Quotation Currency:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        USD, EUR, GBP, AUD, CAD, SGD, CHF, AED
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Price Quotation Unit:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        1 troy ounce
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Tick Size:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        $0.01 USD, €0.01, £0.01
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1" sx={{ fontSize: "13px" }}>
                        Minimum withdrawal requirement:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        100 grams (3.215 fine troy ounces)
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#0D1D2C",
                        }}
                      >
                        Minimum Deposit Quantity:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#868E95",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        100 grams (3.215 fine troy ounces)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#868E95",
                fontSize: "13px",
                fontWeight: 500,
                textAlign: "center",
                mt: "100px",
                mx: "auto",
              }}
            >
              *Bar manufacturers include: Argor-Heraeus, Asahi, Metalor, Royal
              Canadian Mint, Suisse, Swiss, Valcambi. For full bar list see{" "}
              <span style={{ color: "#017DE8" }}>latest audit</span>
            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box>
          <Box
            sx={{
              width: { xs: "90%", xl: "1324px" },
              m: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              py: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "90%", md: "514px" },
                gap: "32px 0",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "30px", lg: "47.25px" },
                  fontWeight: 400,
                  color: "#0D1D2C",
                  lineHeight: { lg: "60px" },
                }}
              >
                Trusted by Individuals. Trusted by Governments
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "15px", lg: "16.88px" },
                  fontWeight: 500,
                  lineHeight: "20px",
                  color: "#6E7780",
                }}
              >
                Kipu has partnered with Indonesian state-run national postal
                service, PTPos Indonesia, to introduce KAU as currency to the
                entire population of Indonesia.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: { xs: "15px", lg: "17.02px" },
                  fontWeight: 500,
                  lineHeight: "26px",
                  color: "#6E7780",
                }}
              >
                Alongside the partnership with PTPOS - the third-largest postal
                service in the world - Kipu has partnered with the only two
                government-regulated exchanges in Indonesia: Jakarta Futures
                Exchange (JFX) and ICDX - to bring instant physical gold trading
                to the country via KAU.
              </Typography>
              <Button
                variant="contained"
                className="grantiend"
                sx={{ py: 1.5, minWidth: "44px", width: "89px" }}
              >
                Explore
              </Button>
            </Box>
            <Box
              component="img"
              sx={{
                display: "block",
                minWidth: { xs: "auto", md: "624px" },
                width: { sn: "524px", md: "624px" },
                height: "430px",
                mx: "auto",
                objectFit: "cover",
              }}
              src={governments}
            />
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ py: "80px", bgcolor: "#F8F8F9" }}>
          <Box
            sx={{
              width: { xs: "90%", xl: "1328px" },
              mx: "auto",
              display: "flex",
              gap: "50px",
              flexDirection: { xs: "column", xl: "row" },
            }}
          >
            <Box
              sx={{
                width: { sm: "550px", md: "550px", lg: "290px" },
                height: { xs: "405px", xl: "405px" },
                display: "flex",
                m: "0 auto",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "35.58px",
                  }}
                >
                  Latest gold blogs
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: "17.16px",
                    lineHeight: "26px",
                    color: "#6E7780",
                  }}
                >
                  Stay up to date with the latest gold news, insights and guides
                  from Kipu precious metals experts.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: "#017DE8", fontWeight: 500 }}
                >
                  See all
                </Typography>
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    width: "15px",
                    height: "15px",
                    objectFit: "cover",
                  }}
                  src={arrow_icon}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                width: { sm: "550px", lg: "auto" },
                m: "0 auto",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", lg: "290px" },
                  height: "405px",
                  boxShadow: "0 0 5px #ccc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  gap: "5px",
                  px: "15px",
                  pb: { sm: "25px", lg: "15px" },
                  borderRadius: "10px",
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "19.36px",
                    fontWeight: 500,
                    lineHeight: "32px",
                    color: "#0D1D2C",
                  }}
                >
                  How could a BRICS gold currency impact…
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "17.73px",
                    fontWeight: 500,
                    lineHeight: "26px",
                    color: "#6E7780",
                  }}
                >
                  BRICS countries and other nations are looking to reduce their…
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "13.67px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#9EA5AB",
                  }}
                >
                  Posted 21st Nov 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "100%", lg: "290px" },
                  height: "405px",
                  boxShadow: "0 0 5px #ccc",
                  gap: "5px",
                  justifyContent: { xs: "end", lg: "start" },
                  display: { xs: "flex", lg: "block" },
                  flexDirection: { xs: "column", lg: "row" },
                  pt: { xs: "0", lg: "210px" },
                  pb: "25px",
                  px: "20px",
                  borderRadius: "10px",
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "19.36px",
                    fontWeight: 500,
                    lineHeight: "32px",
                    color: "#0D1D2C",
                  }}
                >
                  How the 2024 US Election Result Could…
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "17.73px",
                    fontWeight: 500,
                    lineHeight: "26px",
                    color: "#6E7780",
                  }}
                >
                  The results are in. Donald J. Trump has been elected…
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "13.67px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#9EA5AB",
                  }}
                >
                  Posted 8th Nov 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "100%", lg: "290px" },
                  height: "405px",
                  boxShadow: "0 0 5px #ccc",
                  gap: "10px",
                  justifyContent: { xs: "end", lg: "start" },
                  display: { xs: "flex", lg: "block" },
                  flexDirection: { xs: "column", lg: "row" },
                  pt: { sm: "0", lg: "210px" },
                  px: "20px",
                  pb: "25px",
                  borderRadius: "10px",
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "19.36px",
                    fontWeight: 500,
                    lineHeight: "32px",
                    color: "#0D1D2C",
                  }}
                >
                  Investor’s Guide to Gold in 2024
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "17.73px",
                    fontWeight: 500,
                    lineHeight: "26px",
                    color: "#6E7780",
                  }}
                >
                  What are the main market drivers for gold in 2023?…
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "13.67px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#9EA5AB",
                  }}
                >
                  Posted 31st Oct 2024
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/*  */}
      </Box>
    </KipuGoldLayout>
  );
};

export default MainPage;
