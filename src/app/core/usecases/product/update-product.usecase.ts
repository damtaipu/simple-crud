import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { UseCase } from "../../domain/usecase-interface/usecase-interface.model";
import { Injectable } from "@angular/core";
import { UpdateProduct } from "../../domain/product-model/product.model";
import { UpdateProductRepositorie } from "../../repositories/product/update-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class UpdateProductUseCase implements UseCase<UpdateProduct, ReturnDataModel> {
    
    constructor(private updateProduct: UpdateProductRepositorie) { }

    execute(param: UpdateProduct): Observable<ReturnDataModel> {
        return this.updateProduct.updateProduct(param);
    }
}