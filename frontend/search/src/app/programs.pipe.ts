import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'programs'
})

export class ProgramsPipe implements PipeTransform {

  transform(items: any[], selected_programs?: any[]): any[] {
    if (!items) { return [{}]; }
    if (!selected_programs) { return items; }
    return items.filter( item => this.checkFilter(item, selected_programs));
  }

  checkFilter(object, selected_programs) {
    if (selected_programs.length > 0) {
      const some = selected_programs.some(program => object.program.id === program.id);
      return some;
    } else {
      return true;
    }
  }
}
