import { TestBed } from '@angular/core/testing';
import { HavePermissionComponent } from './have-permission.component';
describe('HavePermissionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HavePermissionComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(HavePermissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=have-permission.component.spec.js.map