import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { UseCase } from "../../domain/usecase-interface/usecase-interface.model";
import { Injectable } from "@angular/core";
import { RegisterProduct } from "../../domain/product-model/product.model";
import { RegisterProductRepositorie } from "../../repositories/product/register-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class RegisterProductUseCase implements UseCase<RegisterProduct, ReturnDataModel> {
    
    constructor(private register: RegisterProductRepositorie) { }

    execute(param: RegisterProduct): Observable<ReturnDataModel> {
        return this.register.registerProduct(param);
    }
}