function fetchMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const memeContainer = document.getElementById('meme-container');

            memeContainer.innerHTML = '';

            const randomIndex = Math.floor(Math.random() * memes.length);
            const meme = memes[randomIndex];

            const memeTitle = document.createElement('h4');
            memeTitle.classList.add('meme-title');
            memeTitle.innerText = meme.name;
            memeContainer.appendChild(memeTitle);

            const memeImg = document.createElement('img');
            memeImg.classList.add('meme-img');
            memeImg.src = meme.url;
            memeContainer.appendChild(memeImg);

            const memeQuote = document.createElement('p');
            memeQuote.classList.add('meme-quote');
            memeContainer.appendChild(memeQuote);

            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    const quote = data.content;
                    memeQuote.innerText = `"${quote}"`;
                })
                .catch(error => {
                    console.log('Erro ao buscar texto do meme:', error);
                });
        })
        .catch(error => {
            console.log('Erro ao buscar meme:', error);
        });
}

document.getElementById('btn-next').addEventListener('click', fetchMeme);

fetchMeme();