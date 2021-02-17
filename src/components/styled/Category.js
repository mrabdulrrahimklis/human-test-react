import React from "react";
import { Grid } from "@material-ui/core";
import { Hex } from "../hex";
import CheckIcon from "@material-ui/icons/Check";
import { Heading } from "./index";

export const Category = ({ text }) => {
    const check = <CheckIcon fontSize='default' />

    return (
        <>
            <Grid item xs={12} md={4} style={{ margin: '10px', padding: '0' }}>
                <Grid container >
                    <Grid item xs={2}>
                        <Hex hexagonStyle={{ background: 'white' }} icon={check} iconStyle={{ color: '#17A4A4' }} />
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: '15px' }}>
                        <Heading fontSize='11px' fontWeight='300' lineHeight='20px'>
                            {text}
                        </Heading>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}