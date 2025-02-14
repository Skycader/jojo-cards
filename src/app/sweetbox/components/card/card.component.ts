import { Component, Input } from '@angular/core';
import { CardModelInterface } from '../../models/item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: CardModelInterface;

  flipped = false;

  flip(e: any) {
    if (this.flipped) return;
    if (!this.flipped) e.stopPropagation();
    this.playSound();
    this.flipped = !this.flipped;
    setTimeout(() => (this.card.isShowingTitle = true), 300);
  }

  playSound() {
    var audio = new Audio('assets/audio/slip.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 500);
  }
}
