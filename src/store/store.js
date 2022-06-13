import { defineStore } from "pinia";
//import { remedies } from "../data/remedies"

export const useStore = defineStore('pruebaContador', {
    state: () => ({
        _remedyList: [],
        _user: {
            mail: 'admin@admin.com',
            password: 'admin'
        },
        _userValid: false,
    }),
    actions: {
        validateUser(mail, password) {
            if (mail == this._user.mail && password == this._user.password) {
                this._userValid = true;
                console.log(this._userValid);
            }
            console.group("validateUser()")
            console.log("validateUser")
            console.groupEnd()
            return this._userValid;
        },
        cargarLista() {
            console.log(console)
        },
    },
    getters: {
        listaDeCompras() {
            return this._remedyList;
        }
    }
})