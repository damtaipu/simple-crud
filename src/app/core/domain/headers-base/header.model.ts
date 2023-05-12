
import { HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'

const setHeader = (token: string) => {
    let headToken: HttpHeaders;
    headToken = new HttpHeaders()
        .append('authorization', 'Bearer ' + token)
        .append('Content-Type', 'application/json');
    return headToken;
}

export const getHeader = () => {
    return setHeader(environment.airTableToken)
}