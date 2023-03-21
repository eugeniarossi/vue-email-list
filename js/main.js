'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '',
            emailList: []
        }
    },
    beforeMount() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    //let newEmail = response.data.response;
                    this.emailList.push(response.data.response);
                });
        }
    }
}).mount('#app');