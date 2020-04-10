import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  student : FormGroup;

    ngOnInit(){

      this.student = new FormGroup({
        "profile" : new FormArray([
          new FormGroup({
            "name" : new FormControl(null),
            "email" : new FormControl(null),
            "contact" : new FormControl(null)
          })
        ])
        
      })

    }

    onSubmit(){
      console.log(this.student.value.profile);
    }

    onnewGroup(){
     var singleGroup =  new FormGroup({
        "name" : new FormControl(null),
        "email" : new FormControl(null),
        "contact" : new FormControl(null)
      });
      (<FormArray>this.student.get('profile')).push(singleGroup)
    }

    get profile():FormArray{
      return <FormArray>this.student.controls.profile;
}
 
    removeGroup(i:number,selectGroup:FormGroup){

      this.profile.controls.splice(i,1);
      // delete gropControl.controls[i];
      console.log(this.profile);
      this.profile.updateValueAndValidity({ onlySelf: false })

    }
}
