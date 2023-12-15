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
    DivPrincipal: styled.div`
        .linha {
            margin-top: 70px;
        }

        #imgsEu1 {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 80px;
            border-radius: 10px;
        }
        
        #imgsEu2 {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 120px;
            border-radius: 10px;
            transform: translateX(-100%);
        }
        
        #fundoImgsEu1 {
            background-color: #4836bf77;
            width: 200px;
            position: relative;
            left: 40%;
            translate: -40%;
            border-radius: 10px;
            margin-top: 30px;
        }
        
        #fundoImgsEu2 {
            background-color: #4836bf77;
            width: 200px;
            position: relative;
            left: 60%;
            translate: -60%;
            border-radius: 10px;
            margin-top: 50px;
        }
        
        #redesSociais {
            background-color: #4836bf21;
            margin-top: 30px;
            width: 30%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
            left: 50%;
            translate: -50%;
            gap: 20px;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        }
        
        .imgsRedesSociais {
            width: 100px;
        }
        
        #button {
            background-color: #4836BF;
            border: #4836BF;
            position: relative;
            left: 50%;
            translate: -50%;
            margin-top: 30px;
            font-weight: 200;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 40px;
            padding-right: 40px;
            font-size: 20px;
            border-radius: 10px;
        }
        
        #button:hover {
            background-color: #4836bfbc;
        }
        
        #baixar {
            text-decoration: none;
        }

        .aspas {
            color: #9B59B6;
            font-size: 45px;
            position: relative;
            left: 50%;
            translate: -50%;
            margin-top: 30px;
        }
    `,
    
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

    TextoSobre: styled.h1`
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

    ImagemSobreStyle: styled.img`
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

    DivAspas: styled.div`
        .aspas {
            color: #9B59B6;
            font-size: 45px;
            position: relative;
            left: 50%;
            translate: -50%;
            margin-top: 30px;
        }
    `,

    DivTextoSobreMim: styled.div`
        #textSobreMim {
            font-weight: 200;
            color: #818181;
            text-align: justify;
            width: 50%;
            position: relative;
            left: 50%;
            translate: -50%;
            margin-top: 30px;
            background:
                linear-gradient(to right, #4836BF 2px, transparent 4px) 0 100%,
                linear-gradient(to right, #4836BF 2px, transparent 4px) 0 100%,
                linear-gradient(to left, #4836BF 2px, transparent 4px) 100% 0,
                linear-gradient(to left, #4836BF 2px, transparent 4px) 100% 0,
                linear-gradient(to bottom, #4836BF 2px, transparent 4px) 100% 0,
                linear-gradient(to bottom, #4836BF 2px, transparent 4px) 100% 0,
                linear-gradient(to top, #4836BF 2px, transparent 4px) 0 100%,
                linear-gradient(to top, #4836BF 2px, transparent 4px) 0 100%;
            background-repeat: no-repeat;
            background-size: 50% 50%;
            padding: 30px;
        }
    `,
}

export default ContactStyle;