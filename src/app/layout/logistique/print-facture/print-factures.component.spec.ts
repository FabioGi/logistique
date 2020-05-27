import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FacturesComponent } from "./factures.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FacturesComponent", () => {

  let fixture: ComponentFixture<FacturesComponent>;
  let component: FacturesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FacturesComponent]
    });

    fixture = TestBed.createComponent(FacturesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
