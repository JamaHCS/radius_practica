import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmPopupModule,
    VirtualScrollerModule,
    ProgressBarModule,
  ],
  exports: [ConfirmPopupModule, VirtualScrollerModule, ProgressBarModule],
})
export class PrimeModule {}
