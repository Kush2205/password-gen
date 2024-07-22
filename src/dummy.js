const url = 'https://spotify23.p.rapidapi.com/search/?q=https%3A%2F%2Fopen.spotify.com%2Fartist%2F3bz6ZRvw3t4k0Oz72baGrk&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fc31e5a774msh55583c6f07fce81p1304f6jsn315134880669',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.tracks);
} catch (error) {
	console.error(error);
}