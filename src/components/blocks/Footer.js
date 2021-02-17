import { Heading, Layout, Img } from "../styled";
import FooterImage from '../../assets/image2.png'
import { Box, Grid } from "@material-ui/core";
import ArrowImage from '../../assets/arrow.png';
import HexaImg from '../../assets/Hexagon.png'
import In from '../../assets/in.png';
import Fb from '../../assets/fb.png';
import Tw from '../../assets/twitter.png';

export const Footer = () => {
    return(
        <Layout background={`linear-gradient(to bottom, #071F3A 0%, #071F3A 30%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 100%), url(${FooterImage})`}>
            <Box width={"60vw"} margin={'0 auto'} style={{ background: 'white' }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding:'50px' }}>
                        <Heading color={'#17A4A4'} fontSize={'12px'}>
                            DIVE DEEPER
                        </Heading>
                        <Layout style={{ position: 'relative', top: '100px' }}>
                            <Heading fontSize={'5vw'} fontWeight={'900'} color={'#212A3D'}>
                                Platform
                            </Heading>
                            <Heading fontSize={'5vw'} fontWeight={'900'} color={'#17A4A4'} style={{ position: 'relative', top: '-130px' }}>
                                Acquire
                                <Img src={ArrowImage} alt={'image'} />
                            </Heading>
                        </Layout>
                    </Grid>
                    <Grid item xs={0} sm={0} md={6} lg={6} xl={6} style={{ background: `url(${HexaImg})`, marginTop: '20px', backgroundRepeat: 'no-repeat' }} />
                </Grid>
            </Box>
            <Box width={'60vw'} margin={'0 auto'} padding={'20px'} display={'flex'} justifyContent={'space-between'}>
                <Layout background={'rgba(0,0,0,0)'}>
                    <Heading color={'white'} fontSize={'16px'}>
                        © COMPANY Privacy policy
                    </Heading>
                </Layout>
                <Layout background={'rgba(0,0,0,0)'}>
                    <img src={In} alt={'in'} />
                    <img src={Fb} alt={'in'} />
                    <img src={Tw} alt={'in'} />
                </Layout>
            </Box>
        </Layout>
    )
}