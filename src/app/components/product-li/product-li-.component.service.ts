import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book"


@Injectable()

export class BooksService
{
    private url = 'http://localhost:3100/api/books'

    httpOption = {
        Headers: new HttpHeaders ({'contente-type': 'application/json'})
    }

    constructor (private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }

}