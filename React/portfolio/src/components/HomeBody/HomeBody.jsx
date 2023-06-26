import BodyStyle from '../../assets/styles/Home';
import CodeImage from '../../assets/img/Code.png';

const { Banner, TextosBanner, TextoArthurChagasBanner, TextoDesenvolvedorBanner, ImageCode, CarouselItem } = BodyStyle;

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
              <ImageCode src={CodeImage} alt="Code" />
            </Banner>
          </CarouselItem>
        </div>
      </div>
    </>
  )
}

export default HomeBody;