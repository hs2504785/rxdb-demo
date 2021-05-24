import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';
import {
  DatabaseService,
  initDatabase,
} from 'projects/rxdb/src/lib/services/database.service';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initDatabase,
      multi: true,
      deps: [DatabaseService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
