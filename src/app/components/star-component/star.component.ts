import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star.component.html',
})

/**
 * convert number into stars *-*
 */
export class StarComponent implements OnChanges, OnInit {

  /**
  * number of stars
  */
  @Input() star: number;

  /**
  * star that shine like you
  */
  shiningStar: any[];

  /**
  * star that do not shine
  **/
  unshiningStar: any[];

  /**
  * case of change
  **/
  ngOnChanges(): void {
    this.getShineStar();
  }

  /**
   * case of change
   */
  ngOnInit(): void {
    this.getShineStar();
  }

  /**
   *  create stars
   */
  getShineStar(): void {
    this.shiningStar = new Array(this.star);
    this.unshiningStar = new Array(5 - this.star);
  }
}
