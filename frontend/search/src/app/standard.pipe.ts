import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standard'
})
export class StandardPipe implements PipeTransform {
  transform(items: any[], selected_standards: any[]): any[] {
    console.log('Standard Pipe: ',items, selected_standards);
    if (!items) { return [{}]; }
    if (!selected_standards) { return items; }
    return items.filter(item => this.checkFilter(item, selected_standards));
  }

  checkFilter(object, selected_standards) {
    console.log('Standards checkFilter: ', object, selected_standards);
    if (selected_standards.length > 0) {
      const some = selected_standards.some(standard => object.standards_relationship.some(item => item.standard.id === standard.id));
      return some;
    } else {
      return true;
    }
  }

}
