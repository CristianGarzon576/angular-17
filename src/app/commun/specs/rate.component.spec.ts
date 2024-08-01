import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateComponent } from '../rate.component';

describe('RateComponent', () => {
    let component: RateComponent;
    let fixture: ComponentFixture<RateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RateComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display the correct rate', () => {
        component.currentRate = 4;
        fixture.detectChanges();
        const rateElement = fixture.nativeElement.querySelector('p');
        expect(rateElement.textContent).toContain('4');
    });

    it('should display the correct number of reviews', () => {
        component.currentReviews = 10;
        fixture.detectChanges();
        const reviewsElement = fixture.nativeElement.querySelectorAll('p')[1];
        expect(reviewsElement.textContent).toContain('10 opiniones');
    });
});