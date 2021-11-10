export default class UserService {
//export, disaridan import edilebilir demek
//default, UserService import edildiginde bu class'ı import et demek.

    constructor(loggerService) {
        this.users = [] //buraya db baglanip her islem oradan yapilir. ekle, listele vs.
        this.loggerService = loggerService
    
    }
                //userService'i bir component olarak düşünüp, buradan
                //istediğimiz yerleri alıp (add(),list()...) onları
                //baska yerde new'leyerek kullanabiliriz.

                //component denince sayfa, service denince metot havuzu
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find( u => u.id === id) 
    }

}