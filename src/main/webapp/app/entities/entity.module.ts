import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestApp2CoreUserMySuffixModule } from './core-user-my-suffix/core-user-my-suffix.module';
import { TestApp2BankMySuffixModule } from './bank-my-suffix/bank-my-suffix.module';
import { TestApp2CustomerMySuffixModule } from './customer-my-suffix/customer-my-suffix.module';
import { TestApp2CustomerBankMySuffixModule } from './customer-bank-my-suffix/customer-bank-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TestApp2CoreUserMySuffixModule,
        TestApp2BankMySuffixModule,
        TestApp2CustomerMySuffixModule,
        TestApp2CustomerBankMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestApp2EntityModule {}
