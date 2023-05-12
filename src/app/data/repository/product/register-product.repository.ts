import { Observable, map, of } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/data-model/return-data.model";
import { RegisterProductRepositorie } from "src/app/core/repositories/product/register-product.repositorie";
import { RegisterProduct } from "src/app/core/domain/product-model/product.model";
import { HttpClient } from "@angular/common/http";
import { getHeader } from "src/app/core/domain/headers-base/header.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RegisterProductRepository extends RegisterProductRepositorie {

    constructor(private http: HttpClient) {
        super()
    }

    registerProduct(param: RegisterProduct): Observable<ReturnDataModel> {

        const httpOption = {
            headers: getHeader()
        }

        let regProduct = {
            records: [
                {
                    fields: {
                        ID: String(Math.round(Math.random() * 100)),
                        NAME: param.name,
                        DESCRIPTION: param.discription
                    }
                }
            ]
        };        

       return this.http.post<ReturnDataModel>(`https://api.airtable.com/v0/appuGyGrFInQbkcWR/tblFwKcYoEmFrs96n`, regProduct, httpOption)
        .pipe(map((r: any)=> r.records.map((r: any) => r.fields)))
    }



}