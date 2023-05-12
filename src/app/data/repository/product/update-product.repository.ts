import { Observable } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/data-model/return-data.model";
import { UpdateProduct } from "src/app/core/domain/product-model/product.model";
import { HttpClient } from "@angular/common/http";
import { getHeader } from "src/app/core/domain/headers-base/header.model";
import { Injectable } from "@angular/core";
import { UpdateProductRepositorie } from "src/app/core/repositories/product/update-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class UpdateProductRepository extends UpdateProductRepositorie {

    constructor(private http: HttpClient) {
        super()
    }

    updateProduct(param: UpdateProduct): Observable<ReturnDataModel> {

        const httpOption = {
            headers: getHeader()
        }

        let regProduct = {
            fields: {
                DESCRIPTION: param.DESCRIPTION,
                NAME: param.NAME,
                ID: param.CODE
            }
        }

        return this.http.put<ReturnDataModel>(`https://api.airtable.com/v0/appuGyGrFInQbkcWR/tblFwKcYoEmFrs96n/${param.ID}`, regProduct, httpOption);
    }
}