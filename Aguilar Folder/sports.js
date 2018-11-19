const vm = new Vue({
    el: '#app',
    data: {
        articles: []
    },
    mounted() {
        axios.get("https://newsapi.org/v2/top-headlines?country=ph&category=sports&apiKey=f2d38555123841d59711e62f1479cf82")
            .then(response => {this.articles = response.data.articles})
    }
});