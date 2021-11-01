import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AthletesManageService {

  Baseurl= environment.apiEndpoint;

  constructor(private http: HttpClient, private router: Router) { }

  //Save Athletes------------------------------------------------------------------------------

saveAthletes(data:Object){
     
    return this.http.post<any>(this.Baseurl+'athletesRequest/addAthletes',data).pipe(
      map((res) => {
       
        return res;
      }),
      catchError(this.handleError<any>('login failier'))
    );
}

//Search Athletes------------------------------------------------------------------------------
athletesSearchData(name:String,country:String,gender:String,event:String){
  
return this.http.get<any>(this.Baseurl+'athletesRequest/searchAthletesData?name='+name+"&country="+country+"&gender="+gender+"&event="+event).pipe(
  map((res) => {
   
    return res;
  }),
  catchError(this.handleError<any>('login failier'))
);
}

//handle error-------------------------------------------------------------------------------
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    
    console.log(`${operation} failed: ${error.message}`);
    if (error.status === 401 || error.status === 403) {
       
      this.router.navigateByUrl(`/login`);
      
      return of(error.message); 
    }else{
      swal.fire('Error', "Something went wrong", 'error');
    }
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
