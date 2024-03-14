import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/*bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch())],
}).catch((err) => console.error(err));
*/
