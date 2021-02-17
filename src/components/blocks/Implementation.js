import React from "react";
import { Heading } from "../styled";
import Carousel from 'react-material-ui-carousel'
import {Box} from "@material-ui/core";
import mapWhite from "../../assets/mapWhite.png";
import mapGreen from "../../assets/mapGreen.png";
import triglav from "../../assets/triglav.png";
import secondGreen from "../../assets/secondGreen.png"
import secondWhite from "../../assets/secondWhite.png"
import triglavIcon from "../../assets/triglav_osiguranje_logo.png"
import aigIcon from "../../assets/aig_logo.png"
import cars from "../../assets/cars.png";
import {Slide} from "../styled/Slide";
import {leftSlideHeader1, leftSlideText1, slideHeader1, slideHeader2, slideText1, slideText2} from "../../constants";

export const Implementation = () => {
    return(
        <div style={{ background: 'linear-gradient(to bottom,  rgba(7, 31, 58, 0.9) 0%, rgba(7, 31, 58, 0.9) 70%,#fff 70%,#fff 100%)', padding: '10px', boxShadow: '' }}>
            <Heading color='white' textAlign='center'>
                Successful <br /> implementation
            </Heading>
            <Box
                style={{
                    margin: '0 auto',
                    position: 'relative',
                }}>
                <Carousel autoPlay={false}>
                    <Slide
                        mapGreen={mapGreen}
                        mapWhite={mapWhite}
                        adImage={triglav}
                        iconImage={triglavIcon}
                        headerText={slideHeader1}
                        text={slideText1}
                    />
                    <Slide
                        mapGreen={secondGreen}
                        mapWhite={secondWhite}
                        adImage={cars}
                        iconImage={aigIcon}
                        headerText={slideHeader2}
                        text={slideText2}
                        leftHeader={leftSlideHeader1}
                        leftText={leftSlideText1}
                    />
                </Carousel>
            </Box>
        </div>
    )
}