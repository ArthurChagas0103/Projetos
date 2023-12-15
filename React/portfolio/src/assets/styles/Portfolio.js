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

const PortfolioStyle = {
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

    TextoProjetos: styled.h1`
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

    ImagemProjetoStyle: styled.img`
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

    DivPrincipal: styled.div`
        #divProjetos{
            width: 90%;
            margin-top: 50px;
            height: 3450px;
            background-color: #4836bf7c;
            position: relative;
            left: 50%;
            translate: -50%;
            border-radius: 10px;
        }
        
        .projeto{
            width: 90%;
            background-color: whitesmoke;
            position: relative;
            left: 50%;
            translate: -50%;
            margin-top: 50px;
            border-radius: 10px;
            display: grid;
            justify-items: center;
            top: 50px;
        }
        
        .tituloProjeto{
            text-align: center;
            margin-top: 20px;
        }
        
        .textProjeto{
            font-weight: 200;
            text-align: justify;
            width: 80%;
            margin-top: 20px;
        }
        
        .imgProjeto{
            width: 50%;
            margin-top: 20px;
            border-radius: 10px;
        }
        
        .btn{
            margin-top: 30px;
            margin-bottom: 30px;
            width: 150px;
            height: 50px;
            background-color: #4836bf7c !important;
            border: #4836bf7c !important;
        }
        
        .btn:hover{
            background-color: #4836bfa5 !important;
        }
        
        #tranca{
            height: 250px;
            width: 200px;
        }
        
        #salario{
            height: 250px;
            width: 200px;
        }

        @media (min-width: 1700px) and (max-width: 1800px) {
            #divProjetos{
                width: 90%;
                margin-top: 50px;
                height: 3400px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 1550px) and (max-width: 1700px) {
            #divProjetos{
                width: 90%;
                margin-top: 50px;
                height: 3300px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 1350px) and (max-width: 1550px) {
            #divProjetos{
                width: 90%;
                margin-top: 50px;
                height: 3250px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 710px) and (max-width: 1350px) {
            #divProjetos{
                width: 90%;
                margin-top: 50px;
                height: 3150px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 520px) and (max-width: 710px) {
            #divProjetos{
                width: 90%;
                margin-top: 50px;
                height: 3300px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 435px) and (max-width: 520px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 3650px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 360px) and (max-width: 435px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 3900px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        } 
        
        @media (min-width: 343px) and (max-width: 360px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 4000px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 325px) and (max-width: 343px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 4100px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 306px) and (max-width: 325px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 4200px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        }
        
        @media (min-width: 286px) and (max-width: 306px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 4300px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        } 
        
        @media (max-width: 286px) {
            .imgProjeto{
                width: 80%;
                margin-top: 20px;
                border-radius: 10px;
            }
        
            #divProjetos{
                width: 100%;
                margin-top: 50px;
                height: 4400px;
                background-color: #4836bf7c;
                position: relative;
                left: 50%;
                translate: -50%;
                border-radius: 10px;
            }
        } 
    `,
}

export default PortfolioStyle;