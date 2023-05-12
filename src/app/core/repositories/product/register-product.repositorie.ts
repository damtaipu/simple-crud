import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";
import { RegisterProduct } from "../../domain/product-model/product.model";


export abstract class RegisterProductRepositorie {
    abstract registerProduct(param: RegisterProduct): Observable<ReturnDataModel>
}