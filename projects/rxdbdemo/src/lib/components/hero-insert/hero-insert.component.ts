import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HerodbService } from '../../services/herodb.service';

@Component({
  selector: 'hero-insert',
  templateUrl: './hero-insert.component.html',
  styleUrls: ['./hero-insert.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInsertComponent {
  @ViewChild('input', { static: false }) inputfield: any;

  tempDoc: any;

  constructor(private herodbService: HerodbService) {
    this.reset();
  }

  reset() {
    this.tempDoc = this.herodbService.heroCollection.newDocument({
      maxHP: getRandomArbitrary(100, 1000),
    });
  }

  async submit(val) {
    this.tempDoc.name = val.name;
    this.tempDoc.color = val.color;
    try {
      await this.tempDoc.save();
      this.reset();
    } catch (err) {
      alert('Error: Please check console');
      console.error('hero-insert.submit(): error:');
      throw err;
    }

    this.inputfield.nativeElement.focus();
  }
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @link https://stackoverflow.com/a/1527820/3443137
 */
function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
