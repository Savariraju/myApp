import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SendDataService {
  private sendMessageTest = new Subject<string>();
  message$ = this.sendMessageTest.asObservable();

  constructor() {}

  sendMessage(message: string) {
    this.sendMessageTest.next(message);
  }
}
