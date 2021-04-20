function initVue() {
    new Vue ({
        el: '#app',
        data: {
            medias: [],
            inputSearch: '2021',
            vote: ''
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
                this.medias = data.data.results;
                this.vote = this.medias.vote_average
                console.log(this.medias);
                });
            },
            getRating: function(vote) {
                return vote = parseInt(vote / 2)
            }

        },
            
            
    })
}

function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);