import { defineStore } from "pinia";
import axios from "axios";
//import { remedies } from "../data/remedies"

const URI = "https://62aa3792371180affbd1c4ab.mockapi.io/Articles"
const remedies = {data : {}};

/* const handleResponse = function (data){
    remedies.data = data
    console.log(data)
}  */

const getRemedies = async () => {
    
    const response = await axios.get(URI);
    const { data } = response;
    remedies.data = data
    //console.log(remedies.data)
}

getRemedies()
    
export const useStore = defineStore('pharmStore', {
    state: () => ({
        remedyList: remedies.data,
        _user: {
            mail: 'admin@admin.com',
            password: 'admin',
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
            console.log(console);
        },
    },
    getters: {
        remedyList() {
            return this._remedyList;
        }
    }
})