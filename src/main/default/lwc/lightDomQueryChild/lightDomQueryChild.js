/**
 * Created by bjohnson on 2/1/24.
 */

import {LightningElement} from 'lwc';

export default class LightDomQueryChild extends LightningElement {
    static renderMode = 'light'

    handleButtonClick(){
        this.querySelector('p.lightDomParagraph').innerText = 'Text changed by child';
    }

}