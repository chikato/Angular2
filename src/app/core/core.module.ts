import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreComponent } from './core.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [CoreComponent],
    bootstrap: [CoreComponent]
})

export class CoreModule {}