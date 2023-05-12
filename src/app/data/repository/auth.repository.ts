import { Observable } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/data-model/return-data.model";
import { Login } from "src/app/core/domain/login-model/login.model";
import { AuthRepositorie } from "src/app/core/repositories/auth.repositorie";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/environments/environment";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class AuthRepository extends AuthRepositorie {

    app = initializeApp(firebaseConfig);
    auth = getAuth(this.app);

    constructor(){
        super()
    }

    registerUser(param: Login): Observable<ReturnDataModel>{

        return new Observable<ReturnDataModel>((observer) => {

            signInWithEmailAndPassword(this.auth, param.email, param.passWord).then((userCredencial) => {
                let returnData = { code: 200, data: [{user: userCredencial.user}]};
                observer.next(returnData);
                observer.complete();
            }).catch((err) => {
                let returnData = { code: 401, data: [{userError: err}]};                      
                observer.error(returnData);
            })
        })
    }
    
}