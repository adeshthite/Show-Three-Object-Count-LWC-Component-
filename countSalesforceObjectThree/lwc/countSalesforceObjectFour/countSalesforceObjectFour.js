import { LightningElement ,wire} from 'lwc';
import accountCount from '@salesforce/apex/CountForeObjectSalesforce.accountCount';
import opportunityCount from '@salesforce/apex/CountForeObjectSalesforce.opportunityCount';
import contactCount from '@salesforce/apex/CountForeObjectSalesforce.contactCount';
export default class CountSalesforceObjectFour extends LightningElement {

    @wire (accountCount) accCount;
    @wire (opportunityCount) oppCount;
    @wire (contactCount) conCount;
}