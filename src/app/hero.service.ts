import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders, HttpHeaderResponse} from '@angular/common/http'
import{catchError,map,tap} from 'rxjs/operators';
import {Hero} from './hero';
import {Observable,of} from 'rxjs'; 
import { MessageService} from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


   private heroesUrl = 'api/heroes';


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
  return this.http.get<Hero[]>(this.heroesUrl);
 
  
    }
private handleError<T>(operation='operation',result?:T){
}
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url);
}
shoW(){
 this.getHeroes ;

}

 private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero,this.httpOption)
}
httpOption = {
  headers : new HttpHeaders ({'content-type' :'application/json'})
}
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOption)
  
}
deleteHero(hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete<Hero>(url, this.httpOption)
}


}