import { Observable } from "rxjs";
import { ReturnDataModel } from "../../domain/data-model/return-data.model";


export abstract class GetProductRepositorie {
    abstract getProduct(): Observable<ReturnDataModel>
}