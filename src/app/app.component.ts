import { Component } from '@angular/core';
import { AppService } from './_services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private appService:AppService){
    
  }
  ngOnInit(){
    this.appService.getState().subscribe(val=>{
          // this.title=this.appService.data.title
          console.log(val);
          this.title=val.title
    });
  }
}
