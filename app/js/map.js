(function ($win, AMap) {
    const MP = {};

    MP.initMapView = (api = 'https://webapi.amap.com', version = '2.0', key = 'f243424af1a4edf813d200d262052839') => {
        const url = `${api}/maps?v=${version}&key=${key}`;
        const SC = document.createElement('script');
        SC.setAttribute('src', url);
        SC.setAttribute('id', 'map');
        document.head.appendChild(SC);
    }

    MP.createMap = (el = 'container', opt = { zoom: 11 }) => {
        let map = new AMap.Map(el, opt);
        console.log(map);
    }

    MP.currentLocation = () => {
        return new Promise((resolve, reject) => {
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch();
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        return resolve(result);
                    } else {
                        return reject(null, false);
                    }
                })
            })
        })
    };

    $win.MP = MP;
}(window, AMap))