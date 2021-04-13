(async () => {
    const rssConverter = require('rss-converter');
    const podcasts = require('./podcasts.json')
    const fs = require('fs');

    const listRss = podcasts
        .filter(it => it.rss_link)
        .map((item) => item.rss_link)
    let data = []


    async function* asyncGenerator() {
        let i = 0;
        while (i < listRss.length) {
            i++
            try {
                yield await rssConverter.toJson(listRss[i]);
            } catch (err) {
                yield listRss[i]
            }
        }
    }

    (async function () {
        for await (let item of asyncGenerator()) {
            data.push(item)
        }
        const toJson = JSON.stringify(data)
        console.log(toJson)
        fs.appendFile("output.json", toJson, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        });
    })();
    

   
    // podcasts.map(async (it) => {
    //     try {
    //         let item = it
    //         if (it.rss_link) {
    //             console.log(it.rss_link)
    //             // const feed = ;
    //             // const image = feed.image.url
    //             // item = {
    //             //     ...it,
    //             //     image
    //             // }
    //         }
    //         return item
    //     } catch (err) {
    //         return it
    //     }
    // })
    
})();