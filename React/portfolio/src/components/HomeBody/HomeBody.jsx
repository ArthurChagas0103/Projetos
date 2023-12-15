import React, { useEffect, useState } from 'react';
import BodyStyle from '../../assets/styles/Home';
import CodeImage from '../../assets/img/Code.png';
import EuImage from '../../assets/img/Eu.png';
import ImageConhecimento from '../../assets/img/ImageConhecimento.jpg';
import LogoDottatec from '../../assets/img/LogoDottatec.png';
import LogoQuickFood from '../../assets/img/LogoQuickFood.png';
import ImageProgramacao from '../../assets/img/ImageProgramming.jpg';
import ImageHardware from '../../assets/img/ImageHardware.jpg';
import ImageFrameworks from '../../assets/img/ImageFrameworks.png';
import ImageLinguagens from '../../assets/img/ImageLinguagens.jpg';
import ImageSoftware from '../../assets/img/ImageSoftware.png';

const { Banner, TextosBanner, TextoArthurChagasBanner, TextoDesenvolvedorBanner, ImageCode, CarouselItem, ContainerSoftSkills, SoftSkills, IconesSoftSkills, TextoSoftSkills, LinhaCinza, DivEu, ImgEu, DivTexto, TextoArthur, TextoEstudante, DivDavid, TextoDavid, CliqueQuadrados, DivHardSkills, HardSkills, HardSkillsBottom, DivCards, Cards, TituloCard } = BodyStyle;

