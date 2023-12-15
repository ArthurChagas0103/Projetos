import PortfolioStyle from '../../assets/styles/Portfolio'
import ImageContato from '../../assets/img/ImageContato.png'
import ImageEleicao from '../../assets/img/ImageEleicao.png'
import ImagePython from '../../assets/img/ImagePython.png'
import ImageSkateOn from '../../assets/img/ImageSkateOn.png'
import ImageTranca from '../../assets/img/ImageTranca.png'
import ImageSalario from '../../assets/img/ImageSalario.png'
import ImageProjetos from '../../assets/img/ImageProjetos.png'

const { DivPrincipal, BackgroundBanner, Banner, Textos, TextoProjetos, ImagemProjetoStyle } = PortfolioStyle;

function PotfolioBody() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <BackgroundBanner className="carousel-item active">
                        <Banner>
                            <Textos>
                                <TextoProjetos className="text">Projetos</TextoProjetos>
                            </Textos>
                            <ImagemProjetoStyle src={ImageProjetos} id="imgContato" />
                        </Banner>
                    </BackgroundBanner>
                </div>
            </div>
            <DivPrincipal>
                <div id="divProjetos">
                    <div class="projeto">
                        <h5 class="tituloProjeto">Sistema de Votação de Presidente</h5>
                        <h6 class="textProjeto">Como parte de uma demanda passada pelo professor de Banco de Dados do Cotemig,
                            Sâmeck Zanela Costa,
                            criei um sistema completo de votação de presidente com possibilidade de adaptação a qualquer tipo de
                            votação. No sistema em questão, temos a tela de login no qual o usuário irá digitar seu número de
                            matrícula, nome completo e turma (no qual já foi cadastrado no banco de dados via client interface) e o
                            sistema, através de uma API em node.js, irá verificar se o usuário é válido no banco. Em um primeiro
                            momento, o usuário se encontra inválido pois não há esse usuário cadastrado, porém, basta entrar com um
                            usuário administrador, e através dele, realizar o cadastro do usuário. Após isso, o login se torna
                            válido e é possível entrar na tela de votação (obs: ao logar, o usuário passa a ter o número de votação
                            igual a 1, e quando o sistema identifica isso, ele não o deixa votar de novo, e vale lembrar que o voto
                            não é ligado ao usuário, o tornando secreto). Na tela de votação, temos os candidatos e seus respectivos
                            números, e ao votar, o voto é contabilizado na página de "apuração de votos" no login de administrador.
                        </h6>
                        <img src={ImageEleicao} class="imgProjeto" />
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6982854869829214208/" target="_blank"><button
                            type="button" class="btn btn-primary">Projeto</button></a>
                    </div>

                    <div class="projeto">
                        <h5 class="tituloProjeto">Sistema de Busca de Senha de Wifi</h5>
                        <h6 class="textProjeto">Já esteve em alguma situação em que você esqueceu a senha do wifi, ou por algum
                            motivo você tem acesso ao computador de alguém mas deseja acessar o wifi? No código em questão, feito em
                            Python, o sistema mostra todas as redes wifi já conectadas anteriormente em seu dispositivo, após isso,
                            o usuário digita o nome do wifi desejado e o código realiza uma busca através do terminal por senhas
                            salvas no próprio dispositivo e as mostra.
                        </h6>
                        <img src={ImagePython} class="imgProjeto" />
                        <a href="https://github.com/ArthurChagas0103/Projetos/blob/main/Python/descobrirSenhaSalva.py"
                            target="_blank"><button type="button" class="btn btn-primary">Projeto</button></a>
                    </div>

                    <div class="projeto">
                        <h5 class="tituloProjeto">Site de um E-Commerce</h5>
                        <h6 class="textProjeto">Aqui está um trabalho proposto pela matéria de Front-End, no Cotemig. O projeto em
                            questão trazia a demanda de se desenvolver um site de um E-Commerce responsivo, utilizando os
                            conhecimentos ensinados em aula, principalmente o display grid. Para desenvolver o site, utilizei html,
                            css, javascript e bootstrap.
                        </h6>
                        <img src={ImageSkateOn} class="imgProjeto" />
                        <a href="https://github.com/ArthurChagas0103/Projetos/tree/main/html-css-js/skateOn" target="_blank"><button
                            type="button" class="btn btn-primary">Projeto</button></a>
                    </div>

                    <div class="projeto">
                        <h5 class="tituloProjeto">Tranca de Porta Movido a Controle Remoto</h5>
                        <h6 class="textProjeto">Meu foco principal foi desenvolver uma tranca de porta, em que eu utilizo um
                            controle para energizar e desenergizar um eletroímã. Para realizar esse projeto eu utilizei: arduino e
                            suas peças e periféricos, eletroímã e C++.
                        </h6>
                        <img src={ImageTranca} class="imgProjeto" id="tranca" />
                        <a href="https://github.com/ArthurChagas0103/Projetos/tree/main/C%2B%2B/Projeto_Tranca_Porta"
                            target="_blank"><button type="button" class="btn btn-primary">Projeto</button></a>
                    </div>

                    <div class="projeto">
                        <h5 class="tituloProjeto">Programa de Cálculo de Salário</h5>
                        <h6 class="textProjeto">Nesse projeto, passado na aula de Lógica e Programação do Cotemig, eu desenvolvi, em
                            windows forms, uma aplicação em C# no qual se calcula o salário de um funcionário. Ele pega o código de
                            matrícula e divide por 10000 para se achar a classe, com o resultado obtido ele calcula o salário e
                            exibe os resultados desejados.
                        </h6>
                        <img src={ImageSalario} class="imgProjeto" id="salario" />
                        <a href="https://github.com/ArthurChagas0103/Projetos/tree/main/C%23/salarioFuncionario2"
                            target="_blank"><button type="button" class="btn btn-primary">Projeto</button></a>
                    </div>
                </div>
            </DivPrincipal>
        </>
    );
}

export default PotfolioBody;