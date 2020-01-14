var serverURL= "http://restclass.azurewebsites.net/API/";


function saveItem(){
    //get the values
    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var delivery = $("#txtDeliveryDays").val();

    //read the values from the rest of the input fields

    console.log(code);
    console.log(description);
    console.log(price);
    console.log(image);
    console.log(category);
    console.log(stock);
    console.log(deliveryDays);


    //create an object
    //how to create obj using obj constructor
    // send the object to the server
    
    $.ajax({
      
    });    

}

//AJAX - Async Javascript And XML communication PS - JSON is now XML
//pay for the order
function testAjax(){
    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        success: function (res){
            console.log("Payment finished");
            console.log("Server says", res);

            console.log("Done thank you for the payment");
        },

        error: function (err){
            console.log("Payment error");
            console.log("Error occured",err);

            console.log("Done thank you for the payment");
        }
        
    });
    //never run the code here until the success and error  have completed
    //console.log("Done thank you for the payment");
    //console.log("NOT FINISHED YET");
}


function init(){
    console.log("This is the Admin Page!!");

    //used to retrieve the initial data
    //hook events
    $("#btnSave").click(saveItem);
}

window.onload = init;






