import { getChannels } from 'arenavision-scraper';

getChannels().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
});