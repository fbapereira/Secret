import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Category } from '../models/category.model';
import { Game } from '../models/game.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ToastrService } from 'ngx-toastr';

@Injectable()
/**
 * Service that get all data
 */
export class MainService {

  /**
   * list of category
   */
  lstCategory: Category[] = [];


  constructor(private oHttpClient: HttpClient,
    private toastr: ToastrService, ) { }

  /**
   * get data from server
   */
  public Run(): Observable<Boolean> {
    return this.oHttpClient
      .get('/Api/game-categories')
      .catch((err, a) => {
        this.toastr.error('Unable to connect to the server. Please, try again.', 'Error');
        return [];
      })
      .map((obj: any) => {
        return this.getData(obj);
      });
  }

  /**
   * Get data from response
   * @param obj response
   */
  private getData(obj: any): boolean {
    // Validating data - We never know whats we got :)
    if (!obj ||
      !obj._embedded ||
      !obj._embedded.game_categories ||
      obj._embedded.game_categories.length === 0) {
      return false;
    }

    // process each category
    obj._embedded.game_categories.forEach((element: any) => {
      const oCategory = this.getCategory(element);
      if (oCategory) {
        this.lstCategory.push(oCategory);
      }
    });

    return true;
  }

  /**
   * Map category object
   * @param obj
   */
  private getCategory(obj: any): Category {

    // get data
    const oCategory: Category = new Category();
    oCategory.name = obj.name;
    oCategory.order = obj.order;
    oCategory.slug = obj.slug;
    oCategory.games = [];

    // validate games at strcuture
    if (!obj._embedded ||
      !obj._embedded.games) {
      return undefined;
    }

    // Get games
    obj._embedded.games.forEach((element: any) => {
      oCategory.games.push(this.getGame(element));
    });

    return oCategory;
  }

  // Map game object
  private getGame(obj: any): Game {

    const oGame: Game = new Game();
    oGame.background = obj.background;
    oGame.id = obj.id;
    oGame.name = obj.name;
    oGame.thumbnail = obj.thumbnail;
    oGame.vendor = obj.vendor;
    oGame.rating = obj.rating;

    if (obj.created_at && obj.created_at.date) {
      oGame.creation = obj.created_at.date;
    }

    if (obj.meta && obj.meta.description_long) {
      oGame.description_long = obj.meta.description_long;
    }

    return oGame;

  }
}
