import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { UpdateProduct } from "../../domain/product-model/product.model";

export abstract class UpdateProductRepositorie {
    abstract updateProduct(param: UpdateProduct): Observable<ReturnDataModel>
}