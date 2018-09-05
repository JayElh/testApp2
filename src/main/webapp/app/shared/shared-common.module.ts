import { NgModule } from '@angular/core';

import { TestApp2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestApp2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestApp2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestApp2SharedCommonModule {}
