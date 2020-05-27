import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BlPrintComponent } from "./bl-print.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BlPrintComponent", () => {

  let fixture: ComponentFixture<BlPrintComponent>;
  let component: BlPrintComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BlPrintComponent]
    });

    fixture = TestBed.createComponent(BlPrintComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
