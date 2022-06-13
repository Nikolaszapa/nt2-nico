import { defineStore } from "pinia";
import { remedies } from "../data/remedies"

export const useStore = defineStore('pharmStore', {
    state: () => ({
        _remedyList: remedies,
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
            
            return this._userValid;
        },
        cargarLista() {
            console.log(console)
        },
    },
    getters: {
        remedyList() {
            return this._remedyList;
        }
    }
})