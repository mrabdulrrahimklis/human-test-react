import { Container, Grid } from "@material-ui/core";
import { Heading } from "../styled";
import { cat5, cat6, digit1, digit2, digit3 } from "../../constants";
import { DigitalItem } from "../styled/DigitalItem";

export const DigitalChannel = () => {
    return (
        <div style={{ background: 'linear-gradient(0deg, rgba(7, 31, 58, 0.9), rgba(7, 31, 58, 0.9))' }}>
            <Container >
                <Grid container>
                    <Grid item xs={8} style={{ margin: '80px auto 0'}}>
                        <Heading textAlign='center' fontSize='40px' fontWeight='600' margin='0 auto' color={'white'}>
                            {cat5}
                        </Heading>
                    </Grid>
                    <Grid item xs={8} style={{ margin: '0 auto'}}>
                        <Heading textAlign='center' fontSize='12px' fontWeight='normal' color={'white'}>
                            {cat6}
                        </Heading>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8} md={4} style={{ color: 'white', margin: '100px auto'}}>
                        <DigitalItem icon={1} text={digit1} />
                    </Grid>
                    <Grid item xs={8} md={4} style={{ color: 'white', margin: '100px auto'}}>
                        <DigitalItem icon={2} text={digit2} />
                    </Grid>
                    <Grid item xs={8} md={4} style={{ color: 'white', margin: '100px auto'}}>
                        <DigitalItem icon={3} text={digit3} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}