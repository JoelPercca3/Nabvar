import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import Vetor from '../../assets/icons/Vector.png'

const StyledHero = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    background: 'linear-gradient(rgba(41, 71, 99, 1), rgba(13, 29, 44, 1))',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    position: 'relative',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#0D1D2C',
    color: '#ffffff',
    boxShadow: 'none',
    padding: '0 16px',
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.appBar,
}));


const StyledButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    textTransform: 'none',
    fontSize: '0.9rem',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const StyledPrimaryButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#007BFF',
    color: '#ffffff',
    textTransform: 'none',
    fontSize: '0.9rem',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
}));

const App = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <StyledHero>
            <StyledAppBar position="static">
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <IconButton
                            onClick={() => console.log('Logo clickeado!')}
                            sx={{ p: 0 }}
                        >
                            <Box
                                component="img"
                                src={Vetor}
                                alt="Logo"
                                sx={{ width: 30, height: 29.29 }}
                            />
                        </IconButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Personal</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Business</StyledButton>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            ml: 'auto',
                        }}
                    >
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Products</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Rewards</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>About</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Store</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Media</StyledButton>
                        <StyledButton sx={{ display: { xs: 'none', md: 'block' } }}>Support</StyledButton>

                        <StyledButton>Log in</StyledButton>
                        <StyledPrimaryButton variant="contained">Sign up</StyledPrimaryButton>

                        <StyledButton
                            sx={{
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            EN
                        </StyledButton>

                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: 'white',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Products" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Rewards" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="About" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Store" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Media" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Support" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Box>

                </Toolbar>
            </StyledAppBar>

            <Container
                maxWidth="lg"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}
                >
                    Kipu gold (KAU)
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ mb: 4, color: '#d1d5db', fontSize: { xs: '0.9rem', md: '1rem' } }}
                >
                    The digital currency backed by physical gold.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                    <StyledPrimaryButton
                        variant="contained"
                        size="large"
                        sx={{
                            width: '98px',
                            height: '44px',
                            minWidth: '44px',
                            padding: '10px 16px',
                            gap: '0px',
                            borderRadius: '4px 0px 0px 0px',
                            opacity: 1,
                            background:
                                'linear-gradient(0deg, rgba(1, 125, 232, 1), rgba(1, 125, 232, 1)), linear-gradient(114.21deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)',
                            color: '#ffffff',
                        }}
                    >
                        Buy gold
                    </StyledPrimaryButton>

                    <StyledButton
                        variant="outlined"
                        size="large"
                        sx={{
                            backgroundColor: '#0D1D2C',
                            color: '#ffffff',
                            textTransform: 'none',
                            width: { xs: '100%', md: 'auto' },
                        }}
                    >
                        Blueprint
                    </StyledButton>
                </Box>

                <NavigationButton sx={{ left: 20 }}>
                    <ArrowBackIosIcon />
                </NavigationButton>
                <NavigationButton sx={{ right: 20 }}>
                    <ArrowForwardIosIcon />
                </NavigationButton>
            </Container>
        </StyledHero>
    );
};

export default App;
