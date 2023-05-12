import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { dependencyInjection } from './app/shared/providers';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    
    provideRouter(ROUTES),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, HttpClientModule),
    dependencyInjection,
  ]
}).catch((err) =>
  console.log(err)
);
