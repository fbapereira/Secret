
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Game } from '../../models/game.model';
import { Category } from '../../models/category.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { APP_BASE_HREF } from '@angular/common';

describe('SearchComponent', function () {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;


  let mock_ActivatedRoute = {},
    mock_Router = {},
    mock_MainService: any = {};

  beforeEach(async(() => {
    mock_MainService.lstCategory = [];
    mock_Router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mock_ActivatedRoute },
        { provide: Router, useValue: mock_Router },
        { provide: MainService, useValue: mock_MainService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    expect(component).toBeTruthy();
  });


  it('should removeDuplicates', () => {

    let oGame: Game = new Game();
    const oCategory: Category = new Category();

    oCategory.name = 'john tittor';
    oCategory.order = 1;
    oCategory.slug = 'john_tittor';

    oGame.name = 'name';
    oGame.id = 'id';
    oGame.background = 'id';

    oCategory.games = [];
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);
    oCategory.games.push(oGame);

    oGame = new Game();
    oGame.name = 'abc';
    oGame.id = 'teste';
    oGame.background = 'teste';
    oCategory.games.push(oGame);


    component.category = oCategory;

    expect(component.removeDuplicates(oCategory.games, 'id').length).toBe(2);
  });
});
