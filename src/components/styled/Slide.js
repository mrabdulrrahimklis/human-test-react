import { Box } from "@material-ui/core";
import React from "react";
import {Btn, Heading} from "./index";

export const Slide = ({ mapWhite, mapGreen, adImage, iconImage, headerText, text, leftHeader, leftText }) => {
    return (
        <>
            <Box display={{ xs: 'block', sm: 'block', md: 'none', xl: 'none', lg: 'none' }}>
                <Box display={'flex'} justifyContent={'center'} height={'400px'} >
                    <Box
                        width={'60vw'}
                        style={{
                            background: `white`,
                            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)',
                            padding: '20px'
                        }}
                    >
                        <img src={iconImage} alt={'iconImg'} />
                        <Heading fontSize={'28px'} width={'80%'} padding={'0'} margin={'0'} style={{ borderBottom: '3px solid #17A4A4'}}>
                            {headerText}
                        </Heading>
                        <Heading fontSize={'12px'} width={'80%'} padding={'0'} margin={'20px 0 0 0'}>
                            {text}
                        </Heading>
                        <Btn padding={'5px 22px'} background={'#17A4A4'} border={'1px solid #17A4A4'} borderRadius={'3px'} color={'white'} style={{ position: 'absolute', bottom: '50px'}}>
                            READ MORE
                        </Btn>
                    </Box>
                </Box>
            </Box>
            <Box display={{ xs: 'none', sm: 'none', md: 'block', xl: 'block', lg: 'block' }}>
                <Box display={'flex'} justifyContent={'center'} height={'500px'} >
                    <img src={adImage} alt='Image' style={{ position: 'absolute', margin: '20px auto', height: 'calc(100% - 70px)' }} />
                    <Box
                        width={'30vw'}
                        style={{
                            background: `url(${mapWhite})`,
                            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)'
                        }}
                    >
                        <Box
                            position={'relative'}
                            style={{
                                padding: '50px',
                                height: '400px',
                                marginTop: '50px',
                                width: '80%',
                                objectFit: 'contain',
                                backgroundPosition: 'bottom'
                            }}
                        >
                            <Heading fontSize={'22px'}>
                                {leftHeader}
                            </Heading>
                            <Heading fontSize={'18px'} fontWeight={'normal'} width={'60%'}>
                                {leftText}
                            </Heading>
                        </Box>
                    </Box>
                    <Box
                        width={'30vw'}
                        style={{
                            background: `url(${mapGreen})`,
                            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)'
                        }}
                    >
                        <Box
                            position={'relative'}
                            right={'-30%'}
                            style={{
                                padding: '50px',
                                background: 'white',
                                borderBottom: '5px red solid',
                                height: '300px',
                                marginTop: '50px',
                                width: '60%',
                                objectFit: 'contain',
                                backgroundPosition: 'center'
                            }}
                        >
                            <img src={iconImage} alt={'iconImg'} style={{ padding: '0', margin: '0'}} />
                            <Heading fontSize={'22px'}>
                                {headerText}
                            </Heading>
                            <Heading fontSize={'18px'} fontWeight={'normal'}>
                                {text}
                            </Heading>
                            <Btn padding={'5px 22px'} background={'#17A4A4'} border={'1px solid #17A4A4'} borderRadius={'3px'} color={'white'} style={{ position: 'absolute', bottom: '30px'}}>
                                READ MORE
                            </Btn>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}