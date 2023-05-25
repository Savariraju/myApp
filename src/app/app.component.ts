import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  public timerInfo: any = [];
  // private timerSubscription: Subscription;

  constructor() {}
  ngOnInit() {
    // const timer$ = timer(1000, 1000);
    // let i = 0;
    // timer$.subscribe(() => {
    //   this.timerInfo.push({
    //     title: i,
    //   });
    //   i++;
    // });
  }
}
