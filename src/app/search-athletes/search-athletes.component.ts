import { Component, OnInit } from '@angular/core';
import { AthletesManageService } from '../services/athletes-manage.service';

@Component({
  selector: 'app-search-athletes',
  templateUrl: './search-athletes.component.html',
  styleUrls: ['./search-athletes.component.scss']
})
export class SearchAthletesComponent implements OnInit {

  name:any="";
  gender:any="";
  country:any="";
  event:any="";
  dataTable:any[]=[];
  constructor(private athletesManageService : AthletesManageService) { }

  ngOnInit(): void {
    this.loadAthletesSearchData();
  }

  loadAthletesSearchData(){
    this.athletesManageService.athletesSearchData(this.name,this.country,this.gender,this.event).subscribe(response=>{
      console.log(response)
       this.dataTable=response;
    });
  }
}
