import React from "react";
import { Container, Grid } from "@material-ui/core";
import {Heading, Layout} from "../styled";
import { Category } from "../styled/Category";
import { cat1, cat2, cat3, cat4, heading1, heading2, heading3 } from "../../constants";

const Categories = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={10} sm={10} md={8} lg={8} xl={8} style={{ margin: '0 auto'}}>
                    <Heading
                        color='#17A4A4'
                        fontWeight='300'
                        textAlign='center'
                        fontSize='2.25rem'
                        padding='40px 0 0 0'
                        margin='80px auto 0'
                    >
                        {heading1}
                    </Heading>
                </Grid>
                <Grid  item xs={10} sm={10} md={8} lg={8} xl={8} style={{ margin: '0 auto'}}>
                    <Heading
                        color='#212A3D'
                        fontWeight='bold'
                        textAlign='center'
                        fontSize='3rem'
                        padding='60px 0 0 0'
                    >
                        {heading2}
                    </Heading>
                </Grid>
                <Grid item xs={10} sm={10} md={8} lg={8} xl={8} style={{ margin: '0 auto'}}>
                    <Heading
                        color='#394357'
                        fontWeight='normal'
                        textAlign='center'
                        fontSize='1rem'
                        padding='10px 0 0 0'
                        margin='0 auto'
                    >
                        {heading3}
                    </Heading>
                </Grid>
            </Grid>
            <Grid spacing={2} container style={{ marginTop: '120px' }}>
                <Grid item xs={false} md={2}  style={{ padding: '0' }}/>
                <Category text={cat1} />
                <Category text={cat2} />
                <Grid item xs={false} md={2}  style={{ padding: '0' }}/>
            </Grid>
            <Grid spacing={2} container style={{ marginBottom: '150px' }}>
                <Grid item xs={false} md={2} style={{ padding: '0' }} />
                <Category text={cat3} />
                <Category text={cat4} />
                <Grid item xs={false} md={2}  style={{ padding: '0' }}/>
            </Grid>
        </Container>
    );
}

export default Categories;