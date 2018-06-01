import { StarComponent } from "./star.component";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
// import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('StarComponent', function () {
  let fixture: ComponentFixture<StarComponent>;
  let component: StarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(StarComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });


  it('should shine correctly', () => {
    component.star = 4;
    fixture.detectChanges();
    expect(component.shiningStar.length).toBe(4);
    expect(component.unshiningStar.length).toBe(1);
  });

});
