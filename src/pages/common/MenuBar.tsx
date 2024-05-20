import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import { TabPanel } from '@mui/lab';
import { Home, Book } from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
import Academics from '../Academics';
import HomePage from '../HomePage';
import Programmes from '../Programmes';
import PaymentMethods from '../PaymentMethods';
import Staff from '../Staff';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function MenuBar() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const menuElements = () => [
        {
            title: 'Home',
            route: '/home',
            icon: <Home />,
            component: <HomePage />,
            section: 0
        },
        {
            title: 'Academics',
            route: '/academics',
            icon: <Book />,
            component: <Academics />,
            section: 0
        },
        {
            title: 'Programmes',
            route: '/programmes',
            icon: <Home />,
            component: <Programmes />,
            section: 0
        },
        {
            title: 'Payment Methods',
            route: '/payment-methods',
            icon: <Home />,
            component: <PaymentMethods />,
            section: 0
        },
        {
            title: 'Staff',
            route: '/staff',
            icon: <Home />,
            component: <Staff />,
            section: 0
        }
    ];

    return (
        <>
            <Box sx={{
                // bgcolor: 'background.paper', 
                width: "100%"
            }}>
                {/* #c9e265 */}
                <AppBar position="static" sx={{ backgroundColor: "green", }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: "20px" }}>
                        <Avatar alt="JKUAT Logo"
                            src="/jkuat-logo.png"
                            sx={{ width: 35, height: 35, padding: "30px" }}
                        />
                        <Button sx={{ height: "2rem", margin: "30px" }} variant="contained" color="info" onClick={() => { navigate("/login") }}>Login</Button>
                    </Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="SCIT"
                    >
                        {
                            menuElements().map((value, index) => <Tab key={index} label={value.title} {...a11yProps(index)} />)
                        }
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {
                        menuElements().map((v, i) =>
                            <TabPanel key={i} value={value} dir={theme.direction} index={value}>
                                {menuElements()[value].component}
                            </TabPanel>)
                    }
                </SwipeableViews>
            </Box>
            <Footer />
        </>
    );
}
