import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';


export default class GetAccountsOnClick extends LightningElement {

    @track accountsdata;
    
handleOnClick()
{
        getAccounts().then(accounts=>
            {
                this.accountsdata=accounts;

            }).catch(error=>{

            });

}


}