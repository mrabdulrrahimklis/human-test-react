import React from "react";
import Categories from "../components/blocks/Categories";
import { DigitalChannel } from "../components/blocks/DigitalChannels";
import { MainBlock } from "../components/blocks/MainBlock";
import { Implementation } from "../components/blocks/Implementation";
import { CompanyPlatform } from "../components/blocks/CompanyPlatform";
import { Clients } from "../components/blocks/Clients";
import { Footer } from "../components/blocks/Footer";

const HomePage = () => {
    return(
        <>
            <MainBlock />
            <Categories />
            <DigitalChannel />
            <Implementation />
            <CompanyPlatform />
            <Clients />
            <Footer />
        </>
    )
}

export default HomePage;