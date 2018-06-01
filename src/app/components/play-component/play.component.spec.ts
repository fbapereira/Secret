import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainService } from "../../services/main.service";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { PlayComponent } from "./play.component";

describe('PlayComponent', function () {
  let fixture: ComponentFixture<PlayComponent>;
  let component: PlayComponent;

  let mock_ActivatedRoute,
    mock_Router,
    mock_MainService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayComponent],
      imports: [

        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mock_ActivatedRoute },
        { provide: Router, useValue: mock_Router },
        { provide: MainService, useValue: mock_MainService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(PlayComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });
});
