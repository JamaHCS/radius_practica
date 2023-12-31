import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { SpinnerInterceptor } from './core/interceptors/spinner/spinner.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SharedModule } from './shared/shared.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    ScrollTopModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
