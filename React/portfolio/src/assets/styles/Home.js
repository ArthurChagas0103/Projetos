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
  `
};

export default HomeStyle;