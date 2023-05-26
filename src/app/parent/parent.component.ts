import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../service/send-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public parentMessage: any;
  formData: any = {};
  public showReplay: string = '';
  constructor(private sendData: SendDataService) {}

  ngOnInit() {}

  submitForm(form: any) {
    form.controls['message'].markAsTouched();
    if (form.valid) {
      this.parentMessage = this.formData.message;
    }
  }

  recivedReplay(messege: string) {
    this.showReplay = messege;
  }
}
