const { dom } = require('../util');

const rootSelector = 'body';
const topbarTpl =
    `<div id="topbar">
            <div id="toolbar"></div>
            <div id="flowbar"></div>
            <div id="logo" style="padding-top: 16px; order: 3; padding-right: 33px;">
            <img src="/_h5ai/public/images/ui/guavus_logo.svg" alt=">" style=""></div>
        </div>`;
const mainrowTpl =
    `<div id="mainrow">
            <div id="content"></div>
        </div>`;

const init = () => {
    const $root = dom(rootSelector)
        .attr('id', 'root')
        .clr()
        .app(topbarTpl)
        .app(mainrowTpl);

    return {
        $root,
        $topbar: $root.find('#topbar'),
        $toolbar: $root.find('#toolbar'),
        $flowbar: $root.find('#flowbar'),
        $mainrow: $root.find('#mainrow'),
        $content: $root.find('#content')
    };
};

module.exports = init();
