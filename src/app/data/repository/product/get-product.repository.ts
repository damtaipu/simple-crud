import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { ReturnDataModel } from "src/app/core/domain/data-model/return-data.model";
import { getHeader } from "src/app/core/domain/headers-base/header.model";
import { GetProductRepositorie } from "src/app/core/repositories/product/get-product.repositorie";

@Injectable({
    providedIn: 'root'
})

export class GetProductRepository extends GetProductRepositorie {

    constructor(private http: HttpClient) {
        super()
    }

    getProduct(): Observable<ReturnDataModel> {
        const httpOption = {
            headers: getHeader()
        }

       return this.http.get<ReturnDataModel>(`https://api.airtable.com/v0/appuGyGrFInQbkcWR/tblFwKcYoEmFrs96n`, httpOption)
        .pipe(map((r: any)=> r.records.map((r: any) => {
            let newObject = {
                CODE: r.id,
                ID: r.fields.ID,
                NAME: r.fields.NAME,
                DESCRIPTION: r.fields.DESCRIPTION
            }

            return newObject;
        })))
    }



}