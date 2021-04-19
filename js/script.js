function initVue() {
    new Vue ({
        el: '#app',
        data: {
            movie: [],
            inputSearch: '2021',
        },
        methods:  {
            searchMovie: function() {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        'api_key': 'a3253d8c82755e87596f19e871262ec5',
                        'query': this.inputSearch,
                    }
                })
            .then(data => {
                console.log(data);
                console.log(this.inputSearch);
                const Movies = data[1];
                console.log(Movies);
                })

            },

        },
            
            
    })
}

function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);