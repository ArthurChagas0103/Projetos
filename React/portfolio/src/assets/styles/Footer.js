import styled from 'styled-components';

const FooterStyle = {
  Footer : styled.div`
    width: 100%;
    height: 50px;
    background-color: #4836bf92;
    margin-top: 200px;

    @media (min-width: 1077px) and (max-width: 1840px) {
      margin-top: 700px;
    }

    @media (min-width: 707px) and (max-width: 1077px) {
      margin-top: 1200px;
    }

    @media (max-width: 707px) {
      margin-top: 2200px;
    }
  `,
}

export default FooterStyle;