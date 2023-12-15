import AboutStyle from '../../assets/styles/About'
import ImageSobre from '../../assets/img/ImageSobre.png'
import ImageEu1 from '../../assets/img/Eu1.png'
import ImageEu2 from '../../assets/img/Eu2.png'
import ImageInstagram from '../../assets/img/ImageInstagram.png'
import ImageTwitter from '../../assets/img/ImageTwitter.png'
import ImageLinkedin from '../../assets/img/ImageLinkedin.png'

const { DivPrincipal, BackgroundBanner, Banner, Textos, TextoSobre, ImagemSobreStyle, DivAspas, DivTextoSobreMim } = AboutStyle;

function AboutBody() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <BackgroundBanner className="carousel-item active">
            <Banner>
              <Textos>
                <TextoSobre className="text">Sobre Mim</TextoSobre>
              </Textos>
              <ImagemSobreStyle src={ImageSobre} id="imgContato" />
            </Banner>
          </BackgroundBanner>
        </div>
      </div>

      <DivPrincipal>
        <DivAspas>
          <i className="fa fa-quote-left aspas"></i>
        </DivAspas>

        <DivTextoSobreMim>
          <h6 id="textSobreMim">
            <div>
              Minha grande paixão pela tecnologia como um todo, aliado a vontade e o estudo foram os combustíveis para
              fazer da programação a minha profissão. Hoje, tenho como objetivo principal me desenvolver como
              profissional
              de TI no âmbito profissional. Fico muito feliz em compartilhar com você a minha história!
            </div>

            <div className="textSobreMim">
              O meu primeiro contato com essa área se deu logo na minha infância, através do meu pai. Ele é
              programador
              sênior a mais de 20 anos e sempre me mostrou esse mundo da tecnologia, porém ele nunca me obrigou a
              gostar
              de programação. Então aos 11/12 anos de idade, resolvi que eu queria seguir nessa área e venho estudando
              desde então.
            </div>

            <div className="textSobreMim">
              Comecei estudando lógica e desenvolvendo projetos simples, como calculadoras em Visual Basic, e hoje meu
              conhecimento é muito mais abrangente e em diversas áreas. Eu sempre tento me inovar e buscar diferentes
              aspectos da tecnologia, não focando somente em uma parte específica. Por exemplo, uma aprendizagem sobre
              elétrica me fez ter ideias e terminou com uma tranca movida a um controle de televisão, mostrando assim
              que
              minha força de vontade e minha perseverança não tem limites e que eu me entrego ao máximo em tudo que
              faço.
            </div>
          </h6>
        </DivTextoSobreMim>

        <hr className="linha" />

        <div>
          <i className="fa fa-images aspas"></i>
        </div>

        <div>
          <div id="fundoImgsEu1">
            <img src={ImageEu1} id="imgsEu1" />
          </div>

          <div id="fundoImgsEu2">
            <img src={ImageEu2} id="imgsEu2" />
          </div>
        </div>

        <hr className="linha" />

        <div>
          <i className="fa fa-mobile aspas"></i>
        </div>

        <div id="redesSociais">
          <a href="https://www.instagram.com/arthur_gomes_chagas/" target="_blank"><img
            src={ImageInstagram} class="imgsRedesSociais" /></a>
          <a href="https://twitter.com/arthurgchagas" target="_blank"><img src={ImageTwitter}
            class="imgsRedesSociais" /></a>
          <a href="https://www.linkedin.com/in/arthur-chagas-ti/" target="_blank"><img
            src={ImageLinkedin} class="imgsRedesSociais" /></a>
        </div>

        <hr className="linha" />

        <div>
          <i className="fa fa-clipboard aspas"></i>
        </div>

        <div>
          <a href="/front-end/base_codes/docs/Curriculo.pdf" download="Curriculo.pdf" id="baixar"><button type="button"
            className="btn btn-primary" id="button"><i class="fa fa-download"></i> Currículo</button></a>
        </div>
      </DivPrincipal>
    </>
  )
}

export default AboutBody