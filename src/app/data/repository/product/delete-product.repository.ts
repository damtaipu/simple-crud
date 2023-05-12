import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/data-model/return-data.model";
import { getHeader } from "src/app/core/domain/headers-base/header.model";
import { DeleteProductRepositorie } from "src/app/core/repositories/product/delete-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class DeleteProductRepository extends DeleteProductRepositorie {    

    constructor(private http: HttpClient) {
        super()
    }

    deleteProduct(param: string): Observable<ReturnDataModel> {

        const httpOption = {
            headers: getHeader()
        }

       return this.http.delete<ReturnDataModel>(`https://api.airtable.com/v0/appuGyGrFInQbkcWR/tblFwKcYoEmFrs96n/${param}`, httpOption)
    }    
}