import { users } from "../data/users.js"

export default class UserService {
//export, disaridan import edilebilir demek
//default, UserService import edildiginde bu class'ı import et demek.

    constructor(loggerService) {
        //this.users = [] //buraya db baglanip her islem oradan yapilir. ekle, listele vs.
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    
    }
                //userService'i bir component olarak düşünüp, buradan
                //istediğimiz yerleri alıp (add(),list()...) onları
                //baska yerde new'leyerek kullanabiliriz.

                //component denince sayfa, service denince metot havuzu
    
    load() {
        for (const user of users) {
            switch (user.type) { //switch herhangi bir verinin özelliğine göre
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
            
                default:
                    this.errors.push("Wrong user type")
                    break;
            }
        }
    }

    add(user) {
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        //return this.users
    }

    getById(id) {
        //return this.users.find( u => u.id === id) 
    }

}