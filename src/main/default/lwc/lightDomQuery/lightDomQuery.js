/**
 * Created by bjohnson on 2/1/24.
 */

import {LightningElement} from 'lwc';

export default class LightDomQuery extends LightningElement {
    handleButtonClick(){
        this.template.querySelector('p.lightDomParagraph').innerText = 'text changed by parent'
    }

}