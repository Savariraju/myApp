import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionRoutingModule } from './main-section-routing.module';
import { MainSectionComponent } from './main-section.component';

@NgModule({
  imports: [CommonModule, MainSectionRoutingModule],
  declarations: [MainSectionComponent],
})
export class MainSectionModule {}
