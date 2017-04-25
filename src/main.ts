import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';

platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
  adapter.bootstrap(document.body, ['angular-legacy']);
});
