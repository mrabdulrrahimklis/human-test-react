import {Heading, Layout} from "./index";
import {home1, home2} from "../../constants";
import {Grid, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {Hex} from "../hex";
import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const MainText = () => {
    const arrowDownwardIcon = <ArrowDownwardIcon />

    return(
        <Grid item>
            <Layout
                width='50%'
                margin='0 auto'
                background={'rgba(0,0,0,0)'}
                display='flex'
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <Heading
                    fontSize='7vw'
                    color='#929FAD'
                >
                    Perfect
                </Heading>
                <Heading
                    fontSize='10vw'
                    color='#FFF'
                    style={{ position: 'absolute', top: '80px' }}
                >
                    Insurance
                </Heading>
                <Heading
                    fontSize='1.5rem'
                    fontWeight='400'
                    margin='0'
                    padding='0'
                    color='#17A4A4'
                >
                    {home1}
                </Heading>
                <Heading
                    fontSize='1.2rem'
                    fontWeight='400'
                    margin='20px 0 0 0'
                    padding='0'
                    color='#fff'
                    lineHeight={'36px'}
                >
                    {home2}
                </Heading>
                <List style={{ color: 'white', listStyle: 'none', margin: '40px 0', padding: '0' }}>
                    <ListItem style={{ margin: '-15px' }}>
                        <ListItemAvatar>
                            <ArrowRightAltIcon style={{ color: '#D5BB78' }} />
                        </ListItemAvatar>
                        <ListItemText primary='Risk Prevention, through behavior based incentives' />
                    </ListItem>
                    <ListItem style={{ margin: '-15px' }}>
                        <ListItemAvatar>
                            <ArrowRightAltIcon style={{ color: '#D5BB78' }} />
                        </ListItemAvatar>
                        <ListItemText primary='Lower Claims, through carefully selected and engaged customer base' />
                    </ListItem>
                    <ListItem style={{ margin: '-15px' }}>
                        <ListItemAvatar>
                            <ArrowRightAltIcon style={{ color: '#D5BB78' }} />
                        </ListItemAvatar>
                        <ListItemText primary='Fraud control by real-time verification of the insured object and/or claim over the smartphone camera' />
                    </ListItem>
                </List>
                <Layout background={'rgba(0,0,0,0)'} style={{ margin: 'auto' }}>
                    <div style={{ position: 'absolute', bottom: '-35px' }}>
                        <Hex icon={arrowDownwardIcon} hexagonStyle={{ backgroundColor: 'white' }} iconStyle={{ color: '#17A4A4', fontSize: '22px' }} />
                    </div>
                </Layout>
            </Layout>
        </Grid>
    )
}