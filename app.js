import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";

@inject(MovieData)
export class App { 
    
  constructor(movieData) {
    this.movieData = movieData;
  }
  
//   static inject(){ return [HttpClient];}
  
  activate(){ 
      return this.movieData
                 .getAll()
                 .then(movies => {
                     console.log(movies);
                     this.movies = movies;
                 }); 
  } 
  
}