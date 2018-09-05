import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestApp2SharedModule } from 'app/shared';
import {
    CustomerBankMySuffixComponent,
    CustomerBankMySuffixDetailComponent,
    CustomerBankMySuffixUpdateComponent,
    CustomerBankMySuffixDeletePopupComponent,
    CustomerBankMySuffixDeleteDialogComponent,
    customerBankRoute,
    customerBankPopupRoute
} from './';

const ENTITY_STATES = [...customerBankRoute, ...customerBankPopupRoute];

@NgModule({
    imports: [TestApp2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CustomerBankMySuffixComponent,
        CustomerBankMySuffixDetailComponent,
        CustomerBankMySuffixUpdateComponent,
        CustomerBankMySuffixDeleteDialogComponent,
        CustomerBankMySuffixDeletePopupComponent
    ],
    entryComponents: [
        CustomerBankMySuffixComponent,
        CustomerBankMySuffixUpdateComponent,
        CustomerBankMySuffixDeleteDialogComponent,
        CustomerBankMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestApp2CustomerBankMySuffixModule {}
