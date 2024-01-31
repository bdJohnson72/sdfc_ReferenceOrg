/**
 * Created by bjohnson on 1/28/24.
 */

import {LightningElement, wire} from 'lwc';
import {gql, graphql } from "lightning/uiGraphQLApi";

const COLS = [
    {label: 'Name', fieldName: 'name'},
    {label: 'Phone', fieldName: 'phone', type: 'phone'},
    {label: 'Email', fieldName: 'email', type: 'email'}
]
export default class DataTableGraphQl extends LightningElement {
   columns = COLS;
   data = [];

   @wire(graphql, {

       query: gql `
       query getContacts {
       uiapi {
       query {
           Contact(
               first: 5
           ){
               edges {
                   node {
                       Id
                       Name {value}
                       Phone {value}
                       Email {value}
                   }
               }
           }
       }
       }
       }
       `
   })
   graphql;

    get contacts(){
        console.log(this.graphql.data.uiapi.query.Contact.edges);
       return this.graphql.data?.uiapi.query.Contact.edges.map((edge) => ({
           Id: edge.node.Id,
           Name: edge.node.Name.value,
           Phone: edge.node.Phone.value,
           Email: edge.node.Email.value
       }))
   }

}