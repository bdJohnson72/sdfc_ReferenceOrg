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
    it('should render a submit button', () => {
        const element = createElement('c-bmi-calculator', {
            is: bmiCalculator
        });
        document.body.appendChild(element);
        const button = element.shadowRoot.querySelector('button');
        expect(button.textContent).toBe('Calculate')
    });
    it('should calculate bmi', async () => {
        const element = createElement('c-bmi-calculator', {
            is: bmiCalculator
        });
        document.body.appendChild(element);
        const button = element.shadowRoot.querySelector('.submit');
        const height = element.shadowRoot.querySelector('input[name="height"]')
        const weight = element.shadowRoot.querySelector('input[name="weight"]')

        height.value = 73;
        weight.value = 210;
        height.dispatchEvent(new CustomEvent("change"));
        weight.dispatchEvent(new CustomEvent("change"));
        button.click();
        await flushPromises();
        const form = element.shadowRoot.querySelector('form');
        const section = element.shadowRoot.querySelector('section');
        expect(section).not.toBe(null);
        const bmi = element.shadowRoot.querySelector('.bmi-result');
        expect(bmi.textContent).toBe('Your BMI is 27.70');
        console.log(form)
        expect(form).toBeNull()
    });
    it('should handle recalculate logic', async () => {
        const element = createElement('c-bmi-calculator', {
            is: bmiCalculator
        });
        document.body.appendChild(element);
        //test initial conditions
        const results = element.shadowRoot.querySelector('.results');
        const form = element.shadowRoot.querySelector('form');
        expect(form).not.toBeNull();
        expect(results).toBeNull();
        const height = element.shadowRoot.querySelector('input[name="height"]')
        const weight = element.shadowRoot.querySelector('input[name="weight"]')
        const calculateButton = element.shadowRoot.querySelector('.submit')
        height.value = 73;
        weight.value = 210;
        height.dispatchEvent(new CustomEvent('change'));
        weight.dispatchEvent(new CustomEvent('change'));
        calculateButton.click();
        await flushPromises();
        const newForm = element.shadowRoot.querySelector('form');
        const newResults = element.shadowRoot.querySelector('.results');
        expect(newForm).toBeNull();
        expect(newResults).not.toBe(null);
        const recalcButton = element.shadowRoot.querySelector('.button-recalc');
        recalcButton.click();
        await flushPromises();
        const postRecalcResults = element.shadowRoot.querySelector('.results');
        const postRecalcForm = element.shadowRoot.querySelector('form');
        expect(postRecalcForm).not.toBeNull();
        expect(postRecalcResults).toBeNull();
    });
})
