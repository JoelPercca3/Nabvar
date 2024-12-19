import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import KipuGoldLayout from "../layout/kIpuGoldLayout";
import image_01 from "../../assets/images/about/image_01.jpg";
import image_02 from "../../assets/images/about/image_02.png";
import image_03 from "../../assets/images/about/image_03.jpg";
import image_04 from "../../assets/images/about/image_04.png";
import company_icon from "../../assets/icons/institutional-icon.png";
import personal_icon from "../../assets/icons/personal.png";
import contact_icon from "../../assets/icons/contact.png";
import arrow_icon from "../../assets/icons/arrow-icon.png";
import { useRef } from "react";
import Slider from "react-slick";

const CARDS_ABOUT = [
  {
    id: 1,
    icon: company_icon,
    title: "Company address",
    description:
      "Kipu Money, PO Box 2510, Kensington House, 69 Dr. Roy’s rive, KY1-1104, Grand Cayman, Cayman Islands ",
  },
  {
    id: 2,
    icon: personal_icon,
    title: "CEO",
    description: "Thomas Coughlin",
  },
  {
    id: 3,
    icon: contact_icon,
    title: "Contact information",
    description: "+44 20 3150 0385 support@Kipu.money",
  },
];

const TEXT_INDUSTRY = [
  {
    id: 1,
    description:
      "Kipu Money, PO Box 2510, Kensington House, 69 Dr. Roy’s rive, KY1-1104, Grand Cayman, Cayman Islands ",
  },
  {
    id: 2,
    icon: personal_icon,
    title: "CEO",
    description: "Thomas Coughlin",
  },
  {
    id: 3,
    icon: contact_icon,
    title: "Contact information",
    description: "+44 20 3150 0385 support@Kipu.money",
  },
];

