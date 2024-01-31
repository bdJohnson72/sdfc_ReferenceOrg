/**
 * Created by bjohnson on 1/27/24.
 */

import {LightningElement} from 'lwc';

export default class BmiCalculator extends LightningElement {

    system='US';

    get options(){
        return [
            {label: 'US', value: 'US'},
            {label: 'Metric', value: 'Metric'}
        ]
    }
    handleInputChange(event){

    }

    handleSystemChange(event){
        this.system = event.detail.value;
        console.log(this.system)
    }

}