import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Home.module.css';

function HomeBody() {
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <>
            <div className={styles.divPrincipal}>
                <div className={styles.divBox}>
                    <h1>Escolha o serviço!</h1>
                    <button className={styles.buttonPrincipal} onClick={() => handleNavigation('/meme')}>MEME</button>
                    <button className={styles.buttonPrincipal} onClick={() => handleNavigation('/paises')}>PAÍSES</button>
                </div>
            </div>
        </>
    );
}

export default HomeBody;