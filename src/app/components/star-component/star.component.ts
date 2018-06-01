import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: 'app-star-component',
  templateUrl: './star.component.html',
})

export class StarComponent implements OnChanges, OnInit {

  @Input() star: number;
  shiningStar: any[];
  unshiningStar: any[];

  ngOnChanges(): void {
    this.getShineStar();
  }
  ngOnInit(): void {
    this.getShineStar();
  }

  getShineStar(): void {
    this.shiningStar = new Array(this.star);
    this.unshiningStar = new Array(5 - this.star);
  }
}
