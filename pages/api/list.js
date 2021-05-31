import { map } from "modern-async";
import RelativeTime from "@yaireo/relative-time";
import axios from "axios";

import podcasts from "./podcasts.json";

const parser = require("xml2js");

function getStatusPodcast(response) {
  if (response.lastBuildDate) {
    const relativeTime = new RelativeTime({ locale: 'pt-br' }); // set locale to Spanish
    const as = relativeTime.from(response.lastBuildDate);
    console.log(as)
    return true;
  }
  return false;
}

function getImagePodcast(response, oldImage) {
  if (response.image) {
    if (response.image[0]) {
      if (response.image[0].url) {
        if (response.image[0].url[0]) {
          return response.image[0].url[0];
        }
      }
    }
  }
}

function transform(response, item) {
  return {
    status: getStatusPodcast(response),
    image: getImagePodcast(response, item.image),  
    ...item,
  };
}

async function updatePodcastList(podcasts) {
  console.time("update");
  const data = await map(podcasts, async (item) => {
    try {
      if (item.rss_link) {
        const newItem = await axios.get(item.rss_link, {
          timeout: 6000,
        });
        const res = await parser.parseStringPromise(newItem.data);
        const itemRes = res.rss.channel[0];
        const result = transform(itemRes, item);
        return result;
      }
      return item;
    } catch (err) {
//    console.log(`Deu ruim no ${item.name}, erro: ${err.message} `);
      return {
        ...item,
        status: getStatusPodcast(new Date()),
      };
    }
  });
  console.timeEnd("update");
  return await data;
}

export default async function handler(req, res) {
  try {
    const list = await updatePodcastList(podcasts);
    res.status(200).json(list);
  } catch (err) {
    res.status(200).json(podcasts);
  }
}
