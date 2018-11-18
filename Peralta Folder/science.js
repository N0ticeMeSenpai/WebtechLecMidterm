const vm = new Vue({
    el: '#science',
    data: {
        articles: []
    },
    mounted() {
        axios.get("https://newsapi.org/v2/top-headlines?country=ph&category=science&apiKey=a8d0c1bbd7e24756a78e5c51af28e066")
            .then(response => {this.articles = response.data.articles})
    }
});