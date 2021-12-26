import { TestBed } from '@angular/core/testing';
import { ArchitectureTobeService } from './architecture-tobe.service';
describe('ArchitectureTobeService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ArchitectureTobeService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=architecture-tobe.service.spec.js.map