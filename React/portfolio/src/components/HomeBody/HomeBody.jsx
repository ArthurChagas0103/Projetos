import BodyStyle from '../../assets/styles/Home';
import CodeImage from '../../assets/img/Code.png';

const { Banner, TextosBanner, TextoArthurChagasBanner, TextoDesenvolvedorBanner, ImageCode, CarouselItem, ContainerSoftSkills, SoftSkills, IconesSoftSkills, TextoSoftSkills } = BodyStyle;

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

      <ContainerSoftSkills>
        <SoftSkills>
          <IconesSoftSkills className="fa fa-user-edit"></IconesSoftSkills>
          <TextoSoftSkills className="TextoSoftSkills">Resiliência</TextoSoftSkills>
        </SoftSkills>
        <SoftSkills>
          <IconesSoftSkills className="fa fa-users"></IconesSoftSkills>
          <TextoSoftSkills className="TextoSoftSkills">Empatia</TextoSoftSkills>
        </SoftSkills>
        <SoftSkills>
          <IconesSoftSkills className="fa fa-bullseye"></IconesSoftSkills>
          <TextoSoftSkills className="TextoSoftSkills">Determinação</TextoSoftSkills>
        </SoftSkills>
        <SoftSkills>
          <IconesSoftSkills className="fa fa-flag-checkered"></IconesSoftSkills>
          <TextoSoftSkills className="TextoSoftSkills">Foco em Resultado</TextoSoftSkills>
        </SoftSkills>
      </ContainerSoftSkills>
    </>
  )
}

export default HomeBody;