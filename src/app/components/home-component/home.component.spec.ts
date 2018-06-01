import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { APP_BASE_HREF } from '@angular/common';
import { MainService } from '../../services/main.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', function () {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  let mock_ActivatedRoute,
    mock_Router,
    mock_MainService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
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
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });
});
