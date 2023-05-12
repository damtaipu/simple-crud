import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { UseCase } from "../../domain/usecase-interface/usecase-interface.model";
import { Injectable } from "@angular/core";
import { DeleteProductRepositorie } from "../../repositories/product/delete-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class DeleteProductUseCase implements UseCase<string, ReturnDataModel> {
    
    constructor(private deleteProduct: DeleteProductRepositorie) { }

    execute(param: string): Observable<ReturnDataModel> {
        return this.deleteProduct.deleteProduct(param);
    }
}