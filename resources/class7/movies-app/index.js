let apikey = '699ba79b';
let results = null;

function getMovies() {
    let query = document.getElementById('input').value; 
    console.log(query);
	axios.get(`http://www.omdbapi.com/?s=${ query }&apikey=${ apikey }`)
	.then(response => {
		
		
		results = response.data.Search; // it doesn't check if response fail

		let filterResult = results.filter(elem => {
			 return (elem.Poster || elem.Year || elem.Title) !== 'N/A'
        } );
        

        for (var i = 0; i < filterResult.length; i++) {
            pushToHTML(filterResult[i]);
        }

        /////
		console.log(filterResult);
        let title = filterResult[0].Title;
        let year = filterResult[0].Year;
        
        //document.getElementById('title').innerHTML = title;
        //document.getElementById('year').innerHTML = year;
        


        
	})
	.catch((error) => {
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}

function pushToHTML(datos) {
    console.log(datos);
    let contenido;
    contenido = '<div class="cards-body">';
    contenido += '<p><strong>' + datos.Title + '</strong><p>';
    contenido += '<p>Year: ' + datos.Year + '</p>';
    contenido += '<img class="caratula" src="' + datos.Poster + '">';
    contenido += '</div>';

    document.getElementById("cards").innerHTML += contenido;

}

