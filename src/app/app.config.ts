import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: {} = {
  someProperty: 'some value',
  someOtherProperty: 'some other value'
};
