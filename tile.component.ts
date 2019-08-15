import { Component, OnInit, Input } from '@angular/core';
import { ITile } from 'src/app/interfaces/itile';

@Component({
  selector: '[app-tile]', // here selecter is property binded
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  imagepath:string='./assets/images/';
@Input() tile:ITile
  constructor() { }

  ngOnInit() {
  }

}
