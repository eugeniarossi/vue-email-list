# Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

## Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

***

- Creo una lista statica vuota.

- Definisco un array vuoto per gli indirizzi email.

- Creo un ciclo for in cui definisco la richiesta alla API. Aggiungo il contenuto della risposta nell'array vuoto. 

- Nel documento html definisco una lista con un ciclo v-for che generi un elemento della lista per ogni elemento dell'array. 