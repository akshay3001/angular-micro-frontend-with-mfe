import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import { appRoutes } from './app/app.routes';
import { withEnabledBlockingInitialNavigation } from '@angular/router';

bootstrapApplication(RemoteEntryComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
});
