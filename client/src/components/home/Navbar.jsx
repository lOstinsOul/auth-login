import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 55px 130px 0 130px ;
`
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(temp => (
                    <Container>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;