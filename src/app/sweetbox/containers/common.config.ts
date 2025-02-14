import { coins } from '../resources/coins.resource';
import { collectables } from '../resources/collectables.resource';
import { commonCards } from '../resources/common-cards.resource';
import { energy } from '../resources/energy.resource';
import { goldCards } from '../resources/gold.resource';
import { keys } from '../resources/keys.resource';
import { legendaryCards } from '../resources/legendary.resource';
import { money } from '../resources/money.resource';
import { partsItems } from '../resources/parts.resource';
import { premiumCards } from '../resources/premium.resource';
import { products } from '../resources/products.resource';
import { rareCards } from '../resources/rare-cards.resource';
import { silverCards } from '../resources/silver.resource';
import { superRareCards } from '../resources/super-rare.resource';
import { ultraRareCards } from '../resources/ultra-rare.resource';

Array.prototype.repeat = function <T>(this: T[], count: number): T[] {
  let output: T[] = this;
  while (--count) {
    output = output.concat(this);
  }
  return output;
};

Array.prototype.setChance = function(this: any[], chance: number): any[] {
  return this.map((element) => {
    element.chance = chance;
    return element;
  });
};

Array.prototype.getRandomElement = function(): any | undefined {
  if (this.length === 0) {
    return undefined; // Возвращаем undefined, если массив пустой
  }
  const randomIndex = Math.floor(Math.random() * this.length);
  let card = this[randomIndex];

  const chance = getRandomInt(1, card.chance);
  console.log(`Попытка получить ${card.image} ? ${chance}`);
  if (chance === 1) {
    return card;
  } else {
    return commonCards.getRandomElement();
  }
};

export const commonContainer = [
  ...[...commonCards].setChance(1), //Обычные карточки
  ...[...rareCards].setChance(10), //Редкие карточки,
  ...[...superRareCards].setChance(100), //Редкие карточки,
  ...[...ultraRareCards].setChance(1000), //Редкие карточки,
  ...[...premiumCards].setChance(10000), //Редкие карточки,
  ...[...silverCards].setChance(100000), //Редкие карточки,
  ...[...goldCards].setChance(1000000), //Редкие карточки,
  ...[...legendaryCards].setChance(10000000), //Редкие карточки,
];

function getRandomInt(min: number, max: number): number {
  // Убедимся, что min и max - целые числа
  min = Math.ceil(min);
  max = Math.floor(max);

  // Генерируем случайное целое число в диапазоне [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber); // Выведет случайное число от 1 до 10
