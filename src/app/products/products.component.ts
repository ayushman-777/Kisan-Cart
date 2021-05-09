import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  radishBid = 15400;
  ladyFingerBid = 36400;
  potatoBid = 19650;
  sweetPotatoBid = 33800;
  spinachBid = 25400;
  pumpkinBid = 5580;
  tomatoBid = 15400;
  mirchiBid = 7598;
  onionBid = 51400;
  shimlaMirchi = 21300;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  increaseRadishBid() {
    this.radishBid = this.radishBid + this.radishBid * 0.1;
  }

  increaseShimlaMirchiBid() {
    this.shimlaMirchi = this.shimlaMirchi + this.shimlaMirchi * 0.1;
  }

  increaseOnionBid() {
    this.onionBid = this.onionBid + this.onionBid * 0.1;
  }

  increaseMirchiBid() {
    this.mirchiBid = this.mirchiBid + this.mirchiBid * 0.1;
  }

  increaseTomatoBid() {
    this.tomatoBid = this.tomatoBid + this.tomatoBid * 0.1;
  }

  increasePumpkinBid() {
    this.pumpkinBid = this.pumpkinBid + this.pumpkinBid * 0.1;
  }

  increaseSpinachBid() {
    this.spinachBid = this.spinachBid + this.spinachBid * 0.1;
  }

  increaseSweetPotatoBid() {
    this.sweetPotatoBid = this.sweetPotatoBid + this.sweetPotatoBid * 0.1;
  }

  increasePotatoBid() {
    this.potatoBid = this.potatoBid + this.potatoBid * 0.1;
  }

  increaseLadyFingerBid() {
    this.ladyFingerBid = this.ladyFingerBid + this.ladyFingerBid * 0.1;
  }

  success() {
    this.snackBar.open('Bid Updated Successfully', 'Success', {duration: 3000, panelClass: ['bg-success', 'text-white', 'overlay'] });
  }
}
