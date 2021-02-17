import {Hex} from "../hex";
import {Box} from "@material-ui/core";
import {Heading} from "./index";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

export const CompanyBox = ({ text }) => {
    const check = <CheckIcon fontSize='default' />

    return(
        <Box margin={'0 auto'}>
            <Hex hexagonStyle={{ background: '#B4E0E0', margin: '0 auto 50px' }} icon={check} iconStyle={{ color: '#076188', fontSize: '28px', fontWeight: 'bold', lineHeight: '35px' }} />
            <Heading fontWeight={'normal'} fontSize={'14px'} textAlign='center' padding={'2px 10px'}>{text}</Heading>
        </Box>
    )
}