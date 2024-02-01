/**
 * Created by bjohnson on 2/1/24.
 */

import {LightningElement, api} from 'lwc';

export default class LwcAuraChild extends LightningElement {
    @api title;


    handleClick(event){
      this.dispatchEvent(new CustomEvent('sendmessage', {
          detail: {
              "message": "hello from the LWC child"
          }
      }))
    }
}