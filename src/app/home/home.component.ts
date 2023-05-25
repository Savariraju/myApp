import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private timerSubscription: Subscription = new Subscription();
  constructor() {}

  ngOnInit() {
    let i = 0;
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      i++;
    });
  }
}
