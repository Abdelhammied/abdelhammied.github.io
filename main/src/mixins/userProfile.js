import axios from 'axios';

export default {
    data() {
        return {
            user: {}
        }
    },

    methods: {
        fetchUserProfil() {
            axios
                .get("https://api.github.com/users/Abdelhammied")
                .then((response) => this.user = response.data)
                .catch((err) => console.log(err));
        },
    },

    mounted() {
        this.fetchUserProfil();
    },
}