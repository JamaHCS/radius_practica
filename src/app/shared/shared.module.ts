import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from './prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PrimeModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
})
export class SharedModule {}
