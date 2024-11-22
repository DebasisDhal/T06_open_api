import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(AppComponent, 
  {
    providers: [
      provideHttpClient(), // Provide HttpClient support
      importProvidersFrom(FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
      ) // Add FormsModule for ngModel
    ]
  }).catch((err) => console.error(err));