function HomeBody() {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const animacao = () => {
      if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('divEu').style.visibility = 'visible';
        document.getElementById('divEu').style.animationName = 'fadeInRightBig';
      } else {
        document.getElementById('divEu').style.visibility = 'hidden';
        document.getElementById('divEu').style.animationName = 'fadeInLeftBig';
      }
    };

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    window.addEventListener('scroll', animacao);

    return () => {
      window.removeEventListener('scroll', animacao);
    };
  }, []);

  const handleCardClick = (card, nomeCard) => {
    setSelectedCard(card);
    setTimeout(() => {
      scrollToCard(nomeCard);
    }, 100);
  };

  const scrollToCard = (nomeCard) => {
    const cardElement = document.getElementById(nomeCard);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <LinhaCinza>
        <DivEu id="divEu" className="animate__animated animate__fadeInRightBig">
          <ImgEu src={EuImage} />
          <DivTexto>
            <TextoArthur className="text">Olá! Eu sou o Arthur!</TextoArthur>
            <TextoEstudante className="text">Estudante cursando o Ensino Médio Técnico voltado para a Tecnologia
              da Informação no Colégio Cotemig.
              Tenho bastante disposição, vontade
              de aprender, estou sempre aberto a
              novas experiências e
              oportunidades, sou prestativo,
              estudioso e aprendo com facilidade.
            </TextoEstudante>
          </DivTexto>
        </DivEu>
      </LinhaCinza>

      <DivDavid>
        <TextoDavid>“Não é a linguagem de programação que define o programador, mas sim sua lógica.”
          <br /> – David Ribeiro Guilherme
        </TextoDavid>
      </DivDavid>

      <CliqueQuadrados>Clique nos Quadrados!</CliqueQuadrados>

      <DivHardSkills>
        <HardSkills
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Conhecimentos"
          onClick={() => handleCardClick('conhecimentos', 'card1')}
        >
          <i className="fa fa-book IconHardSkills"></i>
        </HardSkills>

        <HardSkills
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Experiências"
          onClick={() => handleCardClick('experiencias', 'card2')}
        >
          <i className="fa fa-user-tie IconHardSkills"></i>
        </HardSkills>

        <HardSkills data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Frameworks"
          onClick={() => handleCardClick('frameworks', 'card3')}
        >
          <svg className='IconHardSkills' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
        </HardSkills>

        <HardSkillsBottom data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Linguagens de Programação"
          onClick={() => handleCardClick('linguagens', 'card4')}
        >
          <i className="fa fa-terminal IconHardSkills"></i>
        </HardSkillsBottom>

        <HardSkillsBottom data-bs-toggle="tooltip" 
        data-bs-placement="top" 
        data-bs-title="Softwares e Tecnologias"
        onClick={() => handleCardClick('softwares', 'card5')}
        >
          <i className="fa fa-window-maximize IconHardSkills"></i>
        </HardSkillsBottom>
      </DivHardSkills>

      <DivCards>
        {selectedCard === 'conhecimentos' && (
          <Cards id="card1" className="card">
            <img src={ImageConhecimento} className="card-img-top" alt="ImageConhecimento" />
            <div className="card-body">
              <TituloCard className="card-title">Conhecimentos</TituloCard>
              <li className="card-text">Solução de Problemas Técnicos;</li>
              <li className="card-text">Suporte Técnico;</li>
              <li className="card-text">Solução de Problemas de Hardware;</li>
              <li className="card-text">Lógica de Programação;</li>
              <li className="card-text">Instalação de Softwares;</li>
              <li className="card-text">Montagem, Manutenção e Configuração de Computadores.</li>
            </div>
          </Cards>
        )}

        {selectedCard === 'experiencias' && (
          <Cards id="card2" className="card">
            <img src={ImageHardware} className="card-img-top" alt="ImageHardware" />
            <div className="card-body">
              <TituloCard className="card-title">Freelancer Suporte <br />(2020 - Atual)</TituloCard>
              <p className="card-text">Reparo, manutenção e formatação de dispositivos como computadores e notebooks para conhecidos e parentes;</p>
            </div>
          </Cards>
        )}

        {selectedCard === 'experiencias' && (
          <Cards className="card">
            <img src={ImageProgramacao} className="card-img-top" alt="ImageProgramacao" />
            <div className="card-body">
              <TituloCard className="card-title">Freelancer Desenvolvimento <br />(2021 - Atual)</TituloCard>
              <p className="card-text">Demandas em front-end e back-end, incluindo APIs, dentro de aplicações web.</p>
            </div>
          </Cards>
        )}

        {selectedCard === 'experiencias' && (
          <Cards className="card">
            <img src={ImageProgramacao} className="card-img-top" alt="ImageProgramacao" />
            <div className="card-body">
              <TituloCard className="card-title">Fcnet Sistemas Tecnológicos Ltda <br />(2021 - atual)</TituloCard>
              <p className="card-text">Gestão da empresa; Desenvolvimento do Sistema.</p>
            </div>
          </Cards>
        )}

        {selectedCard === 'experiencias' && (
          <Cards className="card">
            <img src={LogoDottatec} className="card-img-top" alt="LogoDottatec" />
            <div className="card-body">
              <TituloCard className="card-title">Dottatec Soluções Inteligentes <br />(2022 - atual)</TituloCard>
              <p className="card-text">Desenvolvedor de Sistemas Full-Stack.</p>
            </div>
          </Cards>
        )}

        {selectedCard === 'experiencias' && (
          <Cards className="card">
            <img src={LogoQuickFood} className="card-img-top" alt="LogoQuickFood" />
            <div className="card-body">
              <TituloCard className="card-title">QuickFood Tecnologies <br />(2023 - atual)</TituloCard>
              <p className="card-text">CTO; Desenvolvedor de Sistemas Full-Stack</p>
            </div>
          </Cards>
        )}

        {selectedCard === 'frameworks' && (
          <Cards id="card3" className="card">
            <img src={ImageFrameworks} className="card-img-top" alt="ImageFrameworks" />
            <div className="card-body">
              <TituloCard className="card-title">Frameworks</TituloCard>
              <li className="card-text">React.js</li>
              <li className="card-text">Bootstrap</li>
              <li className="card-text">jQuery</li>
              <li className="card-text">Vue.js</li>
              <li className="card-text">ASP.NET</li>
              <li className="card-text">Express.js</li>
              <li className="card-text">.NET Framework</li>
            </div>
          </Cards>
        )}

        {selectedCard === 'linguagens' && (
          <Cards id="card4" className="card">
            <img src={ImageLinguagens} className="card-img-top" alt="ImageLinguagens" />
            <div className="card-body">
              <TituloCard className="card-title">Linguagens de Programação/Marcação/<br />Estilo</TituloCard>
              <li className="card-text">Portugol</li>
              <li className="card-text">C++</li>
              <li className="card-text">C#</li>
              <li className="card-text">HTML</li>
              <li className="card-text">CSS</li>
              <li className="card-text">JavaScript</li>
              <li className="card-text">PHP</li>
              <li className="card-text">Swift</li>
              <li className="card-text">Kotlin</li>
              <li className="card-text">TypeScript</li>
              <li className="card-text">SQL</li>
              <li className="card-text">Python</li>
            </div>
          </Cards>
        )}

        {selectedCard === 'softwares' && (
          <Cards id="card5" className="card">
            <img src={ImageSoftware} className="card-img-top" alt="ImageLinguagens" />
            <div className="card-body">
              <TituloCard className="card-title">Softwares e Tecnologias</TituloCard>
              <li className="card-text">Microsoft Visual Studio</li>
              <li className="card-text">Visual Studio Code</li>
              <li className="card-text">GitHub</li>
              <li className="card-text">Scratch</li>
              <li className="card-text">Figma</li>
              <li className="card-text">Microsoft Office</li>
              <li className="card-text">VisualG</li>
              <li className="card-text">App Inventor</li>
              <li className="card-text">Canva</li>
              <li className="card-text">Windows</li>
              <li className="card-text">Ubuntu</li>
              <li className="card-text">Linux</li>
              <li className="card-text">Google Workspace</li>
              <li className="card-text">Tecnologias Microsoft</li>
              <li className="card-text">Unity</li>
              <li className="card-text">Node.js</li>
              <li className="card-text">API REST</li>
              <li className="card-text">Servidor Apache</li>
              <li className="card-text">Postman API</li>
              <li className="card-text">SQL Serve Management Studio</li>
              <li className="card-text">PhpMyAdmin</li>
              <li className="card-text">MongoDB</li>
              <li className="card-text">Web Service</li>
              <li className="card-text">XCode</li>
              <li className="card-text">Android Studio</li>
            </div>
          </Cards>
        )}
      </DivCards>
    </>
  )
}

export default HomeBody;