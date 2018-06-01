import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { APP_BASE_HREF } from '@angular/common';
import { GameDetailComponent } from './game-detail.component';
import { MainService } from '../../services/main.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Game } from '../../models/game.model';

describe('GameDetailComponent', function () {
  let fixture: ComponentFixture<GameDetailComponent>;
  let component: GameDetailComponent;

  let mock_Router,
    mock_NgbModal;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailComponent],
      imports: [

        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: Router, useValue: mock_Router },
        { provide: NgbModal, useValue: mock_NgbModal },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(GameDetailComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });


  describe('getDescription -> ', () => {

    it('should get no description', () => {
      const oGame: Game = new Game();
      component.game = oGame;
      expect(component.getDescription()).toBe('No description');
    });


    it('should get description', () => {
      const oGame: Game = new Game();
      oGame.description_long = 'john tittor';
      component.game = oGame;
      expect(component.getDescription()).toBe('john tittor');
    });
  });
});
