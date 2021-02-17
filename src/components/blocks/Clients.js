import {Heading, Layout} from "../styled";
import {Box, Grid} from "@material-ui/core";
import {
    clientsDesc,
    companyPlatform,
    connectedInsurance,
    continents,
    difference,
    ISO,
    partOfDigitalTrans
} from "../../constants";
import MapImage from '../../assets/map.png'
import Icon1 from '../../assets/logo-1.png'
import Icon2 from '../../assets/logo-2.png'
import Icon3 from '../../assets/logo-3.png'
import Icon4 from '../../assets/logo-4.png'
import Icon5 from '../../assets/logo-5.png'
import Icon6 from '../../assets/logo-6.png'
import Icon7 from '../../assets/logo-7.png'
import Icon8 from '../../assets/logo-8.png'
import Icon9 from '../../assets/logo-9.png'
import Icon10 from '../../assets/logo-10.png'
import Icon11 from '../../assets/logo-11.png'
import Icon12 from '../../assets/logo-12.png'
import TUV from '../../assets/tuv_icon.png'

export const Clients = () => {
    return(
        <Layout background='#071F3A 90%' >
            <Grid xs={10} sm={10} md={8} xl={6} lg={5} style={{ margin: '0 auto' }}>
                <Heading color={'white'} textAlign={'center'} padding={'4vw 0 0'}>
                    {continents}
                </Heading>
                <Heading color={'white'} textAlign={'center'} margin={'0'} fontSize={'22px'} fontWeight={'normal'} color={'#17A4A4'}>
                    {connectedInsurance}
                </Heading>
            </Grid>
            <Grid xs={10} sm={10} md={7} xl={5} lg={4} style={{ margin: '0 auto' }}>
                <Heading color={'white'} textAlign={'center'} margin={'10px 0 0 0'} fontSize={'12px'} fontWeight={'normal'} color={'gray'}>
                    {clientsDesc}
                </Heading>
            </Grid>
            <Layout
                height={'400px'}
                style={{
                    backgroundImage: `url(${MapImage})`,
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                    backgroundSize: 'auto 100%',
                    backgroundRepeat: 'no-repeat',
                }}
                background={'#071F3A 90%'}
                margin={'0 150px'}
            >
            </Layout>
            <Layout margin={'0'} background={'rgba(0,0,0,0)'}>
                <Heading color={'white'} textAlign={'center'} margin={'0'}>
                    {companyPlatform}
                </Heading>
                <Heading color={'#17A4A4'} textAlign={'center'} margin={'0'} fontWeight={'400'}>
                    {partOfDigitalTrans}
                </Heading>
            </Layout>
            <Grid container style={{ height: '100px', width: '50vw', margin: '100px auto 0' }}>
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon1})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon2})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon3})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon4})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon5})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon6})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
            </Grid>
            <Grid container style={{ height: '100px', width: '50vw', margin: '0 auto' }}>
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon7})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon8})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon9})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon10})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon11})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{ backgroundImage: `url(${Icon12})`, objectFit: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '20px' }} />
            </Grid>
            <Layout width={'50vw'} margin={'100px auto 0'} background>
                <Grid container display={'flex'} justifyContent={'flex-start'}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Heading fontSize={'28px'} color={'white'}>
                            ISO <br/>certified
                        </Heading>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Heading fontSize={'14px'} color={'white'}>
                            {difference}
                        </Heading>
                    </Grid>
                    <Grid item xs={0} sm={0} md={0} lg={4} xl={4}>
                        <img src={TUV} alt={'TUV'} />
                    </Grid>
                </Grid>
            </Layout>
            <Layout width={'50vw'} margin={'5vw auto 0'} padding={'0 0 100px'} background>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Heading fontSize={'28px'} color={'white'}>
                            We’ve won <br/>already
                        </Heading>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Heading fontSize={'14px'} color={'white'} lineHeight={'25px'}>
                            Company is announced as the leading company in the Insurance industry for Customer Engagement by Best Review magazine in the USA. <br/> <br/>
                            Implementation of Company technology got us into the award winning business Triglav’s UBI smartphone app is named the #1 app in Europe in 2018 by the world’s most comprehensive mobile insurance study created by PTOLEMUS <br/> <br/>
                            UBI smartphone app is named the Top #3 Mobile Insurance Proposition in Asia, Middle-East and Africa, in 2018, by PTOLEMUS.
                        </Heading>
                    </Grid>
                </Grid>
            </Layout>
        </Layout>
    )
}