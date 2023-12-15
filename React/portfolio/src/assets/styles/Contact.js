import styled, { keyframes } from 'styled-components';

const animacaoCores = keyframes`
  0% {
    background-position: 0% 60%;
  }
  
  50% {
    background-position: 55% 50%;
  }
  
  100% {
    background-position: 0% 10%;
  }
`;

const ContactStyle = {
    BackgroundBanner: styled.div`
        background: rgb(72, 54, 191);
        background: linear-gradient(45deg, rgba(18, 60, 115, 1) 0%, rgba(216, 155, 242, 1) 100%, rgba(72, 54, 191, 1) 0%);
        height: 500px;
        position: relative;
        animation: 10s linear infinite alternate ${animacaoCores};
        background-size: 400% 400%;
    `,

    Banner: styled.div`
        width: 50%;
        height: 200px;
        background: rgb(95, 81, 190);
        background: linear-gradient(90deg, rgba(95, 81, 190, 1) 0%, rgba(127, 117, 186, 1) 100%);
        position: absolute;
        left: 50%;
        translate: -50%;
        top: 150px;
        border-radius: 10px;
    `,

    Textos: styled.div`
        position: absolute;
        top: 50%;
        left: 100px;
        transform: translateY(-50%);

        @media (min-width: 480px) and (max-width: 900px) {
            left: 30px;
        }

        @media (max-width: 480px) {
            top: 30%;
            translate: -50%;
            left: 50%;
            transform: translateY(-40%);
        }
    `,

    TextoContato: styled.h1`
        font-weight: 300;
        color: white;

        @media (min-width: 900px) and (max-width: 1200px) {
            font-size: 30px;
        }

        @media (min-width: 480px) and (max-width: 900px) {
            font-size: 20px;
        }

        @media (max-width: 480px) {
            position: absolute;
            top: 30%;
            translate: -50%;
            left: 50%;
            transform: translateY(-40%);
        }
    `,

    ImagemContatoStyle: styled.img`
        position: absolute;
        left: 80%;
        top: 50%;
        transform: translateY(-50%);
        width: 70px;

        @media (min-width: 900px) and (max-width: 1200px) {
            width: 60px;
        }

        @media (min-width: 480px) and (max-width: 900px) {
            width: 40px;
        }

        @media (max-width: 480px) {
            left: 50%;
            translate: -50%;
            top: 70%;
            transform: translateY(-70%);
            width: 40px;
        }
    `,

    FormContato: styled.form`
        background-color: #6B5EC2;
        box-shadow: -30px -20px #4836bf79;
        margin-top: 150px;
        width: 50%;
        height: 510px;
        position: relative;
        left: 50%;
        translate: -50%;
        border-radius: 10px;
        color: white;

        div {
            margin-left: 30px;
            margin-right: 30px;
        }

        @media (max-width: 1532px) {
            margin-top: 50px;
            width: 90%;
            height: 550px;
        }
    `,

    DivButtons: styled.div`
        position: absolute;
        left: 50%;
        translate: -50%;

        @media (min-width: 1132px) {
            .btn-danger{
                margin-left: 20px;
            }
        }
    `,

    Buttons: styled.button`
        width: 150px;
        height: 50px;
    `,
}

export default ContactStyle;