var body = document.body;
var overlayTest1 = document.getElementById('section-test1');
var overlayTest2 = document.getElementById('section-test2');
var overlayTest3 = document.getElementById('section-test3');
var overlayBtts = document.querySelectorAll('span[class$="overlay"]');

[].forEach.call(overlayBtts, function (btt) {
    btt.addEventListener('click', function () {
        var overlay;
        var overlayOpen = this.className === 'open-overlay';
        switch (btt.id) {
            case 'button-test1':
            case 'button-test2':
            case 'btn-close-section-test1':            
                {
                    overlay = overlayTest1;
                    break;
                }
            case 'button-test3':
            case 'btn-close-section-test3':
                {
                    overlay = overlayTest3;
                    break;
                }
        }        
        overlay.setAttribute('aria-hidden', !overlayOpen);
        body.classList.toggle('noscroll', overlayOpen);
    }, false);
});