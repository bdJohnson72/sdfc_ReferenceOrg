// wireGetRatingPicklist.js
import { LightningElement, wire } from "lwc";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import RATING_FIELD from "@salesforce/schema/Account.Rating";

export default class WireGetRatingPicklist extends LightningElement {
    accountRecordTypeId;
    ratings;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    results({ error, data }) {
        if (data) {
            this.accountRecordTypeId = data.defaultRecordTypeId;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accountRecordTypeId = undefined;
        }
    }

    @wire(getPicklistValues, { recordTypeId: "$accountRecordTypeId", fieldApiName: RATING_FIELD })
    picklistResults({ error, data }) {
        if (data) {
            console.dir(`picklist looks like  ${JSON.stringify(data)}`)
            console.dir(data)
            console.table(data)
            this.ratings = data.values;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.ratings = undefined;
        }
    }
}