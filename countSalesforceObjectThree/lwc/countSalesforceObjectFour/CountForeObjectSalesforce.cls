public class CountForeObjectSalesforce {

    @AuraEnabled(cacheable=true)
    public static Integer accountCount(){
        return [select count()from Account];
    }


    @AuraEnabled(cacheable=true)
    public static Integer opportunityCount(){
        return [select count() from Opportunity];
    }

    @AuraEnabled(cacheable=true)
    public static Integer contactCount(){
        return [select count() from Contact];
    } 

}