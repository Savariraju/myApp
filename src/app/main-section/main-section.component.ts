import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../service/send-data.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  constructor(private sendData: SendDataService) {}

  ngOnInit() {}

  submitForm(form: any) {
    form.controls['message'].markAsTouched();
    if (form.valid) {
    }
  }
}
