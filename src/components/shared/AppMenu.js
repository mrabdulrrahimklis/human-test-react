import React from "react";
import {AppBar, Toolbar, Typography, Button, Grid, Box} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MenuIcon from '@material-ui/icons/Menu';
import backgroundImage from '../../assets/background_menu.png';
import {Heading, Layout, Btn, Img} from "../styled";
import CloseIcon from "../../assets/close.png";

export const AppMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <AppBar style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: '0', position: 'inherit' }} elevation={0}>
                <Toolbar style={{ display: "flex", justifyContent: "space-between", marginTop: '20px' }}>
                    <Typography variant='h6'>
                        COMPANY
                    </Typography>
                    <Box display={{ xs: 'none', sm: 'none', md: 'block', xl: 'block', lg: 'block' }}>
                        <Grid style={{ display: 'flex' }} item md={0}>
                            <Link to='/' style={{  textDecoration: 'none' }}>
                                <Button style={{ color: props.menuColor, fontSize: '9px', padding: '11px 14px', margin: '0 15px' }}>
                                    HOME
                                </Button>
                            </Link>
                            <Button
                                style={{
                                    color: props.menuColor,
                                    fontSize: '9px',
                                    margin: '0 15px'
                                }}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                PLATFORM
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem style={{ fontSize: '9px', padding: '11px 15px' }}>ACQUIRE</MenuItem>
                                <MenuItem style={{ fontSize: '9px', padding: '11px 15px' }}>CREATE</MenuItem>
                                <MenuItem style={{ fontSize: '9px', padding: '11px 15px' }}>ENGAGE</MenuItem>
                                <MenuItem style={{ fontSize: '9px', padding: '11px 15px' }}>SELL</MenuItem>
                            </Menu>
                            <Button style={{ color: props.menuColor, fontSize: '9px', margin: '0 15px' }}>
                                INSIGHTS
                            </Button>
                            <Link to='/contact' style={{  textDecoration: 'none' }}>
                                <Button style={{ color: props.textColor, fontSize: '9px', backgroundColor: props.btnBgColor, padding: '11px 14px', margin: '0 15px', border: '1px solid #17A4A4' }}>
                                    GET IN TOUCH
                                </Button>
                            </Link>
                            <Button style={{ color: '#929FAD', fontSize: '9px', margin: '0 15px' }}>
                                DEUTCH
                            </Button>
                        </Grid>
                    </Box>
                    <Box display={{ xs: 'block', sm: 'block', md: 'none', xl: 'none', lg: 'none' }}>
                        <Popup
                            modal
                            overlayStyle={{ background: `url(${backgroundImage})`, objectFit: 'contain', backgroundPosition: 'center', width: '100%' }}
                            contentStyle={{ background: "rgba(255,255,255,0)", width: "80%", border: "none" }}
                            closeOnDocumentClick={false}
                            trigger={open => <MenuIcon style={{ color: 'gray' }} open={open} />}
                        >
                            {close => {
                                return (
                                    <>
                                        <Box display={'flex'} justifyContent={'space-between'}>
                                            <Box>
                                                <Heading>COMPANY</Heading>
                                            </Box>
                                            <Box textAlign={'right'} onClick={close}>
                                                <Img src={CloseIcon} alt={'CloseIcon'} margin={'10px 0 0 0'} />
                                            </Box>
                                        </Box>
                                        <Heading textAlign={'center'} fontSize={'22px'}>
                                            HOME
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'22px'}>
                                            PLATFORM
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'14px'} color={'#929FAD'}>
                                            ACQUIRE
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'14px'} color={'#929FAD'}>
                                            CREATE
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'14px'} color={'#929FAD'}>
                                            ENGAGE
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'14px'} color={'#929FAD'}>
                                            SELL
                                        </Heading>
                                        <Heading textAlign={'center'} fontSize={'22px'}>
                                            INSIGHTS
                                        </Heading>
                                        <Box textAlign={'center'}>
                                            <Link to='/contact'>
                                                <Btn color={'#fff'} fontSize={'9px'} background={props.btnBgColor} padding={'11px 14px'} margin={'20px auto'} border={'1px solid #17A4A4'} borderRadius={'3px'}>
                                                    GET IN TOUCH
                                                </Btn>
                                            </Link>
                                        </Box>
                                        <Heading textAlign={'center'} fontSize={'14px'} color={'#929FAD'}>
                                            DEUTCH
                                        </Heading>
                                    </>
                                )
                            }}

                        </Popup>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}