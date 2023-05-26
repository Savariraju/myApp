import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { SendDataService } from './service/send-data.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [SendDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
