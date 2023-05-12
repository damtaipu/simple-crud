import { Observable } from "rxjs";
import { Login } from "../domain/login-model/login.model";
import { ReturnDataModel } from "../domain/data-model/return-data.model";

export abstract class AuthRepositorie {
    abstract registerUser(param: Login): Observable<ReturnDataModel>
}