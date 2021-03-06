import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestApp2SharedModule } from 'app/shared';
import {
    CoreUserMySuffixComponent,
    CoreUserMySuffixDetailComponent,
    CoreUserMySuffixUpdateComponent,
    CoreUserMySuffixDeletePopupComponent,
    CoreUserMySuffixDeleteDialogComponent,
    coreUserRoute,
    coreUserPopupRoute
} from './';

const ENTITY_STATES = [...coreUserRoute, ...coreUserPopupRoute];

@NgModule({
    imports: [TestApp2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CoreUserMySuffixComponent,
        CoreUserMySuffixDetailComponent,
        CoreUserMySuffixUpdateComponent,
        CoreUserMySuffixDeleteDialogComponent,
        CoreUserMySuffixDeletePopupComponent
    ],
    entryComponents: [
        CoreUserMySuffixComponent,
        CoreUserMySuffixUpdateComponent,
        CoreUserMySuffixDeleteDialogComponent,
        CoreUserMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestApp2CoreUserMySuffixModule {}
