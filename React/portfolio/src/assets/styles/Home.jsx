import styled from "styled-components";

const HomeStyle = {
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

    TextosBanner: styled.div`
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

    TextoArthurChagasBanner: styled.h1`
        font-weight: 300;
    `,

    TextoDesenvolvedorBanner: styled.h6`
        font-weight: 300;
    `,

    // AnimacaoCores: styled.keyframes`
    //     0% {
    //         background-position: 0% 60%;
    //     }

    //     50% {
    //         background-position: 55% 50%;
    //     }

    //     100% {
    //         background-position: 0% 10%;
    //     }
    // `,

    CarouselItem: styled.div`
        background: rgb(72, 54, 191);
        background: linear-gradient(45deg, rgba(18, 60, 115, 1) 0%, rgba(216, 155, 242, 1) 100%, rgba(72, 54, 191, 1) 0%);
        height: 500px;
        position: absolute;
        animation: 10s linear infinite alternate sdfsdf;
        background-size: 400% 400%;
    `,
}

export default HomeStyle