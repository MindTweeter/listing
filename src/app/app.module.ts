import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatListingComponent } from './components/cat-listing/cat-listing.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CatListingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: environment.LOGGER_LEVEL ? NgxLoggerLevel.LOG : NgxLoggerLevel.OFF,
      serverLogLevel: environment.SERVER_LOG_LEVEL ? NgxLoggerLevel.LOG : NgxLoggerLevel.OFF,
      disableConsoleLogging: environment.CONSOLE_LOG
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
