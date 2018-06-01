import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { APP_BASE_HREF } from '@angular/common';
import { MainService } from '../../services/main.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Game } from '../../models/game.model';
import { GamesComponent } from './games.component';
import { Category } from '../../models/category.model';

describe('GamesComponent', function () {
  let fixture: ComponentFixture<GamesComponent>;
  let component: GamesComponent;

  let mock_Router,
    mock_NgbModal;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamesComponent],
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
        fixture = TestBed.createComponent(GamesComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });

  it('should get no description', () => {
    const oGame: Game = new Game();
    const oCategory: Category = new Category();

    oCategory.name = 'john tittor';
    oCategory.order = 1;
    oCategory.slug = 'john_tittor';

    oGame.name = "name";
    oGame.id = "id";
    oGame.background = "id";

    oCategory.games = [];
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);

    component.category = oCategory;

    fixture.whenStable().then(() => {

      expect(component.games.length).toBe(4);
    });
  });
});
