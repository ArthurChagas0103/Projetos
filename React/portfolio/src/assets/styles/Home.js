import styled, { keyframes } from "styled-components";

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

const animacaoSoftSkills = keyframes`
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
`;

const HomeStyle = {
  Banner: styled.div`
    width: 50%;
    height: 200px;
    background: rgb(95, 81, 190);
    background: linear-gradient(90deg, rgba(95, 81, 190, 1) 0%, rgba(127, 117, 186, 1) 100%);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    border-radius: 10px;
  `,

  TextosBanner: styled.div`
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    color: white;

    @media (min-width: 480px) and (max-width: 900px) {
      left: 30px;
    }

    @media (min-width: 360px) and (max-width: 480px) {
      left: 20px;
    }

    @media (min-width: 320px) and (max-width: 360px) {
      left: 50%;
      transform: translateY(-40%);
    }

    @media (max-width: 320px) {
      left: 16%;
      transform: translateY(-90%);
    }
  `,

  TextoArthurChagasBanner: styled.h1`
    font-weight: 300;
    font-size: 2.5rem;

    @media (min-width: 900px) and (max-width: 1200px) {
      font-size: 30px;
    }

    @media (min-width: 480px) and (max-width: 900px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 15px;
    }
  `,

  TextoDesenvolvedorBanner: styled.h6`
    font-weight: 300;
    font-size: 1rem;
    font-style: italic;
    text-align: center;

    @media (min-width: 480px) and (max-width: 900px) {
      font-size: 10px;
    }

    @media (min-width: 360px) and (max-width: 480px) {
      font-size: 8px;
    }

    @media (max-width: 360px) {
      font-size: 8px;
    }
  `,

  ImageCode: styled.img`
    position: absolute;
    left: 80%;
    top: 50%;
    transform: translateY(-50%);

    @media (min-width: 900px) and (max-width: 1200px) {
      position: absolute;
      left: 80%;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
    }

    @media (min-width: 480px) and (max-width: 900px) {
      position: absolute;
      left: 80%;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
    }

    @media (min-width: 360px) and (max-width: 480px) {
      position: absolute;
      left: 75%;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
    }

    @media (max-width: 360px) {
      position: absolute;
      left: 50%;
      translate: -50%;
      top: 70%;
      transform: translateY(-70%);
      width: 40px;
    }
  `,

  CarouselItem: styled.div`
    background: rgb(72, 54, 191);
    background: linear-gradient(45deg, rgba(18, 60, 115, 1) 0%, rgba(216, 155, 242, 1) 100%, rgba(72, 54, 191, 1) 0%);
    height: 500px;
    position: relative;
    animation: 10s linear infinite alternate ${animacaoCores};
    background-size: 400% 400%;
  `,

  ContainerSoftSkills: styled.div`
    display: grid;
    grid-template-columns: 15% 15% 15% 15%;
    grid-template-rows: 100%;
    justify-content: center;
    justify-items: center;
    margin-top: 30px;
    cursor: pointer;
  
    @media (min-width: 380px) and (max-width: 730px) {  
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
      row-gap: 10px;
    };
  
    @media (max-width: 380px) {
      margin-top: 30px;
    }
  `,

  SoftSkills: styled.div`
    border-radius: 10px;
    background-color: #8284c050;
    width: 70%;
    height: 200px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: grid;
    align-items: center;
    justify-items: center;

    &:hover {
      .TextoSoftSkills {
        display: grid;
        animation-name: ${animacaoSoftSkills};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      };

      .fa {
        opacity: 0.1;
        color: white;
      }
    }

    @media (min-width: 1150px) and (max-width: 1300px) {
      width: 80%;
      height: 150px;
    }
  
    @media (min-width: 730px) and (max-width: 1150px) {
      width: 80%;
      height: 130px;
    }
  
    @media (max-width: 730px) {
      width: 80%;
      height: 120px;
    }
  `,

  IconesSoftSkills: styled.i`
    color: #8284c0;
    position: absolute;
    font-size: 80px;
  `,

  TextoSoftSkills: styled.div`
    border-radius: 10px;
    background-color: #8284c0cd;
    display: none;
    align-items: center;
    justify-items: center;
    font-size: 20px;
    cursor: pointer;
    color: white;
    width: 100%;
  `,

  LinhaCinza: styled.div`
    width: 100%;
    height: 350px;
    background-color: #8284c050;
    margin-top: 120px;
    display: grid;
    justify-items: center;
    align-items: center;

    @media (max-width: 525px) {
      margin-top: 240px;
    }
  `,

  DivEu: styled.div`
    width: 40%;
    background: linear-gradient(90deg, rgba(95, 81, 190, 1) 0%, rgba(127, 117, 186, 1) 100%);
    position: absolute;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    text-align: center;
    gap: 50px;
    flex-wrap: wrap;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    visibility: hidden;

    @media (min-width: 770px) and (max-width: 1200px) {  
      width: 70%;
      height: 500px;
      text-align: center;
      flex-wrap: wrap;
    }

    @media (min-width: 525px) and (max-width: 770px) {
      width: 80%;
      height: 450px;
    }

    @media (min-width: 400px) and (max-width: 525px) {
      width: 80%;
      height: 600px;
      gap: 0;
    }

    @media (max-width: 400px) {
      width: 80%;
      height: 650px;
      gap: 0;
    }
  `,

  ImgEu: styled.img`
    height: 60%;
    border-radius: 10px;

    @media (max-width: 525px) {
      height: 50%;
    }
  `,

  DivTexto: styled.div`
    width: 40%;
    text-align: justify;
    color: white;

    @media (max-width: 525px) {
      width: 80%;
    }
  `,

  TextoArthur: styled.h3`
    text-align: center;
  `,

  TextoEstudante: styled.h6`
    font-weight: 200;
  `,

  DivDavid: styled.div`
    display: grid;
    justify-items: center;
    margin-top: 150px;

    @media(max-width: 525px) {
      margin-top: 200px;
    }
  `,

  TextoDavid: styled.h2`
    font-weight: 200;
    width: 50%;
    text-align: center;
  `,

  CliqueQuadrados: styled.h3`
    text-align: center; 
    font-weight: 400; 
    margin-top: 100px;
  `,

  DivHardSkills: styled.div`
    display: grid;
    justify-items: center;
    margin-top: 100px;
    grid-template-columns: 33.3% 33.3% 33.3%;

    @media (max-width: 640px) {
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;
    }
  `,

  HardSkills: styled.div`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: #4836bf60;
    transform: rotate(45deg);
    display: grid;
    justify-items: center;
    align-items: center;

    .IconHardSkills {
      transform: rotate(-45deg);
      color: white !important;
      font-size: 60px;
      fill: white
    }

    &:hover {
      background-color: #4836bf4b;
      cursor: pointer;
    }

    @media (max-width: 420px) {
      width: 90px;
      height: 90px;
    }
  `,

  HardSkillsBottom: styled.div`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: #4836bf60;
    transform: rotate(45deg);
    display: grid;
    justify-items: center;
    align-items: center;
    margin-left: 100%;

    .IconHardSkills {
      transform: rotate(-45deg);
      color: white !important;
      font-size: 60px;
    }

    &:hover {
      background-color: #4836bf4b;
      cursor: pointer;
    }

    @media (max-width: 640px) {
      margin-left: 0%;
    }

    @media (max-width: 420px) {
      width: 90px;
      height: 90px;
    }
  `,

  DivCards: styled.div`
    width: 100%;
    height: calc(18rem + 160px);
    background-color: #8284c016;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
    text-align: justify;
    flex-wrap: wrap;

    @media(max-width: 625px) {
      margin-top: 250px;
    }
  `,

  Cards: styled.div`
    width: 20rem;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    overflow: auto;

    .card-img-top {
      width: 100%;
      height: 250px;
    }
  `,


  TituloCard: styled.h5`
    text-align: center;
    margin-bottom: 20px;
  `,
};

export default HomeStyle;