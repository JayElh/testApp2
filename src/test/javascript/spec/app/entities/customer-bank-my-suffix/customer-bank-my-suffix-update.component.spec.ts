/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TestApp2TestModule } from '../../../test.module';
import { CustomerBankMySuffixUpdateComponent } from 'app/entities/customer-bank-my-suffix/customer-bank-my-suffix-update.component';
import { CustomerBankMySuffixService } from 'app/entities/customer-bank-my-suffix/customer-bank-my-suffix.service';
import { CustomerBankMySuffix } from 'app/shared/model/customer-bank-my-suffix.model';

describe('Component Tests', () => {
    describe('CustomerBankMySuffix Management Update Component', () => {
        let comp: CustomerBankMySuffixUpdateComponent;
        let fixture: ComponentFixture<CustomerBankMySuffixUpdateComponent>;
        let service: CustomerBankMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestApp2TestModule],
                declarations: [CustomerBankMySuffixUpdateComponent]
            })
                .overrideTemplate(CustomerBankMySuffixUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CustomerBankMySuffixUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CustomerBankMySuffixService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new CustomerBankMySuffix(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.customerBank = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new CustomerBankMySuffix();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.customerBank = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
