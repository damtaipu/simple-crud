import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";


export abstract class DeleteProductRepositorie {
    abstract deleteProduct(param: string): Observable<ReturnDataModel>
}