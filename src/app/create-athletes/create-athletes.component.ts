import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AthletesManageService } from '../services/athletes-manage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-athletes',
  templateUrl: './create-athletes.component.html',
  styleUrls: ['./create-athletes.component.scss']
})
export class CreateAthletesComponent implements OnInit {

  athletesForm :FormGroup=new FormGroup({});
  eventList:String[]=[];
  eventObList:any[]=[];
  athletes:String='';

  constructor(private athletesManageService : AthletesManageService) { 
   
  }

  ngOnInit(): void {
    this.athletesForm = new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      gender:new FormControl(''),
      dataOfBirth:new FormControl(''),
      country:new FormControl(''),
      event:new FormControl(''),
    });
  }

  onSubmit(){
    debugger;
    let values;
    values=this.athletesForm.value;
    values['events']=this.eventObList;
    values['status']=1;
    debugger;
    this.athletesManageService.saveAthletes(values).subscribe(response=>{
      console.log(response);
      swal.fire("Success", "Athletes Request Details Save Successfully", "success");
      this.onReset();
    })
  }

  onReset(){
    this.athletesForm.reset;
    this.eventList=[];
  }

  eventLoad(){
    this.eventList.push(this.athletesForm.get('event')?.value);
    this.eventObList=[];
    for(var e of this.eventList){
      this.eventObList.push({
        "name":e,
        "result":1
       })
    }
  }

  removeEvent(elist:String){
    this.eventList.splice(this.eventList.indexOf(elist),1)
    this.eventObList=[];
    for(var e of this.eventList){
      this.eventObList.push({
        "name":e,
        "result":1
       })
    }
  }


}
