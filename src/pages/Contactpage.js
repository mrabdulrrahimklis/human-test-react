import { AppMenu } from "../components/shared/AppMenu";
import { Box, Grid, TextField, Button, CircularProgress } from "@material-ui/core";
import { Heading } from "../components/styled";
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import {contactMessage} from "../constants";
import bgRect from '../assets/Rectangle.png'

const ContactPage = (customProps) => {
    return (
        <>
            <AppMenu btnBgColor={'white'} textColor={'#17A4A4'} menuColor={'#212A3D'} />
            <Grid container style={{ margin: '0 auto', width: '80vw' }}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Box padding={'0 50px 0'}>
                        <Box>
                            <Heading
                                fontSize='7vw'
                                color='#929FAD'
                            >
                                Let's get
                            </Heading>
                            <Heading
                                fontSize='10vw'
                                color='#212A3D'
                                style={{ position: 'absolute', top: '80px' }}
                            >
                                in touch
                            </Heading>
                        </Box>
                        <Heading fontSize={'12px'} color={'#17A4A4'}>
                            OFFICES
                        </Heading>
                        <Heading fontSize={'22px'} color={'#212A3D'}>
                            Zagreb
                        </Heading>
                        <Heading fontSize={'22px'} color={'gray'}>
                            Koranska 1c, 10000 Zagreb, Croatia
                        </Heading>
                        <Heading fontSize={'22px'} color={'#17A4A4'}>
                            +385 1 2345 578 <br/> <br/>
                            +385 1 2345 679
                        </Heading>
                        <Heading fontSize={'22px'} color={'#212A3D'}>
                            London
                        </Heading>
                        <Heading fontSize={'22px'} color={'gray'}>
                            Vienna Street 21, 1210 London, UK
                        </Heading>
                        <Heading fontSize={'22px'} color={'#212A3D'}>
                            Los Angeles
                        </Heading>
                        <Heading fontSize={'22px'} color={'gray'}>
                            Gold Street #3026, CA 94108, Los Angeles, USA
                        </Heading>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop: '50px', background: `url(${bgRect})`, padding: '50px' }}>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            message: ''
                        }}
                        onSubmit={(values => {
                            console.log(values)
                        })}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                handleBlur,
                                handleChange,
                                isSubmitting
                            } = props
                            return (
                                <Form style={{ margin: '0 auto' }}>
                                    <Grid container direction='column'>
                                        <Grid item xl={6} lg={6} md={6} sm={10} xs={10} style={{ margin: '30px auto', width: '100%' }}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                name='password'
                                                label='Password'
                                                value={values.password}
                                                type='password'
                                                error={!!(errors.password && touched.password)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={
                                                    errors.email && touched.email
                                                        ? 'Password is required'
                                                        : ''
                                                }
                                            />
                                        </Grid>
                                        <Grid item  item xl={6} lg={6} md={6} sm={10} xs={10} style={{ margin: '30px auto', width: '100%' }}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                name='email'
                                                label='Work Email'
                                                value={values.email}
                                                type='email'
                                                error={!!(errors.email && touched.email)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={
                                                    errors.email && touched.email
                                                        ? 'Email is required and it should be in valid format'
                                                        : ''
                                                }
                                            />
                                        </Grid>
                                        <Grid item  item xl={6} lg={6} md={6} sm={10} xs={10} style={{ margin: '30px auto', width: '100%' }}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                name='message'
                                                label='Message'
                                                multiline
                                                rows={4}
                                                value={values.message}
                                                type='message'
                                                error={!!(errors.message && touched.message)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={
                                                    errors.email && touched.message
                                                        ? 'Message is required and it should be in valid format'
                                                        : ''
                                                }
                                            />
                                        </Grid>
                                        <Grid item  item xl={6} lg={6} md={6} sm={10} xs={10} style={{ margin: '30px auto', width: '100%' }}>
                                            <Heading fontWeight={'100'} fontSize={'16px'} margin={'50px 0'}>
                                                {contactMessage}
                                            </Heading>
                                        </Grid>
                                        <Grid item  item xl={6} lg={6} md={6} sm={10} xs={10} style={{ margin: '30px auto', width: '100%' }}>
                                            <Box
                                                display='flex'
                                                flexDirection='column'
                                                alignItems='center'
                                                justifyContent='center'
                                                marginTop={2}
                                            >
                                                <Button
                                                    type='submit'
                                                    variant='contained'
                                                    color='primary'
                                                    disabled={isSubmitting}
                                                    style={{ width: '100%' }}
                                                >
                                                    {customProps.buttonText
                                                        ? customProps.buttonText
                                                        : 'Submit'}
                                                </Button>
                                                <code>{isSubmitting}</code>
                                                {props.isSubmitting ? (
                                                    <CircularProgress style={{ marginTop: '10px' }} />
                                                ) : null}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactPage;