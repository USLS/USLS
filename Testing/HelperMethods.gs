//JSHint verified 4/3/2017 sondermanjj

/**
* @desc - Wraps the testSorting function in message that can be used.
* @author - hendersonam
*/
function runHelperMethodTests() {

  var messages = [];
  
  messages[0] = "CorrectSortingTest: " + testSorting();
  
  Logger.log(messages[0]);

  return messages;
  
}

function testSaveButton() {
  Logger.log("button pressed");
}

/**
  * @desc - Test to make sure the sorting works
  * @author - hendersonam
  */
function testSorting() {

  return allTests(function(t) {
        
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Testing Sheet");
    sortSheetBy(sheet, ["First Name"]);
    var values = sheet.getDataRange().getValues();
    
    var listOfColumns = getListOfColumns(values);
    var firstNameColumn = getColumnIndex(listOfColumns, "First Name");
    
    
    for( var i = 2; i < values.length; i++) {
    
      if ( values[i][firstNameColumn] >= values[i-1][firstNameColumn] ) {
      t.errorSpot("Sorted properly", true);
      } else {
      
      t.errorSpot("Index " + i + " not sorted properly!", false);
      
      }
    }
    
  });
}