const About = () => {
  const refOutMision = useRef(null);
  const refMonetarySistema = useRef(null);
  const refBlockchain = useRef(null);
  const refBorderless = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const sliderRef = useRef(null);
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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false, // Oculta las flechas.
    beforeChange: handleBeforeChange,
  };

  return (
    <KipuGoldLayout>
      <Box component="main">
        <Box
          sx={{
            height: 272,
            bgcolor: "#0D1D2C",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem 0",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "36px", ml: "64px" },
              color: "white",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            About Kipu
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#9EA5AB",
              fontSize: { xs: "15.25px", ml: "17.16px" },
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            On a mission to accelerate the world’s transition to sustainable
            money.
          </Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", ml: "row" },
            gap: "3rem",
            py: "100px",
            width: { xs: "90%", ml: "1258px" },
            m: "0 auto",
          }}
        >
          <Box
            component="ul"
            sx={{
              display: { xs: "none", ml: "flex" },
              flexDirection: "column",
              minWidth: "296px",
            }}
          >
            <Box
              onClick={() => scrollToSection(refOutMision)}
              sx={{
                pl: "30px",
                borderLeft: "2px solid #017DE8",
                cursor: "pointer",
              }}
            >
              <Typography
                component="li"
                sx={{
                  py: "1rem",
                  fontSize: "14.13px",
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Out Mission
              </Typography>
            </Box>
            <Box
              onClick={() => scrollToSection(refMonetarySistema)}
              sx={{
                pl: "30px",
                borderLeft: "2px solid #017DE8",
                cursor: "pointer",
              }}
            >
              <Typography
                component="li"
                sx={{
                  py: "1rem",
                  fontSize: "14.13px",
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                An Entirely New Monetary System
              </Typography>
            </Box>
            <Box
              onClick={() => scrollToSection(refBlockchain)}
              sx={{
                pl: "30px",
                borderLeft: "2px solid #017DE8",
                cursor: "pointer",
              }}
            >
              <Typography
                component="li"
                sx={{
                  py: "1rem",
                  fontSize: "14.13px",
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Gold on the Blockchain
              </Typography>
            </Box>
            <Box
              onClick={() => scrollToSection(refBorderless)}
              ref={refBorderless}
              sx={{
                pl: "30px",
                borderLeft: "2px solid #017DE8",
                cursor: "pointer",
              }}
            >
              <Typography
                component="li"
                sx={{
                  py: "1rem",
                  fontSize: "14.13px",
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Borderless Currency
              </Typography>
            </Box>
          </Box>

          {/*  */}

          <Box
            sx={{
              display: { xs: "block", ml: "none" },
            }}
          >
            <Slider {...settings}>
              <Box
                sx={{
                  display: { xs: "flex !important", ml: "none" },
                  gap: "2rem",
                  pl: "30px",
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  justifyContent: "center",
                }}
              >
                <Typography
                  onClick={() => scrollToSection(refOutMision)}
                  component="li"
                  sx={{
                    py: "1rem",
                    fontSize: "14.13px",
                    fontWeight: 400,
                    color: "#0D1D2C",
                  }}
                >
                  Out Mission
                </Typography>
                <Typography
                  onClick={() => scrollToSection(refMonetarySistema)}
                  component="li"
                  sx={{
                    py: "1rem",
                    fontSize: "14.13px",
                    fontWeight: 400,
                    color: "#0D1D2C",
                  }}
                >
                  An Entirely New Monetary System
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex !important", ml: "none" },
                  gap: "2rem",
                  pl: "30px",
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  justifyContent: "center",
                }}
              >
                <Typography
                  onClick={() => scrollToSection(refBlockchain)}
                  component="li"
                  sx={{
                    py: "1rem",
                    fontSize: "14.13px",
                    fontWeight: 400,
                    color: "#0D1D2C",
                  }}
                >
                  Gold on the Blockchain
                </Typography>
                <Typography
                  onClick={() => scrollToSection(refBorderless)}
                  component="li"
                  sx={{
                    py: "1rem",
                    fontSize: "14.13px",
                    fontWeight: 400,
                    color: "#0D1D2C",
                  }}
                >
                  Borderless Currency
                </Typography>
              </Box>
            </Slider>
          </Box>

          <Box
            sx={{
              mx: "auto",
              width: { lg: "952px" },
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem 0",
            }}
          >
            <Box
              ref={refOutMision}
              sx={{ display: "flex", flexDirection: "column", gap: "1.5rem 0" }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "17.3px", ml: "23.81px" },
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Our Mission
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Kipu shares a vision of a world where money is honest, fair and
                backed by a true store of value, within a system designed to
                reward everyone who participates.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Kipu has introduced a new form of money to stand the test of
                time and overcome the pitfalls of traditional currencies
                susceptible to{" "}
                <Box component="span" sx={{ fontWeight: 700 }}>
                  inflation, weakened value
                </Box>{" "}
                and{" "}
                <Box component="span" sx={{ fontWeight: 700 }}>
                  eventual collapse.
                </Box>
                In today’s model where more and more money is printed and the
                value of that currency is eroded, economies and individuals are
                left to suffer the consequences.
              </Typography>
            </Box>
            <Box
              ref={refMonetarySistema}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem 0",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "17.3px", ml: "23.81px" },
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                An Entirely New Monetary System
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Following years of strategic navigation and meticulous planning,
                Kipu was established in 2018 to address that very problem. CEO
                and founder, Thomas Coughlin, brought forward Kipu as the
                solution; an entirely new monetary system, based on the proven,
                physical value of precious metals – not paper promises.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Based on fully allocated, precious metals, Kipu gold{" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  KAU{" "}
                </Box>
                and silver{" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  KAG{" "}
                </Box>{" "}
                reintroduce physical backing to money, with the everyday utility
                of fiat currency. By digitalising gold and silver, Kipu
                reintroduced the enduring value of precious metals to all, via
                an accessible, easy-to-use platform.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                And now, everybody can earn an industry-first, debt-free{" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  yield{" "}
                </Box>
                on their precious metals, simply by using gold and silver as
                money or holding their assets securely within Kipu’ vaults. Made
                possible by cutting-edge blockchain technology, Kipu is able to
                share over 50% of its revenue with users, every single month.
              </Typography>
            </Box>
            <Box
              ref={refBlockchain}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem 0",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "17.3px", ml: "23.81px" },
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Gold on the Blockchain
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Kipu leverages Stellar’s technology to deliver robust, reliable
                infrastructure and interoperability that runs global
                transactions of KAU and KAG on the Kipu Blockchain Network.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                At the core of the system’s integrity, the Kipu blockchain
                maintains an immutable and{" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  transparent ledger{" "}
                </Box>{" "}
                of all KAU and KAG within the Kipu system. The digital record,
                coupled with biannual independent audits, offers users total
                assurance in the secure ownership of their assets.
              </Typography>
            </Box>
            <Box
              ref={refBorderless}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem 0",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "17.3px", ml: "23.81px" },
                  fontWeight: 400,
                  color: "#0D1D2C",
                }}
              >
                Borderless Currency
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                As nations adopt legislation to reflect the changing economic
                landscape, Kipu is firmly positioned at the forefront of this
                global development, with  Kipu gold ({" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  KAU{" "}
                </Box>{" "}
                ) already integrated with the{" "}
                <Box component="span" sx={{ color: "#017DE8" }}>
                  Indonesian{" "}
                </Box>{" "}
                government-run postal service, PT Pos.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Through further government partnerships, Kipu will continue to
                widen global access to gold and silver investment, so that
                everyday payments in physical precious metals and access to
                fairer remittance services are the standard.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "15.13px", ml: "17.02px" },
                  fontWeight: 400,
                  color: "#6E7780",
                }}
              >
                Kipu invites people and governments of the world to be part of a
                universally rewarding monetary system – one based on tangible,
                physical money that has withstood the greatest trials of
                economic history.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "29.77px", lg: "47.63px" },
              color: "#0D1D2C",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Kipu Ecosystem
          </Typography>

          <Box>
            <Box
              sx={{
                width: { xs: "90%", ml: "1280px" },
                height: { xs: "701px", sm: "auto", ml: "1280px" },
                mx: "auto",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: { xs: "none", lg: "block" },
                }}
                src={image_01}
              />
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: { xs: "block", lg: "none" },
                }}
                src={image_03}
              />
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            pt: "100px",
            width: { xs: "90%", ml: "1280px" },
            mx: "auto",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "30px", ml: "48px" },
              color: "#0D1D2C",
              fontWeight: 400,
              width: { ml: "834px" },
              textAlign: "center",
              mx: "auto",
              mb: "50px",
            }}
          >
            Industry Leaders in Fully Allocated Precious Metals
          </Typography>

          <Grid2
            container
            spacing={5}
            sx={{ display: { xs: "none", ml: "flex" } }}
          >
            <Grid2 size={3}>
              <Typography
                component="h3"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                The Kipu platform was formed by strategic partner,
                <Box sx={{ color: "#017DE8" }}>
                  Allocated Bullion Exchange
                </Box>{" "}
                (ABX), a leading online exchange platform for physical bullion.
                ABX brings over 10+ years of institutional precious metals
                heritage to the secure management and trading of Kipu users’
                precious metals.
              </Typography>
            </Grid2>
            <Grid2 size={3}>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Formed in 2011, ABX has amassed a global vaulting network
                covering Dubai, Hong Kong, Istanbul, Vaduz, London, New York,
                Singapore, Sydney, Toronto, Zurich, Panama City, Batam and
                Brisbane. Through its unique foothold in the precious metals
                industry, ABX ensures Kipu users experience the highest level of
                security from industry leaders: Brinks, Loomis, and Malca Amit.
              </Typography>
            </Grid2>
            <Grid2 size={3}>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Operating within a strict Quality Assurance Framework (QAF), all
                metal traded within the Kipu ecosystem is certified with the
                highest investment- grade quality; ABX ensures provenance and an
                unbroken chain of integrity that can be traced back to
                refinement.
              </Typography>
            </Grid2>
            <Grid2 size={3}>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Kipu brings ABX’s extensive experience and infrastructure to
                support the global uptake of the platform – with an impact
                expanding well beyond the monetary sphere. When individuals take
                back control of their money, within an economic system designed
                to drive usage – rather than debt – the reality of a more
                sustainable, ethical world is well within reach.
              </Typography>
            </Grid2>
          </Grid2>
          {/*  */}

          <Box
            sx={{
              height: { xs: "300px" },
              display: { xs: "block", ml: "none" },
              width: { xs: "90%", md: "390px" },
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", lg: "row" },
              mx: "auto",
            }}
          >
            <Slider {...settings}>
              <Typography
                component="h3"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                The Kipu platform was formed by strategic partner,
                <Box sx={{ color: "#017DE8" }}>
                  Allocated Bullion Exchange
                </Box>{" "}
                (ABX), a leading online exchange platform for physical bullion.
                ABX brings over 10+ years of institutional precious metals
                heritage to the secure management and trading of Kipu users’
                precious metals.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Formed in 2011, ABX has amassed a global vaulting network
                covering Dubai, Hong Kong, Istanbul, Vaduz, London, New York,
                Singapore, Sydney, Toronto, Zurich, Panama City, Batam and
                Brisbane. Through its unique foothold in the precious metals
                industry, ABX ensures Kipu users experience the highest level of
                security from industry leaders: Brinks, Loomis, and Malca Amit.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Operating within a strict Quality Assurance Framework (QAF), all
                metal traded within the Kipu ecosystem is certified with the
                highest investment- grade quality; ABX ensures provenance and an
                unbroken chain of integrity that can be traced back to
                refinement.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "15.38px",
                  color: "#6E7780",
                  lineHeight: "24px",
                }}
              >
                Kipu brings ABX’s extensive experience and infrastructure to
                support the global uptake of the platform – with an impact
                expanding well beyond the monetary sphere. When individuals take
                back control of their money, within an economic system designed
                to drive usage – rather than debt – the reality of a more
                sustainable, ethical world is well within reach.
              </Typography>
            </Slider>
          </Box>

          {/*  */}
        </Box>
        {/*  */}
        <Box sx={{ pt: "100px", height: { sm: "783px" } }}>
          <Box sx={{ height: { sm: "581px" }, bgcolor: "#F8F8F9" }}>
            <Box
              sx={{
                display: { xs: "none", ml: "block" },
                width: "1280px",
                height: "703px",
                mx: "auto",
              }}
              component="img"
              src={image_02}
            />
            <Box
              sx={{
                display: { xs: "block", ml: "none" },
                width: { xs: "100%", sm: "90%", md: "90%" },
                height: { xs: "417px", md: "600px" },
                mx: "auto",
                objectFit: "cover",
              }}
              component="img"
              src={image_04}
            />
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ bgcolor: "#F8F8F9", pt: ".1px" }}>
          <Box
            sx={{
              height: { xs: "450px", ml: "574px" },
              display: { xs: "none", ml: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            {CARDS_ABOUT.map((card) => (
              <Box key={card.id} sx={{ p: "20px", bgcolor: "" }}>
                <Card
                  variant="outlined"
                  sx={{
                    width: "400px",
                    height: "338px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "2",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{ width: { lg: "64px" }, height: "64px" }}
                    component="img"
                    src={card.icon}
                    alt="company-icon"
                  />
                  <CardContent sx={{}}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#0D1D2C",
                        fontSize: "22.88px",
                        fontWeight: 500,
                        textAlign: "center",
                        mt: "15px",
                        mb: "10px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        width: "318px",
                        mx: "auto",
                        color: "#6E7780",
                        fontWeight: 500,
                        lineHeight: "24px",
                        textAlign: "center",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              height: { xs: "450px", ml: "574px" },
              display: { xs: "block", ml: "none" },
              width: { sm: "390px" },
              my: "100px",
              mx: "auto",
            }}
          >
            <Slider {...settings} className="silider_width">
              {CARDS_ABOUT.map((card) => (
                <Box
                  key={card.id}
                  sx={{
                    p: { xs: "0", sm: "10px" },
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      width: { xs: "100%", sm: "366px" },
                      height: "338px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "2",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{ width: { lg: "64px" }, height: "64px" }}
                      component="img"
                      src={card.icon}
                      alt="company-icon"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#0D1D2C",
                          fontSize: "22.88px",
                          fontWeight: 500,
                          textAlign: "center",
                          mt: "15px",
                          mb: "10px",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          width: { xs: "auto", sm: "318px" },
                          mx: "auto",
                          color: "#6E7780",
                          fontWeight: 500,
                          lineHeight: "24px",
                          textAlign: "center",
                        }}
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
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
                height: { xs: "auto", lg: "405px" },
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
                    textAlign: "center",
                  }}
                >
                  Company news
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: "17.16px",
                    lineHeight: "26px",
                    color: "#6E7780",
                    textAlign: "center",
                  }}
                >
                  Our recent company updates and announcements.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
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
                  gap: "20px",
                  px: "15px",
                  pt: "200px",
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
                  Kipu and Nahdlatul Ulama Launch NUNOMICS APP
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
                  Kipu is proud to announce the launch of the NUNOMICS…
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
                  Posted 26th Nov 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "100%", lg: "290px" },
                  height: "405px",
                  boxShadow: "0 0 5px #ccc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "end", lg: "start" },
                  gap: "10px",
                  pt: { xs: "0", lg: "200px" },
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
                  Development Bank for Resilient Prosperity (DBRP) announces…
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
                  Today, the Development Bank for Resilient Prosperity
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
                  Posted 22nd Nov 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { sm: "100%", lg: "290px" },
                  height: "405px",
                  boxShadow: "0 0 5px #ccc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "end", lg: "start" },
                  gap: "10px",
                  pt: { xs: "0", lg: "200px" },
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
                  Kipu Launches Enhanced Dashboard
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
                  Today, we launched our enhanced dashboard experience offering
                  users a…
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
                  Posted 16th Oct 2024
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                  justifyContent: "space-between",
                  width: "100%",
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
          </Box>
        </Box>
        {/*  */}
      </Box>
    </KipuGoldLayout>
  );
};

export default About;
