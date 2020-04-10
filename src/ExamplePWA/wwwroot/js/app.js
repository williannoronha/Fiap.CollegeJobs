var blogService = require('./blogService.js');
var serviceWorker = require('./swRegister.js');


//window events
let defferedPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    defferedPrompt = e;
    //atualizar a tela para notificar o usuario
    // que ele pode adicionar à tela de home
    $('#install-container').show();
});

window.addEventListener('appinstalled', (evt) => {
    console.log('app foi adicionada na home screen! Yuhuu!');
});

if ('BackgroundFetchManager' in self) {
    console.log('this browser supports Background Fetch!');
}

window.pageEvents = {
    loadBlogPost: function (link) {
        blogService.loadBlogPost(link);
    },
    loadMoreBlogPosts: function () {
        blogService.loadMoreBlogPosts();
    },    
    tryAddHomeScreen: function () {
        defferedPrompt.prompt();
        defferedPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome == 'accepted') {
                console.log('Usuário aceitou o A2HS prompt');
                $('#install-container').hide();
            }
            defferedPrompt = null;
        });
    },
    setBackgroundFetch: function (link) {
        navigator.serviceWorker.ready.then(async (swReg) => {
            const bgFetch = await swReg.backgroundFetch.fetch(link,
                ['/Home/Post/?link=' + link], {
                title: link,
                icons: [{
                    sizes: '192x192',
                    src: 'images/icons/icon-192x192.png',
                    type: 'image/png',
                }],
                downloadTotal: 15000,
            });

            bgFetch.addEventListener('progress', () => {
                if (!bgFetch.downloadTotal) return;

                const percent = Math.round(bgFetch.downloaded / bgFetch.downloadTotal * 100);
                console.log('Download progress: ' + percent + '%');
                console.log('Download status: ' + bgFetch.result);

                $('.download-start').hide();
                $('#status-download').show();
                $('#status-download > .progress > .progress-bar').css('width', percent + '%');

                if (bgFetch.result === 'success') {

                    $('#status-download > .text-success').show();
                }
            });
        });
    },
    requestPushPermission: function () {
        serviceWorker.requestPushPermission();
    },
    loadOnlyPost: function () {
        var title = document.getElementById('postSearch').value;
        blogService.loadOnlyPost(title);
    },
    mySearch: function () {
        var input, filter, cardCollumns, card, cartao, txtValue;
        input = document.getElementById('postSearch');
        filter = input.value.toUpperCase();
        cardCollumns = document.getElementById('blog-list');
        card = document.getElementsByClassName('card');

        for (i = 0; i < card.length; i++) {
            cartao = card.item(i).firstElementChild.firstElementChild.innerText;
            txtValue = cartao;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card.item(i).style.display = "";
            } else {
                card.item(i).style.display = "none";
            }
        }  
    },
    gyroscopeStart: function () {
        if ('LinearAccelerationSensor' in window && 'Gyroscope' in window) {

            let gyroscope = new Gyroscope();
            gyroscope.addEventListener('reading', e => rotationHandler({
                alpha: gyroscope.x,
                beta: gyroscope.y,
                gamma: gyroscope.z
            }));
            gyroscope.start();
        }
    },
    getGeolocation: function () {
        if ("geolocation" in navigator) {
            // check if geolocation is supported/enabled on current browser
            navigator.geolocation.getCurrentPosition(
                function success(position) {
                    // for when getting location is a success
                    console.log('latitude ' + position.coords.latitude +
                        ' longitude ' + position.coords.longitude);

                    getAddress(position.coords.latitude, position.coords.longitude);
                },
                function error(error_message) {
                    // for when getting location results in an error
                    console.log('An error has occured while retrieving location ' + error_message);
                    ipLookUp();
                });
        } else {
            // geolocation is not supported
            // get your location some other way
            console.log('geolocation is not enabled on this browser');
            ipLookUp();
        }
    }
};

function rotationHandler(rotation) {
    var info, xyz = "[X, Y, Z]";
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var alpha; var beta; var gamma;
    if (rotation.alpha && rotation.beta && rotation.gamma) {
        alpha = rotation.alpha.toFixed(2) * 100;
        beta = rotation.beta.toFixed(2) * 100;
        gamma = rotation.gamma.toFixed(2) * 100;
    }

    info = xyz.replace("X", alpha);
    info = info.replace("Y", beta);
    info = info.replace("Z", gamma);
    $('#rotation-info').html(info);

    ctx.fillStyle = 'green';
    ctx.fillRect(100, 100, alpha, 10);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(120, 120, beta, 10);

    ctx.fillStyle = 'blue';
    ctx.fillRect(140, 140, gamma, 10);

    var interval = setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 50000);
}

function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                console.log('User\'s Location Data is ', response);
                console.log('User\'s Country', response.country);
            },

            function fail(data, status) {
                console.log('Request failed.  Returned status of',
                    status);
            }
        );
}

function getAddress(latitude, longitude) {
    var GOOGLE_MAP_KEY = 'AIzaSyDkokSgwFgLELGKOW5xxDVNhYNBCzJSo_c';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
        + latitude + ',' + longitude + '&key=' + GOOGLE_MAP_KEY;

    console.log("url:" + url);

    $.ajax(url)
        .then(
            function success(response) {

                if (response === undefined || response.results === undefined) return;

                var dataFromCity = response.results.find(obj => { return obj.types.includes('street_address'); });
                document.getElementById("address-real").innerHTML = dataFromCity.formatted_address;                
                $('#address-button').hide();
                //$('#address-found-input').show();

                console.log('User\'s Address Data is ' + response);
            },
            function fail(status) {
                console.log('Request failed.  Returned status of' + status);
            }
        )
}

blogService.loadLatestBlogPosts();
