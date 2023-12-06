import {meiliClient} from './helpers/meili.js';


const indexSettings = {
	searchableAttributes: ['url', 'title', 'content', 'excerpt'],
	displayedAttributes: ['title', 'url', 'excerpt', 'content', 'crawledAt', 'lang'],
	filterableAttributes: ['url', 'lang'],
	distinctAttribute: 'url',
	sortableAttributes: ['crawledAt'],
};

const main = async () => {
	await meiliClient.createIndex('blogs');
	await meiliClient.createIndex('docs');
	await meiliClient.index('blogs').updateSettings(indexSettings);
	await meiliClient.index('docs').updateSettings(indexSettings);
};

main();
