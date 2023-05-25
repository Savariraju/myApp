import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public parentMessage: any;
  formData: any = {};
  constructor() {}

  ngOnInit() {}

  submitForm(form: any) {
    form.controls['message'].markAsTouched();
    if (form.valid) {
      this.parentMessage = this.formData.message;
    }
  }
}
