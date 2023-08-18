import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function baseurl() {
  return "https://kizaapi.ksesystem.com/api/";
}

const provider = [
  { provide: 'baseurl', useFactory: baseurl, desp: [] },
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
