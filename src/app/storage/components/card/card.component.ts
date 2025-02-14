import { Component, Input } from '@angular/core';
import { CardModelInterface } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: CardModelInterface;

  flipped = true;

  flip() {
    this.playSound();
    this.flipped = !this.flipped;
  }

  playSound() {
    var audio = new Audio('assets/audio/slip.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 500);
  }
}
