import BodyStyle from '../../assets/styles/Home';

const { Banner, TextosBanner, TextoArthurChagasBanner, TextoDesenvolvedorBanner, CarouselItem } = BodyStyle

function HomeBody() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <CarouselItem className="carousel-item active">
                <Banner>
                    <TextosBanner>
                        <TextoArthurChagasBanner className="text">Arthur Chagas</TextoArthurChagasBanner>
                        <TextoDesenvolvedorBanner className="text">Desenvolvedor Full-Stack</TextoDesenvolvedorBanner>
                    </TextosBanner>
                    <img src="../../assets/img/Code.png" id="imgCode" />
                </Banner>
            </CarouselItem>
        </div>
      </div>
    </>
  )
}

export default HomeBody
