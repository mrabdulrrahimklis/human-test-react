import { Heading } from "../styled";
import { Hex } from "../hex";

export const DigitalItem = ({ text, icon }) => {
    return (
        <>
            <Hex hexagonStyle={{ background: 'white', margin: '0 auto 50px' }} icon={icon} iconStyle={{ color: '#076188', fontSize: '28px', fontWeight: 'bold', lineHeight: '35px' }} />
            <Heading fontSize='15px' fontWeight='300' lineHeight='20px' textAlign={'center'} margin={'0 auto'}>
                {text}
            </Heading>
        </>
    )
}