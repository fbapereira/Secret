import { MainService } from "./main.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Category } from "../models/category.model";
import { Game } from "../models/game.model";


describe('Main Service  -> ', () => {
  let _MainService: MainService,
    mock_http,
    mock_toastr;

  beforeEach(() => {
    mock_http = jasmine.createSpyObj('HttpClient', ['get']);
    mock_toastr = jasmine.createSpyObj('ToastrService', ['error']);

    _MainService = new MainService(mock_http, mock_toastr);
  });

  it('it should not be undefined', () => {
    expect(_MainService).toBeTruthy();
  });


  describe('Run -> ', () => {

    it('it should return true', () => {
      mock_http.get.and.returnValue(Observable.of(mockObj));
      _MainService.Run()
        .subscribe((res: any) => {
          expect(res).toBeTruthy();
        });
    });

    it('it should return false', () => {
      mock_http.get.and.returnValue(Observable.of('teste'));
      _MainService.Run()
        .subscribe((res: any) => {
          expect(res).toBeFalsy();
        });
    });

    it('it should throw error ', () => {
      mock_http.get.and.returnValue(Observable.throw('teste'));
      _MainService.Run()
        .catch((e, r) => {
          expect(mock_toastr.error).toHaveBeenCalled();
          return [];
        })
        .subscribe((res: any) => {
        });
    });

  });

  describe('getData', () => {

    it('should return false', () => {
      expect(_MainService['getData']({})).toBeFalsy();
    });

    it('should return true', () => {
      expect(_MainService['getData'](mockObj)).toBeTruthy();
    });
  });

  describe('getCategory', () => {
    it('should return correctly', () => {
      let obj: Category = _MainService['getCategory'](mockObj._embedded.game_categories[0]);

      expect(obj).toBeDefined();
      expect(obj.games).toBeDefined();
      expect(obj.name).toBe('Popular Games');
      expect(obj.order).toBe(0);
      expect(obj.slug).toBe('popular-games');

    });
  });

  describe('getGame', () => {
    it('should return correctly', () => {
      let obj: Game = _MainService['getGame'](mockObj._embedded.game_categories[0]._embedded.games[0]);

      expect(obj).toBeDefined();
      expect(obj.background).toBeDefined();
      expect(obj.creation).toBe('2013-08-06 14:01:58.000000');
      expect(obj.description_long).toBe('bla bla bla');
      expect(obj.id).toBe('netent-starburst-old');
      expect(obj.name).toBe('Starburst');
      expect(obj.rating).toBe(5);
      expect(obj.thumbnail).toBe('//static.cherrycasino.com/media/game/desktop/lobby/150x140-starburst-new2.jpg?u=1487951589');
      expect(obj.vendor).toBe('netent');

    });
  });

  let mockObj = {
    "_links": {
      "self": {
        "href": "https://frontapi.cherrytech.com/game-categories"
      }
    },
    "_embedded": {
      "game_categories": [
        {
          "name": "Popular Games",
          "order": 0,
          "slug": "popular-games",
          "_embedded": {
            "games": [
              {
                "id": "netent-starburst-old",
                "slug": "starburst-old",
                "background": "//static.cherrycasino.com/img/games/gamebg/starburst-1385396764.jpg?u=1487951589",
                "description": "",
                "game_stakes": null,
                "height": "480",
                "name": "Starburst",
                "width": "640",
                "thumbnail": "//static.cherrycasino.com/media/game/desktop/lobby/150x140-starburst-new2.jpg?u=1487951589",
                "url": null,
                "created_at": {
                  "date": "2013-08-06 14:01:58.000000",
                  "timezone_type": 1,
                  "timezone": "+00:00"
                },
                "screenshot": null,
                "homepage_image": null,
                "vendor": "netent",
                "vendor_properties": null,
                "meta": {
                  "description_short": "",
                  "currency": "EUR",
                  "description_long": "bla bla bla",
                  "max_bet": 100,
                  "bonus": true,
                  "free_spins": false,
                  "lines": 10
                },
                "enabled": true,
                "label": "",
                "cols": 1,
                "rows": 1,
                "pos_x": null,
                "pos_y": null,
                "volatility": 1,
                "rating": 5,
                "backgrounds": [
                  "//static.cherrycasino.com/img/games/gamebg/starburst-1385396764.jpg?u=1487951589"
                ],
                "screenshots": [],
                "thumbnails": {
                  "legacy": "//static.cherrycasino.com/media/game/desktop/lobby/150x140-starburst-new2.jpg?u=1487951589"
                },
                "jurisdiction": "mga",
                "login_required": false,
                "_links": {
                  "self": {
                    "href": "https://frontapi.cherrytech.com/games/netent-starburst-old"
                  }
                }
              },
              {
                "id": "yggdrasil-joker-millions",
                "slug": "joker-millions",
                "background": "//static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1484151703",
                "description": "",
                "game_stakes": null,
                "height": "360",
                "name": "Joker Millions",
                "width": "640",
                "thumbnail": "//static.cherrycasino.com/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1484151703",
                "url": null,
                "created_at": {
                  "date": "2015-04-13 11:05:48.000000",
                  "timezone_type": 1,
                  "timezone": "+00:00"
                },
                "screenshot": null,
                "homepage_image": null,
                "vendor": "yggdrasil",
                "vendor_properties": null,
                "meta": {
                  "description_short": "",
                  "currency": "EUR",
                  "bonus": false,
                  "free_spins": false
                },
                "enabled": true,
                "label": "Jackpot",
                "cols": 1,
                "rows": 1,
                "pos_x": null,
                "pos_y": null,
                "volatility": 0,
                "rating": 0,
                "backgrounds": [
                  "//static.cherrycasino.com/media/game/GenericCasinoNEW.jpg?u=1484151703"
                ],
                "screenshots": [],
                "thumbnails": {
                  "280x280": "//static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x280.jpg?u=1484151703",
                  "280x600": "//static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T280x600.jpg?u=1484151703",
                  "500x375": "//static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T500x375.jpg?u=1484151703",
                  "600x280": "//static.cherrycasino.com/media/games/yggdrasil/7312/yggdrasil-7312-T600x280.jpg?u=1484151703",
                  "legacy": "//static.cherrycasino.com/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1484151703"
                },
                "jurisdiction": "mga",
                "login_required": false,
                "_links": {
                  "self": {
                    "href": "https://frontapi.cherrytech.com/games/yggdrasil-joker-millions"
                  }
                }
              }
            ]
          },
          "_links": {
            "self": {
              "href": "https://frontapi.cherrytech.com/game-categories/popular-games"
            }
          }
        }
      ]
    },
    "total_items": 7
  }
});
