function getPodcastList() {
	return fetch('/podcasts.json')
		.then((res) => res.json())
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
}

function rendeTreinamento() {
    const podcast = {
        name: 'Procurando um mentor?'
    }

    return `
        <li class="list-item">
        <img class="list-item_image" src="/assets/img/centro-de-treinamento.png"  width="128" height="128">
            <div class="list-item_container">
                <div class="list-item_section">
                    <span class="list-item_status list-item_status--active"></span>
                    <h4 class="list-item_title">${podcast.name}</h4>
                </div>
                <ul class="list-item_links">
                ${
                    podcast.youtube_link
                        ? `<a class="list-item_links-item" href="${podcast.youtube_link}"> Youtube
                </a>`
                        : ''
                }
                ${
                    podcast.website_link
                        ? `<a class="list-item_links-item" href="${podcast.website_link}"> Site
                </a>`
                        : ''
                }
                ${podcast.twitter_at ? `<a class="list-item_links-item" href="htts://twitter.com/${podcast.twitter_at}"> Twitter                
                </a>` : ''}
            </ul>
            </div>
            <p class="list-item_description">
                Mentoria, para ajudar novos(as) desenvolvedores(as) ou os(as) desenvolvedores(as) irem ao infinito e
                além em suas carreiras!
            </p>
        </li>
    `
}

function renderPodcast(podcast) {
	/*const sample = {
        description: "Seja bem vindo ao asp.net{cast}! Aqui você vai encontrar Hangouts quinzenais sobre diversos assuntos envolvendo a tecnologia Asp.NET! Confira os videos e se inscreva no canal!",
        image: "",
        itunes_link: false,
        language: "pt_br",
        name: "Aspnetcast",
        rss_link: false,
        soundclound_link: false,
        status: true,
        twitter_at: "aspnetcast_br",
        website_link: "http://aspnetcast.com.br/",
        youtube_link: "https://www.youtube.com/channel/UC1DrB2LTgVBGiZdgaOrzMCg/featured",
    }*/

	const data = `    
        <li class="list-item">
            <img class="list-item_image" src="${
				podcast.image ? podcast.image : '/assets/img/placeholder.png'
            }" width="128" height="128">
            <div class="list-item_container">
                <div class="list-item_section">
                    <span class="list-item_status ${
                        podcast.status ? 'list-item_status--active' : 'list-item_status--inactive'
                    } "></span>
                    <h4 class="list-item_title">${podcast.name}</h4>
                </div>
                <ul class="list-item_links">
                    ${
                        podcast.youtube_link
                            ? `<a class="list-item_links-item" href="${podcast.youtube_link}"> Youtube
                    </a>`
                            : ''
                    }
                    ${
                        podcast.website_link
                            ? `<a class="list-item_links-item" href="${podcast.website_link}"> Site
                    </a>`
                            : ''
                    }
                    ${podcast.twitter_at ? `<a class="list-item_links-item" href="htts://twitter.com/${podcast.twitter_at}"> Twitter                
                    </a>` : ''}
                </ul>
            </div>
            <div class="list-item_description">
                ${podcast.description}
            </div>
        </li>
    `;

	return data;
}

function renderList(listPodcast) {
	const containerList = document.getElementById('list-podcast');
	const ulList = document.createElement('ul');
	ulList.classList.add('list');
	const listPodcastString = listPodcast.reduce((acc, value) => {
		return acc + renderPodcast(value);
	}, '');
	ulList.innerHTML = rendeTreinamento() + listPodcastString;
	containerList.appendChild(ulList);
}

document.addEventListener('DOMContentLoaded', function (event) {
	getPodcastList().then((data) => {
		renderList(data);
	});
});
