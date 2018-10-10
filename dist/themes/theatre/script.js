/*!
betajs-media-components - v0.0.133 - 2018-10-10
Copyright (c) Ziggeo,Oliver Friedmann
Apache-2.0 Software License.
*/
(function () {

var Scoped = this.subScope();

Scoped.binding("browser", "global:BetaJS.Browser");
Scoped.binding("dynamics", "global:BetaJS.Dynamics");
Scoped.binding("module", "global:BetaJS.MediaComponents");

Scoped.extend("module:Assets.playerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/theatre-video_player_controlbar.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/video_player_playbutton.html') %>*/ });
    return {
        "theatre": {
            css: "ba-videoplayer",
            csstheme: "ba-player-theatre-theme",
            csscommon: "ba-commoncss",
            cssplayer: "ba-player",
            tmplcontrolbar: "<%= template(dirname + '/theatre-video_player_controlbar.html') %>",
            tmplplaybutton: "<%= template(parentdirname + '/_templates/video_player_playbutton.html') %>",
            cssloader: ie8 ? "ba-videoplayer" : "",
            cssmessage: "ba-videoplayer",
            cssplaybutton: ie8 ? "ba-videoplayer" : ""
        }
    };
});
Scoped.extend("module:Assets.recorderthemes", [
    "dynamics:Parser"
], function(Parser) {
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/theatre-video_recorder_controlbar.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/video_recorder_imagegallery.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/video_recorder_chooser.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/video_recorder_message.html') %>*/ });
    return {
        "theatre": {
            css: "ba-videorecorder",
            csstheme: "ba-recorder-theme-theatre",
            cssrecorder: "ba-recorder",
            cssmessage: "ba-videorecorder",
            cssloader: "ba-videorecorder",
            tmplcontrolbar: "<%= template(dirname + '/theatre-video_recorder_controlbar.html') %>",
            tmplimagegallery: "<%= template(parentdirname + '/_templates/video_recorder_imagegallery.html') %>",
            tmplchooser: "<%= template(parentdirname + '/_templates/video_recorder_chooser.html') %>",
            tmplmessage: "<%= template(parentdirname + '/_templates/video_recorder_message.html') %>"
        }
    };
});
Scoped.extend("module:Assets.imageviewerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''": function (obj) { with (obj) { return activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''; } }, "title": function (obj) { with (obj) { return title; } }, "submit()": function (obj) { with (obj) { return submit(); } }, "submittable": function (obj) { with (obj) { return submittable; } }, "string('submit-image')": function (obj) { with (obj) { return string('submit-image'); } }, "rerecord()": function (obj) { with (obj) { return rerecord(); } }, "rerecordable": function (obj) { with (obj) { return rerecordable; } }, "string('rerecord-image')": function (obj) { with (obj) { return string('rerecord-image'); } }, "csscommon": function (obj) { with (obj) { return csscommon; } }, "toggle_fullscreen()": function (obj) { with (obj) { return toggle_fullscreen(); } }, "tab_index_move(domEvent)": function (obj) { with (obj) { return tab_index_move(domEvent); } }, "fullscreen": function (obj) { with (obj) { return fullscreen; } }, "fullscreened ? string('exit-fullscreen-image') : string('fullscreen-image')": function (obj) { with (obj) { return fullscreened ? string('exit-fullscreen-image') : string('fullscreen-image'); } }, "fullscreened ? 'small' : 'full'": function (obj) { with (obj) { return fullscreened ? 'small' : 'full'; } }/**/ });
    return {
        "theatre": {
            css: "ba-imageviewer",
            csstheme: "ba-imageviewer-theatre-theme",
            tmplcontrolbar: "<div data-selector=\"image-title-block\" class=\"{{css}}-image-title-container {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\"  ba-if=\"{{title}}\">\n    <p class=\"{{css}}-image-title\">\n        {{title}}\n    </p>\n</div>\n<div class=\"{{css}}-dashboard {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\">\n\n    <div class=\"{{css}}-left-block\">\n\n        <div tabindex=\"0\" data-selector=\"submit-image-button\"\n             ba-hotkey:space^enter=\"{{submit()}}\" onmouseout=\"this.blur()\"\n             class=\"{{css}}-leftbutton-container\"\n             ba-if=\"{{submittable}}\"  ba-click=\"{{submit()}}\"\n        >\n            <div class=\"{{css}}-button-inner\">\n                {{string('submit-image')}}\n            </div>\n        </div>\n\n        <div tabindex=\"0\" data-selector=\"button-icon-ccw\"\n             ba-hotkey:space^enter=\"{{rerecord()}}\" onmouseout=\"this.blur()\"\n             class=\"{{css}}-leftbutton-container\"\n             ba-if=\"{{rerecordable}}\" ba-click=\"{{rerecord()}}\"\n             title=\"{{string('rerecord-image')}}\"\n        >\n            <div class=\"{{css}}-button-inner\">\n                <i class=\"{{csscommon}}-icon-ccw\"></i>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"{{css}}-right-block\">\n\n        <div tabindex=\"8\" data-selector=\"button-icon-resize-full\"\n             ba-hotkey:space^enter=\"{{toggle_fullscreen()}}\" onmouseout=\"this.blur()\"\n             onkeydown=\"{{tab_index_move(domEvent)}}\"\n             class=\"{{css}}-button-container {{css}}-fullscreen-icon-container\"\n             ba-if=\"{{fullscreen}}\" ba-click=\"{{toggle_fullscreen()}}\" title=\"{{ fullscreened ? string('exit-fullscreen-image') : string('fullscreen-image') }}\"\n        >\n            <div class=\"{{css}}-button-inner {{css}}-full-screen-btn-inner\">\n                <i class=\"{{csscommon}}-icon-resize-{{fullscreened ? 'small' : 'full'}}\"></i>\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n",
            cssloader: ie8 ? "ba-imageviewer" : "",
            cssmessage: "ba-imageviewer"
        }
    };
});
Scoped.extend("module:Assets.audioplayerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /**/"csstheme": function (obj) { with (obj) { return csstheme; } }, "title": function (obj) { with (obj) { return title; } }, "submit()": function (obj) { with (obj) { return submit(); } }, "submittable": function (obj) { with (obj) { return submittable; } }, "string('submit-audio')": function (obj) { with (obj) { return string('submit-audio'); } }, "rerecord()": function (obj) { with (obj) { return rerecord(); } }, "rerecordable": function (obj) { with (obj) { return rerecordable; } }, "string('rerecord-audio')": function (obj) { with (obj) { return string('rerecord-audio'); } }, "csscommon": function (obj) { with (obj) { return csscommon; } }, "play()": function (obj) { with (obj) { return play(); } }, "tab_index_move(domEvent, null, 'button-icon-pause')": function (obj) { with (obj) { return tab_index_move(domEvent, null, 'button-icon-pause'); } }, "!playing": function (obj) { with (obj) { return !playing; } }, "string('play-audio')": function (obj) { with (obj) { return string('play-audio'); } }, "pause()": function (obj) { with (obj) { return pause(); } }, "tab_index_move(domEvent, null, 'button-icon-play')": function (obj) { with (obj) { return tab_index_move(domEvent, null, 'button-icon-play'); } }, "disablepause ? cssplayer + '-disabled' : ''": function (obj) { with (obj) { return disablepause ? cssplayer + '-disabled' : ''; } }, "playing": function (obj) { with (obj) { return playing; } }, "disablepause ? string('pause-audio-disabled') : string('pause-audio')": function (obj) { with (obj) { return disablepause ? string('pause-audio-disabled') : string('pause-audio'); } }, "toggle_volume()": function (obj) { with (obj) { return toggle_volume(); } }, "string(volume > 0 ? 'volume-mute' : 'volume-unmute')": function (obj) { with (obj) { return string(volume > 0 ? 'volume-mute' : 'volume-unmute'); } }, "csscommon + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off'))": function (obj) { with (obj) { return csscommon + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')); } }, "set_volume(volume + 0.1)": function (obj) { with (obj) { return set_volume(volume + 0.1); } }, "set_volume(volume - 0.1)": function (obj) { with (obj) { return set_volume(volume - 0.1); } }, "startVerticallyUpdateVolume(domEvent)": function (obj) { with (obj) { return startVerticallyUpdateVolume(domEvent); } }, "stopVerticallyUpdateVolume(domEvent)": function (obj) { with (obj) { return stopVerticallyUpdateVolume(domEvent); } }, "progressVerticallyUpdateVolume(domEvent)": function (obj) { with (obj) { return progressVerticallyUpdateVolume(domEvent); } }, "{height: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}": function (obj) { with (obj) { return {height: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}; } }, "string('volume-button')": function (obj) { with (obj) { return string('volume-button'); } }, "string('elapsed-time')": function (obj) { with (obj) { return string('elapsed-time'); } }, "formatTime(position)": function (obj) { with (obj) { return formatTime(position); } }, "string('total-time')": function (obj) { with (obj) { return string('total-time'); } }, "formatTime(duration || position)": function (obj) { with (obj) { return formatTime(duration || position); } }, "disableseeking ? cssplayer + '-disabled' : ''": function (obj) { with (obj) { return disableseeking ? cssplayer + '-disabled' : ''; } }, "seek(position + skipseconds)": function (obj) { with (obj) { return seek(position + skipseconds); } }, "seek(position - skipseconds)": function (obj) { with (obj) { return seek(position - skipseconds); } }, "startUpdatePosition(domEvent)": function (obj) { with (obj) { return startUpdatePosition(domEvent); } }, "stopUpdatePosition(domEvent)": function (obj) { with (obj) { return stopUpdatePosition(domEvent); } }, "progressUpdatePosition(domEvent)": function (obj) { with (obj) { return progressUpdatePosition(domEvent); } }, "{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? cached / duration * 100 : 0) + '%'}; } }, "{width: Math.round(duration ? position / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? position / duration * 100 : 0) + '%'}; } }, "string('audio-progress')": function (obj) { with (obj) { return string('audio-progress'); } }/**/ });
    return {
        "theatre": {
            css: "ba-audioplayer",
            csstheme: "ba-player-theatre-theme",
            tmplcontrolbar: "<div data-selector=\"audio-title-block\" class=\"{{csstheme}}-title-container \"  ba-if=\"{{title}}\">\n    <p class=\"{{csstheme}}-title\">\n        {{title}}\n    </p>\n</div>\n<div class=\"{{csstheme}}-dashboard \">\n\n    <div class=\"{{csstheme}}-left-block\">\n\n        <div tabindex=\"0\" data-selector=\"submit-audio-button\"\n             ba-hotkey:space^enter=\"{{submit()}}\" onmouseout=\"this.blur()\"\n             class=\"{{csstheme}}-leftbutton-container\"\n             ba-if=\"{{submittable}}\"  ba-click=\"{{submit()}}\"\n        >\n            <div class=\"{{csstheme}}-button-inner\">\n                {{string('submit-audio')}}\n            </div>\n        </div>\n\n        <div tabindex=\"0\" data-selector=\"button-icon-ccw\"\n             ba-hotkey:space^enter=\"{{rerecord()}}\" onmouseout=\"this.blur()\"\n             class=\"{{csstheme}}-leftbutton-container\"\n             ba-if=\"{{rerecordable}}\" ba-click=\"{{rerecord()}}\"\n             title=\"{{string('rerecord-audio')}}\"\n        >\n            <div class=\"{{csstheme}}-button-inner\">\n                <i class=\"{{csscommon}}-icon-ccw\"></i>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" data-selector=\"button-icon-play\"\n             ba-hotkey:space^enter=\"{{play()}}\" onmouseout=\"this.blur()\"\n             onkeydown=\"{{tab_index_move(domEvent, null, 'button-icon-pause')}}\"\n             class=\"{{csstheme}}-button-container\"\n             ba-if=\"{{!playing}}\" ba-click=\"{{play()}}\" title=\"{{string('play-audio')}}\"\n        >\n            <div class=\"{{csstheme}}-button-inner\">\n                <i class=\"{{csscommon}}-icon-play\"></i>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" data-selector=\"button-icon-pause\"\n             ba-hotkey:space^enter=\"{{pause()}}\" onmouseout=\"this.blur()\"\n             onkeydown=\"{{tab_index_move(domEvent, null, 'button-icon-play')}}\"\n             class=\"{{csstheme}}-button-container {{disablepause ? cssplayer + '-disabled' : ''}}\"\n             ba-if=\"{{playing}}\" ba-click=\"{{pause()}}\" title=\"{{disablepause ? string('pause-audio-disabled') : string('pause-audio')}}\"\n        >\n            <div class=\"{{csstheme}}-button-inner\">\n                <i class=\"{{csscommon}}-icon-pause\"></i>\n            </div>\n        </div>\n\n        <div class=\"{{csstheme}}-volume-icon-container\">\n\n            <div tabindex=\"2\" data-selector=\"button-icon-volume\"\n                 ba-hotkey:space^enter=\"{{toggle_volume()}}\" onmouseout=\"this.blur()\"\n                 class=\"{{csstheme}}-button-container\"\n                 ba-click=\"{{toggle_volume()}}\" title=\"{{string(volume > 0 ? 'volume-mute' : 'volume-unmute')}}\"\n            >\n                <div class=\"{{csstheme}}-button-inner\">\n                    <i class=\"{{csscommon + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')) }}\"></i>\n                </div>\n            </div>\n\n            <div class=\"{{csstheme}}-volumebar\">\n                <div tabindex=\"-1\" data-selector=\"button-volume-bar\"\n                     ba-hotkey:up=\"{{set_volume(volume + 0.1)}}\"\n                     ba-hotkey:down=\"{{set_volume(volume - 0.1)}}\"\n                     onmouseout=\"this.blur()\"\n                     class=\"{{csstheme}}-volumebar-inner\"\n                     onmousedown=\"{{startVerticallyUpdateVolume(domEvent)}}\"\n                     onmouseup=\"{{stopVerticallyUpdateVolume(domEvent)}}\"\n                     onmouseleave=\"{{stopVerticallyUpdateVolume(domEvent)}}\"\n                     onmousemove=\"{{progressVerticallyUpdateVolume(domEvent)}}\"\n                >\n                    <div class=\"{{csstheme}}-volumebar-position\" ba-styles=\"{{{height: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}}}\" title=\"{{string('volume-button')}}\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"{{csstheme}}-time-container\">\n            <div class=\"{{csstheme}}-time-value\" title=\"{{string('elapsed-time')}}\">{{formatTime(position)}}</div>\n        </div>\n    </div>\n\n    <div class=\"{{csstheme}}-right-block\">\n\n        <div class=\"{{csstheme}}-time-container {{csstheme}}-right-time-container\">\n            <div class=\"{{csstheme}}-time-value\" title=\"{{string('total-time')}}\">{{formatTime(duration || position)}}</div>\n        </div>\n\n    </div>\n\n    <div class=\"{{csstheme}}-progressbar {{disableseeking ? cssplayer + '-disabled' : ''}}\">\n        <div tabindex=\"4\" data-selector=\"progress-bar-inner\"\n             ba-hotkey:right=\"{{seek(position + skipseconds)}}\"\n             ba-hotkey:left=\"{{seek(position - skipseconds)}}\"\n             onmouseout=\"this.blur()\"\n             class=\"{{csstheme}}-progressbar-inner\"\n             onmousedown=\"{{startUpdatePosition(domEvent)}}\"\n             onmouseup=\"{{stopUpdatePosition(domEvent)}}\"\n             onmouseleave=\"{{stopUpdatePosition(domEvent)}}\"\n             onmousemove=\"{{progressUpdatePosition(domEvent)}}\"\n        >\n\n            <div class=\"{{csstheme}}-progressbar-cache\" ba-styles=\"{{{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}}}\"></div>\n            <div class=\"{{csstheme}}-progressbar-position\" ba-styles=\"{{{width: Math.round(duration ? position / duration * 100 : 0) + '%'}}}\" title=\"{{string('audio-progress')}}\">\n                <div class=\"{{csstheme}}-progressbar-button\"></div>\n            </div>\n        </div>\n    </div>\n\n</div>\n",
            cssloader: ie8 ? "ba-audioplayer" : "",
            cssmessage: "ba-audioplayer",
            cssplaybutton: ie8 ? "ba-audioplayer" : ""
        }
    };
});
Scoped.extend("module:Assets.audiorecorderthemes", [
    "dynamics:Parser"
], function(Parser) {
    Parser.registerFunctions({ /*<%= template_function_cache(dirname + '/theatre-audio_recorder_controlbar.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/audio_recorder_chooser.html') %>*/ });
    Parser.registerFunctions({ /*<%= template_function_cache(parentdirname + '/_templates/audio_recorder_message.html') %>*/ });
    return {
        "theatre": {
            css: "ba-audiorecorder",
            csstheme: "ba-audiorecorder-theme-theatre",
            cssrecorder: "ba-recorder",
            cssmessage: "ba-audiorecorder",
            cssloader: "ba-audiorecorder",
            tmplcontrolbar: "<%= template(dirname + '/theatre-audio_recorder_controlbar.html') %>",
            tmplchooser: "<%= template(parentdirname + '/_templates/audio_recorder_chooser.html') %>",
            tmplmessage: "<%= template(parentdirname + '/_templates/audio_recorder_message.html') %>"
        }
    };
});
}).call(Scoped);