import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    SnackBarComponent
  ]
})
export class SharedComponentsModule { }
