import { defineStore } from "pinia";

export const useStore = defineStore('pruebaContador', {
    state: () => ({
        _listaDeCompras: [],
        _idLista: 4,
        _url: "http://localhost:3000/shopping-lists/",
        _user: {
            mail: 'a@a.com',
            password: 'admin'
        },
        _userValid: false,
    }),
    actions: {
        validarUsuario(mail, password) {
            if (mail == this._user.mail && password == this._user.password) {
                this._userValid = true;
                console.log(this._userValid);
            }
            return this._userValid;
        },
        async cargarLista() {
            console.log("results");
            const response = await fetch(this._url + this._idLista);
            const results = await response.json();
            console.log(results);
            this._listaDeCompras = results;
        },
    },
    getters: {
        listaDeCompras() {
            return this._listaDeCompras;
        }
    }
})