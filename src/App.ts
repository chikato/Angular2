import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './core/core.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(CoreModule);