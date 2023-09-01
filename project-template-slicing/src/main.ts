import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function baseurl() {
  return "https://kizaapi.ksesystem.com/api/";
}

export function imageurl() {
  return "https://kizaapi.ksesystem.com/";
}

const provider = [
  { provide: 'baseurl', useFactory: baseurl, desp: [] },
  { provide: 'imageurl', useFactory: imageurl, desp: [] },
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
