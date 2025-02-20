import { Component, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ItemModelInterface } from '../../../sweetbox/models/item.model';
import { CardModelInterface } from '../../models/card.model';
import { commonCards } from '../../../sweetbox/resources/common-cards.resource';
import { rareCards } from '../../../sweetbox/resources/rare-cards.resource';

@Component({
  selector: 'app-cards-storage',
  templateUrl: './cards-storage.component.html',
  styleUrl: './cards-storage.component.scss',
})
export class CardsStorageComponent {
  @Input() cardsType!: string;

  public progress = '0%';

  public cardsTotal: any = {
    common: commonCards.length,
    rare: rareCards.length,
  };

  ngAfterViewInit() {
    this.progress =
      (this.cards.length / this.cardsTotal[this.cardsType]) * 100 + '%';
  }
  constructor(private storage: StorageService) { }

  public cards: CardModelInterface[] = [];

  ngOnInit() {
    this.cards = this.storage.getCards(this.cardsType) as CardModelInterface[];
  }
}
