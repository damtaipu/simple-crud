import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { UseCase } from "../../domain/usecase-interface/usecase-interface.model";
import { Injectable } from "@angular/core";
import { GetProductRepositorie } from "../../repositories/product/get-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class GetProductUseCase implements UseCase<void, ReturnDataModel> {
    
    constructor(private getProduct: GetProductRepositorie) { }

    execute(): Observable<ReturnDataModel> {
        return this.getProduct.getProduct();
    }
}