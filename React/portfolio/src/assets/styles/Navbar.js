import styled from "styled-components";

const NavbarStyle = {
    Nav: styled.nav `
        background-color: rgba(43, 66, 85, 0);
        position: fixed !important;
        top: 0;
        z-index: 1;
        width: 100%;
        border-bottom: #929CC5 solid 1px;

        &.scrolled {
            background-color: rgb(103, 89, 194);
        }
    `,

    NavbarButtonResponsive: styled.button `
        margin-left: 10px;
    `,

    Barras: styled.i `
        color: white;
        font-size: 30px;
        position: relative;
    `,

    TextAC: styled.a `
        font-weight: 100;
        font-size: 40px;
        font-style: italic;
        color: white;
        margin-right: 50px;

        &:hover {
            color: #f0f0f0 !important;
            cursor: pointer;
        }
    `,
    
    NavLinks: styled.a `
        position: relative;
        color: #fff;
        text-decoration: none;
        margin-right: 50px;
        margin-top: 20px;

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

        &.ativo:before {
            visibility: visible;
            transform: scaleX(1);
        }
    `,

    SearchWrapper: styled.div `
        position: relative;
        top: 4px
    `,

    Search: styled.input `
        border-radius: 50px;
        padding-right: 30px;
    `,

    Lupa: styled.i `
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #929CC5;
        font-size: 20px;
        cursor: pointer;
    `,

    Scrolled: styled.div `
        background-color: rgb(103, 89, 194) !important;
    `
}

export default NavbarStyle