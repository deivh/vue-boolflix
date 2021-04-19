function initVue() {
    new Vue ({
        el: '#app',
        data: {
            movie: [],
            tvseries: [],
            inputSearch: '2021',
        },
        methods:  {
            searchMovie: function() {
                axios.get('https://api.themoviedb.org/3/search/multi', {
                    params: {
                        'api_key': 'd03fa56773fc8de0b8df06270921b491',
                        'query': this.inputSearch,
                    }
    
                })
            .then(data => {
                console.log(data);
                console.log(this.inputSearch);
                this.movie = data.data.results;
                console.log(movie);
                });

            // axios.get('https://api.themoviedb.org/3/search/tv', {
            //     params: {
            //         'api_key': 'd03fa56773fc8de0b8df06270921b491',
            //         'query': this.inputSearch,
            //     }    
            //     })
            // .then(data => {
            //     console.log(data);
            //     this.tvseries = data.data.results;
            // })
            },

        },
            
            
    })
}

function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);