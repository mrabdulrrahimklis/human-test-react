import { AppMenu } from "../shared/AppMenu";
import Image from '../../assets/image1.png';
import {Box} from "@material-ui/core";
import React from "react";
import {MainText} from "../styled/MainText";

export const MainBlock = () => {

    return (
        <>
            <Box
                style={{
                    background: `linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.5),
                        rgba(0,0,0,0.5)
                    ), url(${Image})`,
                    height: '100vh',
                    objectFit: 'contain',
                    backgroundPosition: 'center'
                }}
            >
                <AppMenu btnBgColor={'#17A4A4'} textColor={'white'}  menuColor={'white'}  />
                <Box display={{ xs: 'none', sm: 'none', md: 'block', xl: 'block', lg: 'block' }}>
                    <MainText />
                </Box>
            </Box>
        </>
    )
}