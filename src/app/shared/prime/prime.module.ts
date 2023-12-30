import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmPopupModule,
    VirtualScrollerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    DialogModule,
  ],
  exports: [
    ConfirmPopupModule,
    VirtualScrollerModule,
    ProgressBarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    DialogModule,
  ],
})
export class PrimeModule {}
