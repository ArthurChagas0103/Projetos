import styled from 'styled-components';

const ErrorStyle = {
  Container : styled.div`
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      font-family: 'Dosis', sans-serif;
      font-weight: 300;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `,

  BackgroundPurple : styled.div`
    background: url(http://salehriaz.com/404Page/img/bg_purple.png);
    background-repeat: repeat-x;
    background-size: cover;
    background-position: left top;
    height: 100vh;
    overflow: hidden;
  `,

  Stars: styled.div`
    background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
    background-repeat: repeat;
    background-size: contain;
    background-position: left top;
  `,

  CentralBody: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50%;
    transform: translateY(-50%);
    text-align: center;

    @media only screen and (max-width: 600px){
      padding-top: 25%;
    }
  `,

  Objects: styled.div`
  `,

  Image404: styled.img`
    position: relative;
    z-index: 100;
    pointer-events: none;
    width: 300px
  `,

  ButtonGoHome : styled.a`
    position: relative;
    z-index: 200;
    margin: 15px auto;
    width: 200px;
    padding: 10px 15px;
    border: 1px solid #ffcb39;
    border-radius: 100px;
    font-weight: 400;
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 11px;
    cursor: pointer;

    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #ffcb39;
      color: #fff;
      transform: scale(1.05);
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
    }
  `,

  RocketImage: styled.img`
    z-index: 95;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    width: 40px;
    animation: rocket-movement 200s linear infinite both running;

    @keyframes rocket-movement {
      0% {
        transform: translateX(-50px);
      }
      100% {
        transform: translate(1200px, -600px);
      }
    }
  `,

  EarthMoon: styled.div`
  `,

  EarthImage: styled.img`
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 90;
    width: 100px;
  `,

  MoonImage: styled.img`
    position: absolute;
    top: 12%;
    left: 25%;
    width: 80px;
  `,

  BoxAstronaut: styled.div`
    z-index: 110 !important;
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;

    @keyframes move-astronaut {
      0% {
        transform: translate(-160px, -160px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    @media only screen and (max-width: 600px) {
      top: 70%;
    }
  `,

  AstronautImage: styled.img`
    animation: rotate-astronaut 200s infinite linear both alternate;
    width: 140px;

    @keyframes rotate-astronaut {
      100% {
        transform: rotate(-720deg);
      }
    }
  `,

  StarContainer: styled.div`
  `,

  Star: styled.div`
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    width: 3px;
    height: 3px;
    opacity: 0.3;
    will-change: opacity;

    &.star1 {
      top: 80%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 1s;
    }

    &.star2 {
      top: 20%;
      left: 40%;
      animation: glow-star 2s infinite ease-in-out alternate 3s;
    }

    &.star3 {
      top: 25%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 5s;
    }

    &.star4 {
      top: 75%;
      left: 80%;
      animation: glow-star 2s infinite ease-in-out alternate 7s;
    }

    &.star5 {
      top: 90%;
      left: 50%;
      animation: glow-star 2s infinite ease-in-out alternate 9s;
    }

    @keyframes glow-star {
      40% { 
        opacity: 0.3;
      }
      90%,100% { 
        opacity: 1; 
        transform: scale(1.2);
      }
    };
  `
}

export default ErrorStyle;