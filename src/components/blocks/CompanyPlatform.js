import {Heading} from "../styled";
import {box1, box2, box3, companyPlatformHeader, recording} from "../../constants";
import {CompanyBox} from "../styled/CompanyBox";
import {Grid} from "@material-ui/core";
import React from "react";

export const CompanyPlatform = () => {
    return (
        <div style={{ margin: '4vw 0 5vw' }}>
            <Grid style={{ margin: '0 auto' }} xs={10} sm={8} md={6} lg={4} xl={4}>
                <Heading textAlign={'center'} fontWeight={'700'}>
                    {companyPlatformHeader}
                </Heading>
            </Grid>
                <Grid container style={{ boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)', borderBottom: '5px solid #B4E0E0', margin: '0 auto', width: '80%' }}>
                    <Grid style={{ margin: '20px auto' }} item xs={10} sm={8} md={4} lg={4} xl={4}>
                        <CompanyBox text={box1} />
                    </Grid>
                    <Grid style={{ margin: '20px auto' }} item xs={10} sm={8} md={4} lg={4} xl={4}>
                        <CompanyBox text={box2} />
                    </Grid>
                    <Grid style={{ margin: '20px auto' }} item xs={10} sm={8} md={4} lg={4} xl={4}>
                        <CompanyBox text={box3} />
                    </Grid>
                </Grid>
            <Grid xs={10} sm={10} md={8} xl={6} lg={5} style={{ margin: '5vw auto' }} >
                <Heading color={'#B4E0E0'} textAlign={'center'} fontWeight={'700'} fontSize={'24px'} margin={'50px 0'}>
                    {recording}
                </Heading>
            </Grid>
        </div>
    )
}