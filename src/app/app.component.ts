import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp';
  public timerInfo: any = [];
  ngOnInit() {
    const timer$ = timer(1000, 1000);
    let i = 0;
    timer$.subscribe(() => {
      this.timerInfo.push({
        title: i,
      });
      i++;
    });
  }
}
