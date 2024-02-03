/**
 * Created by bjohnson on 1/27/24.
 */

import {LightningElement} from 'lwc';
import {loadStyle} from "lightning/platformResourceLoader";
import styles from '@salesforce/resourceUrl/globalCSS'

export default class BmiCalculator extends LightningElement {

    height = "";
    weight = "";
    bmi = "";
    result = "";
    async connectedCallback() {
        try{
            await loadStyle(this, styles)
        }catch (e){
            console.error(e)
        }
    }
    handleInputChange(event){
       const {name, value} = event.target;
       name === 'height' ? this.height = value : this.weight = value;
    }
    submitHandler(event){
        event.preventDefault();
        this.calculateBMI();
    }
    calculateBMI(){
        let tempBMI = (Number(this.weight) * 703) / (Number(this.height) * (this.height));
        tempBMI.toFixed(2);
        this.bmi = tempBMI.toFixed(2);
        console.log(this.bmi)
        if (this.bmi < 18.5){
            this.result = 'Underweight';
        }else if(this.bmi < 25 ){
            this.result = 'healthy';
        }else if (this.bmi > 25 && this.bmi < 30 ){
            this.result = 'overweight';
        }else {
            this.result = 'Obese'
        }
    }
    handleRecalculate(){
        this.result = '';
    }
}