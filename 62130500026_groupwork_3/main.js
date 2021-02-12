const app = {
    data() {
        return {
            cartoons: [{ image: './images/senku.jpg', title: 'Ishigami Senku(อิชางามิ เซ็นคู)', like: false },
                { image: './images/tsukasa.jpg', title: 'Shishio Tsukasa (ชิชิโอะ สึคาสะ)', like: false },
                { image: './images/kohaku.jpg', title: 'Kohaku (โคฮาคุ)', like: false }
            ]
        }
    },
    methods: {
        toggleLike(index) {
            this.cartoons[index].like = !this.cartoons[index].like
        }
    },
    computed: {
        LikePic() {
            return this.cartoons.filter(c => c.like).length
        }
    }

}
Vue.createApp(app).mount('#app')