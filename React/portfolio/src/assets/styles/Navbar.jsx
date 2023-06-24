import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarStyle = {
    Nav: styled.nav`
        background-color: rgba(43, 66, 85, 0);
        position: fixed !important;
        top: 0;
        z-index: 1;
        width: 100%;
        border-bottom: #929CC5 solid 1px;
    `,

    TextAC: styled.a `
        font-weight: 100;
        font-size: 40px;
        font-style: italic;
        color: white;
    `,
    
    NavLinks: styled.a`
        position: relative;
        color: #fff;
        text-decoration: none;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 2px;
            left: 0;
            background-color: #D89BF2;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
        }
          
        &:hover:before {
            visibility: visible;
            transform: scaleX(1);
        }
          
         &:hover {
            color: #f0f0f0 !important;
            cursor: pointer;
        }
    `
}

export default NavbarStyle