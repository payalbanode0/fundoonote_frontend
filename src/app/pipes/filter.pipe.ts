import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any) {
    if (args == "default message") {
      return value;
    }
    else {
      args = args.toLocaleLowerCase();
    }
    return value.filter((note: any) => {
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);

    })
  }
}
