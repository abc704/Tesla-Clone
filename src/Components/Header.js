import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [burgerStatus, setburgerStatus] = useState(false);

    return (
        <Container>
            <a href="/#">
                <img src='/images/logo.svg' alt=''></img>
            </a>
            <Menu>
                <a href="/#">Model S</a>
                <a href="/#">Model 3</a>
                <a href="/#">Model X</a>
                <a href="/#">Model Y</a>
                <a href="/#">Solar Panels</a>
                <a href="/#">Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href="/#">Shop</a>
                <a href="/#">Account</a>
                <CustomMenu onClick={() => setburgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setburgerStatus(false)} />
                </CloseWrapper>
                <li><a href="/#">Existing Inventory</a></li>
                <li><a href="/#">Used Inventory</a></li>
                <li><a href="/#">Trade-In</a></li>
                <li><a href="/#">Test Drive</a></li>
                <li><a href="/#">CyberTruck</a></li>
                <li><a href="/#">Roadaster</a></li>
                <li><a href="/#">Semi</a></li>
                <li><a href="/#">Charging</a></li>
                <li><a href="/#">PowerWall</a></li>
                <li><a href="/#">Commercial Energy</a></li>
                <li><a href="/#">Utilities</a></li>
                <li><a href="/#">Support</a></li>
                <li><a href="/#">Investors Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-item: center;
    flex: 1;
    justify-content: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
        padding: 8px 12px;
        border-radius: 14px;
        flex-wrap: nowrap;
        margin: 0 4px;
        transition: color .33s ease,background-color .33s ease;

    }
    a:hover{
        background-color: hsla(0,0%,0%,.05);
    }

    @media (max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items-center;


    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 15px;
        padding-top: 3px;
    }
`

const CustomMenu = styled(MenuIcon)`

    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`