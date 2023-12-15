import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "../../assets/styles/Meme.module.css";
import backgroundMemes from "../../assets/img/background-memes.jpg";

function MemeBody() {
    const [memeData, setMemeData] = useState({ name: '', url: '' });
    const [quote, setQuote] = useState('');
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    };

    const fetchMeme = () => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                const memes = response.data.data.memes;
                const randomIndex = Math.floor(Math.random() * memes.length);
                const meme = memes[randomIndex];
                setMemeData({ name: meme.name, url: meme.url });

                axios.get('https://api.quotable.io/random')
                    .then(response => {
                        const quoteContent = response.data.content;
                        setQuote(quoteContent);
                    })
                    .catch(error => {
                        console.log('Erro ao buscar texto do meme:', error);
                    });
            })
            .catch(error => {
                console.log('Erro ao buscar meme:', error);
            });
    };

    useEffect(() => {
        fetchMeme();
    }, []);

    return (
        <div>
            <img src={backgroundMemes} className={styles.imgMeme} alt="Background" />
            <div className={styles.container}>
                <h1 className="text-white">API de Memes</h1>
                <button id="btn-next" className={`btn btn-light ${styles.btnNext}`} onClick={fetchMeme}>Próximo Meme</button>
                <button className={`btn btn-light ${styles.btnNext}`} onClick={() => handleNavigation('/')}>Voltar</button>
                <div className={styles.fatherMemeContainer}>
                    <div id="meme-container" className={styles.memeContainer}>
                        <h4 className={styles.memeTitle}>{memeData.name}</h4>
                        <img src={memeData.url} className={styles.memeImg} alt="Meme" />
                        <p className={styles.memeQuote}>"{quote}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemeBody;