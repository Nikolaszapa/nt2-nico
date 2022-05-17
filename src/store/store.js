import { defineStore } from "pinia";

export const useStore = defineStore('pruebaContador', {
    state: () => ({
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
            }
            return this._userValid;
        }
    },
    getters: {
    }
})