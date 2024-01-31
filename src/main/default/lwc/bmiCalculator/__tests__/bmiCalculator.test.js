/**
 * Created by bjohnson on 1/27/24.
 */

import {createElement} from 'lwc';
import bmiCalculator from 'c/bmiCalculator'

describe('c-bmi-calculator test suite', () =>{
    afterEach(() => {
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    })
    async function flushPromises(){
        return Promise.resolve();
    }
    it('render two input fields', () => {
        const element = createElement('c-bmi-calculator', {
            is: bmiCalculator
        });
        document.body.appendChild(element);
        const inputs = Array.from(element.shadowRoot.querySelectorAll('input'));
        expect(inputs.length).toBe(2);
        expect(inputs[0].placeholder).toBe('enter height');
        expect(inputs[1].placeholder).toBe('enter weight');
    });
    it('should render a select field', () => {
        const element = createElement('c-bmi-calculator', {
            is: bmiCalculator
        });
        document.body.appendChild(element);
        const selectField = element.shadowRoot.querySelector('lightning-combobox');
        expect(selectField).not.toBe(null);

    });
})
