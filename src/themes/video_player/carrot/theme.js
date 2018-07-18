Scoped.extend("module:Assets.playerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/carrot-video_player_controlbar.html') %>*/ });
    return {
        "carrot": {
            css: "ba-videoplayer-carrot-theme",
            csstheme: "ba-videoplayer-carrot-theme",
            tmplcontrolbar: "<%= template(dirname + '/carrot-video_player_controlbar.html') %>",
            cssloader: ie8 ? "ba-videoplayer" : "",
            cssmessage: "ba-videoplayer",
            cssplaybutton: ie8 ? "ba-videoplayer" : ""
        }
    };
});