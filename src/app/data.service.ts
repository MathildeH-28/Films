import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected persoLuke = [
    { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color:'fair', eye_color: 'blue', gender:'male', homeworld:'https://swapi.dev/api/planets/1/', img: 'assets/luke.jpg' }
]

  constructor() { }

    getPersoLukeFilm(){
      return this.persoLuke
    }


  /*getPersoFilms(): Observable<any>{
    return this.httpClient.get<any[]>('https://swapi.dev/api/people/1/').pipe(
      map( (data: any) => data['perso']),
           map( (tab: any[]) => {
            const newArray: any[] = []
            for(let i=0; i<tab.length;i++){
                let newElem= {
                  name: tab[i]['name'],
                  height: tab[i]['height'],
                  mass: tab[i]['mass'],
                  hair_color: tab[i]['hair_color'],
                  skin_color: tab[i]['skin_color'],
                  eye_color: tab[i]['eye_color'],
                  gender: tab[i]['gender'],
                  homeworld: tab[i]['homeworld'],
                  films: tab[i]['films'],
                  vehicles: tab[i]['vehicles'],
                  starships: tab[i]['starships']


                }
                newArray.push(newElem)
            }
            return newArray
           }

           )
        )
}*/
}
