import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestApp2SharedModule } from 'app/shared';
import {
    BankMySuffixComponent,
    BankMySuffixDetailComponent,
    BankMySuffixUpdateComponent,
    BankMySuffixDeletePopupComponent,
    BankMySuffixDeleteDialogComponent,
    bankRoute,
    bankPopupRoute
} from './';

const ENTITY_STATES = [...bankRoute, ...bankPopupRoute];

@NgModule({
    imports: [TestApp2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BankMySuffixComponent,
        BankMySuffixDetailComponent,
        BankMySuffixUpdateComponent,
        BankMySuffixDeleteDialogComponent,
        BankMySuffixDeletePopupComponent
    ],
    entryComponents: [
        BankMySuffixComponent,
        BankMySuffixUpdateComponent,
        BankMySuffixDeleteDialogComponent,
        BankMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestApp2BankMySuffixModule {}
