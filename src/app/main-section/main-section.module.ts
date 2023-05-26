import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionRoutingModule } from './main-section-routing.module';
import { MainSectionComponent } from './main-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendDataService } from '../service/send-data.service';

@NgModule({
  imports: [
    CommonModule,
    MainSectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MainSectionComponent],
  providers: [SendDataService],
})
export class MainSectionModule {}
