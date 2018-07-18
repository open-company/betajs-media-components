Scoped.extend("module:Assets.audioplayerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/carrot-audio_player_controlbar.html') %>*/ });
    return {
        "carrot": {
            css: "ba-audioplayer-carrot-theme",
            csstheme: "ba-audioplayer-carrot-theme",
            tmplcontrolbar: "<%= template(dirname + '/carrot-audio_player_controlbar.html') %>",
            cssloader: ie8 ? "ba-audioplayer" : "",
            cssmessage: "ba-audioplayer",
            cssplaybutton: ie8 ? "ba-audioplayer" : ""
        }
    };
});