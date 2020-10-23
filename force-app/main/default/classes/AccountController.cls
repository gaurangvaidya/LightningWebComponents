public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){

        return [
            SELECT Name,AccountNumber,Industry FROM Account
        ];
        
    }
}
