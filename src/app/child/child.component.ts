import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() message = '';
  @Output() sendMessage = new EventEmitter<string>();
  public formData: any = {};
  constructor() {}

  ngOnInit() {}

  sendReplay(from: any) {
    from.controls['replay'].markAsTouched();
    if (from.valid) {
      this.sendMessage.emit(this.formData.replay);
    }
  }
}
