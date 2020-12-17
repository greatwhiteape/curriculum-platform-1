import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeEstimate'
})
export class TimeEstimatePipe implements PipeTransform {

  transform(items: any[], selected_time_estimates: any[]): any[] {
    if (!items) { return [{}]; }
    if (!selected_time_estimates) { return items; }
    return items.filter( item => this.checkFilter(item, selected_time_estimates));
  }

  checkFilter(object, selected_time_estimates) {
    if (selected_time_estimates.length > 0 && object.time_estimate) {
      const some = selected_time_estimates.some(time_estimate => object.time_estimate.id === time_estimate.id);
      return some;
    } else {
      return true;
    }
  }

}
