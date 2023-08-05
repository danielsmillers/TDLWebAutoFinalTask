import { IWorldOptions } from '@cucumber/cucumber';
import { ICreateAttachment } from '@cucumber/cucumber/lib/runtime/attachment_manager';

interface CustomWorld {
  attach: ICreateAttachment;
  PRODUCT_NAME: string;
  PRODUCT_PRICE: string;
}

export default function (this: CustomWorld, options: IWorldOptions): void {
  this.attach = options.attach;
  this.PRODUCT_NAME = '';
  this.PRODUCT_PRICE = '';
}
