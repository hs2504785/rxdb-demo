import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnSymbol',
})
export class ReturnSymbolPipe implements PipeTransform {
  transform(symbol: string): string {
    console.log('Pipe Called');
    switch (symbol) {
      case 'H':
        return 'Hydrogen';
      case 'He':
        return 'Hellium';
      case 'Li':
        return 'Lithium';
      case 'Be':
        return 'Beryllium';
      case 'B':
        return 'Boron';
      case 'C':
        return 'Carbon';
      default:
        return 'No Match';
    }
  }
}
