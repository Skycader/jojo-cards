import { Component, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ItemModelInterface } from '../../../sweetbox/models/item.model';
import { CardModelInterface } from '../../models/card.model';

@Component({
  selector: 'app-cards-storage',
  templateUrl: './cards-storage.component.html',
  styleUrl: './cards-storage.component.scss',
})
export class CardsStorageComponent {
  @Input() cardsType!: string;

  constructor(private storage: StorageService) {}

  public cards: CardModelInterface[] = [];

  ngOnInit() {
    this.cards = this.storage.getCards(this.cardsType) as CardModelInterface[];
  }
}
