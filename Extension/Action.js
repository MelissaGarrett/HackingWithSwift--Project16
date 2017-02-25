var Action = function() {};

Action.prototype = {
run: function(parameters) {
    parameters.completionFunction({"URL": document.URL, "title": document.title});
},
    
finalize: function(parameters) {
    var customJavaScript = parameters["customJavaScript"];
    eval(customJavaScript); // execute the JS code user entered on UI's Text View
}
    
};

var ExtensionPreprocessingJS = new Action
