import { Observable } from "rxjs";
import { ReturnDataModel } from "../domain/data-model/return-data.model";
import { Login } from "../domain/login-model/login.model";
import { UseCase } from "../domain/usecase-interface/usecase-interface.model";
import { AuthRepositorie } from "../repositories/auth.repositorie";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthUseCase implements UseCase<Login, ReturnDataModel> {
    
    constructor(private auth: AuthRepositorie) { }

    execute(param: Login): Observable<ReturnDataModel> {
        return this.auth.registerUser(param);
    }
}