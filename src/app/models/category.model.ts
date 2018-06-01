import { Game } from './game.model';

/**
 * game's category
 */
export class Category {
  /**
   * category's name to be displayed
   */
  name: string;

  /**
   *category order
   */
  order: number;

  /**
   * category id
   */
  slug: string;

  /**
   * games of category
   */
  games: Game[];
}
