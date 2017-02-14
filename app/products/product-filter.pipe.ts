import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], filterBy: string): IProduct[] {

    let filter: string = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }
}