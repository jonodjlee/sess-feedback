function renderfooter() {
    var a = (new Date().getFullYear());
    var template = document.getElementById('copyright').innerHTML;
    var rendered = Mustache.render(template, {
        copyright: ('© ' + a + ' SESS. All rights reserved.')
    });
    document.getElementById('copyright').innerHTML = rendered;
}
