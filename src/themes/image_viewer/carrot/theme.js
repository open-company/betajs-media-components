Scoped.extend("module:Assets.imageviewerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/carrot-image_viewer_controlbar.html') %>*/ });
    return {
        "carrot": {
            css: "ba-imageviewer-carrot-theme",
            csstheme: "ba-imageviewer-carrot-theme",
            tmplcontrolbar: "<%= template(dirname + '/carrot-image_viewer_controlbar.html') %>",
            cssloader: ie8 ? "ba-imageviewer" : "",
            cssmessage: "ba-imageviewer"
        }
    };
});