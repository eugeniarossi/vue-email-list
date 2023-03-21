'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailNumber: 10,
            emailList: [],
        }
    },
    beforeMount() { 
        for (let i = 0; i < this.emailNumber; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emailList.push(response.data.response);
                });
        }
    }
}).mount('#app');