import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "movies.json";

@inject(HttpClient)
export class MovieData {
    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http.get(baseUrl)
            .then(x => x.content );
            //.then(response => {return response.content;} );
            //.then(response => this.movies = response.content );
            // .then(response => { return this.movies = response.content; } );
    }
}