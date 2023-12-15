import ContactStyle from '../../assets/styles/Contact'
import ImageContato from '../../assets/img/ImageContato.png'

const { BackgroundBanner, Banner, Textos, TextoContato, ImagemContatoStyle, FormContato, DivButtons, Buttons } = ContactStyle;

function ContactBody() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <BackgroundBanner className="carousel-item active">
                        <Banner>
                            <Textos>
                                <TextoContato className="text">Contato</TextoContato>
                            </Textos>
                            <ImagemContatoStyle src={ImageContato} id="imgContato" />
                        </Banner>
                    </BackgroundBanner>
                </div>
            </div>

            <FormContato method="post" action="mailto:arthurgchagas@gmail.com">
                <div className="mb-3 mr-4 ml-3">
                    <label for="seuEmail" className="form-label mt-5">Seu Email</label>
                    <input type="text" className="form-control" id="seuEmail" placeholder=""/>
                </div>
                <div className="mb-3 mr-4 ml-3">
                    <label for="nomeCompleto" className="form-label">Nome Completo</label>
                    <input type="text" className="form-control" id="nomeCompleto" placeholder=""/>
                </div>
                <div className="mb-3 mr-4 ml-4">
                    <label for="assunto" className="form-label">Assunto</label>
                    <input type="text" className="form-control" id="assunto" placeholder=""/>
                </div>
                <div className="mb-3 mr-4 ml-4">
                    <label for="mensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="mensagem" rows="3"
                        placeholder=""></textarea>
                </div>
                <DivButtons>
                    <Buttons type="submit" className="btn btn-success">Enviar</Buttons>
                    <Buttons type="reset" className="btn btn-danger">Limpar</Buttons>
                </DivButtons>
            </FormContato>
        </>
    );
}

export default ContactBody;