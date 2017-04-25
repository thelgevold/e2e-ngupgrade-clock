import { Component, NgZone } from '@angular/core';

declare var Zone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private zone: NgZone) {
    
  }

  ngOnInit() {
    // Zone.current.fork({}).run(() => {
    //   setInterval(() => {
    //     this.time = new Date().toLocaleString();
    //     console.log(this.zone.isStable);
    //   }, 100);
    // });
    new Zone().run(() => {
      setInterval(() => {
       // this.time = new Date().toLocaleString();
        //console.log(this.zone.isStable);
      }, 100);
    });
  }
}
