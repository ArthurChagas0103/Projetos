import { useNavigate } from 'react-router-dom';
import ErrorStyle from '../../assets/styles/Error';

const rocketImage = 'http://salehriaz.com/404Page/img/rocket.svg';
const earthImage = 'http://salehriaz.com/404Page/img/earth.svg';
const moonImage = 'http://salehriaz.com/404Page/img/moon.svg';
const astronautImage = 'http://salehriaz.com/404Page/img/astronaut.svg';
const image404 = 'http://salehriaz.com/404Page/img/404.svg';

const { Container, BackgroundPurple, Stars, CentralBody, Image404, ButtonGoHome, Objects, RocketImage, EarthMoon, EarthImage, MoonImage, BoxAstronaut, AstronautImage, StarContainer, Star } = ErrorStyle;

function ErrorBody() {

    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <>
            <Container>
                <BackgroundPurple>
                    <Stars>
                        <CentralBody>
                            <Image404 src={image404} alt="404" />
                            <ButtonGoHome onClick={() => handleNavigation('/')}>GO BACK HOME</ButtonGoHome>
                        </CentralBody>
                        <Objects>
                            <RocketImage src={rocketImage} alt="Rocket" />
                            <EarthMoon>
                                <EarthImage src={earthImage} alt="Earth" />
                                <MoonImage src={moonImage} alt="Moon" />
                            </EarthMoon>
                            <BoxAstronaut>
                                <AstronautImage src={astronautImage} alt="Astronaut" />
                            </BoxAstronaut>
                        </Objects>
                        <StarContainer>
                            <Star className='star1' />
                            <Star className='star2' />
                            <Star className='star3' />
                            <Star className='star4' />
                            <Star className='star5' />
                        </StarContainer>
                    </Stars>
                </BackgroundPurple>
            </Container>
        </>
    );
}

export default ErrorBody;

//https://www.miguelsantiago.com.br/erro-404/
//https://codepen.io/salehriaz/pen/erJrZM