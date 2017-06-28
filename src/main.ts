import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// extension methods
declare global {
    interface Storage {
        setObject: (key : string, value: object) => any;
        getObject: (key : string) => any;
    }
}
if (!Storage.prototype.setObject) {
    Storage.prototype.setObject = function (key, value) {
        this.setItem(key, JSON.stringify(value));
    }
}

if (!Storage.prototype.getObject) {
    Storage.prototype.getObject = function (key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }
}