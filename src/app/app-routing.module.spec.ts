import {TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, AppRoutingModule]
        });
    });

    it('should create', () => {
        const appRoutingModule = TestBed.inject(AppRoutingModule);
    expect(appRoutingModule).toBeTruthy();
    })
})