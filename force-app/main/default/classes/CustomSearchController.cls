public class CustomSearchController {
    //Created by Barathan : B1 comment
    @AuraEnabled
    public static List<String> searchForIds(String searchText) {
    	List<List<SObject>> results = [FIND :searchText IN ALL FIELDS  RETURNING Account(Id), Contact(Id), Lead(Id)];
    	List<String> ids = new List<String>();
    	for (List<SObject> sobjs : results) {
      		for (SObject sobj : sobjs) {
        		ids.add(sobj.Id);
      		}
    	}
    	return ids;
	}
}
	//Commit message for B2
/* *public class CustomSearchController {
    @AuraEnabled
    public static List<String> searchForIds(String searchText) {
      return new List<String>{searchText};
    }
}*/