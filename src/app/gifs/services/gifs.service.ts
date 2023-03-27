import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '3jfdmBNzqHnjTMVs4V9EpR1Gzom7QG3T'
  private _historial: string[] = [];
  public resultados: any[]=[];
  
  constructor( private http: HttpClient) { }
  get historial():string[] {
    return [...this._historial]
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase()
    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=3jfdmBNzqHnjTMVs4V9EpR1Gzom7QG3T&q=${query}&limit=10`)
    .subscribe((resp:any) => {
      console.log(resp.data);
      this.resultados = resp.data;
      
    })
    console.log(this._historial);
  }

}
