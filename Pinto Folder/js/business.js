const vm = new Vue({
    el: '#business',
    data: {
        articles: []
    },
    mounted() {
        axios.get("https://newsapi.org/v2/top-headlines?country=ph&category=business&apiKey=50480d42c2894930b86a569ae1d937b1")
            .then(response => {this.articles = response.data.articles})
    }
});

