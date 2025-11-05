const HOSTs= [
    "ubg77.gitlab.io",
    "ubg76.gitlab.io",
    "ubg66.gitlab.io",
    "ubgw.gitlab.io",
    "class6x.gitlab.io",
    "ubg6969.gitlab.io",
    "cmug.gitlab.io",
    "ubg67.gitlab.io",
    "ubg911.gitlab.io",
    "unblockedgamess3.gitlab.io",
    "sportsgames.gitlab.io",
    "dressupgames.gitlab.io",
];
let FETCHs= [];
const CLONER_URL= "https://gamecloner.wp235.workers.dev/";
const HOST= (self.location.href.split("://")?.[1]?? "").split("/")[0];
const GROUP= (self.location.href.split("?")?.[1]?? "").split("/")?.[1]?? "";
const GAME= (self.location.href.split("?")?.[1]?? "").split("/")?.[2]?? "";
const GAME_SLUG= GAME.split("=")[0];
const GAME_PATH= `${self.location.href.split("?")[0].split("&")[0].split("/cloner-sw-v")[0]}/`;


self.addEventListener("install", (event) => {
//   console.log(`clonerSW Installed HOST--${HOST}-- GROUP--${GROUP}-- GAME--${GAME}-- GAME_SLUG--${GAME_SLUG}-- GAME_PATH--${GAME_PATH}--`);
  self.skipWaiting();
});


self.addEventListener("activate", (event) => {
//   console.log(`clonerSW Activated HOST--${HOST}-- GROUP--${GROUP}-- GAME--${GAME}-- GAME_SLUG--${GAME_SLUG}-- GAME_PATH--${GAME_PATH}--`);
  event.waitUntil(self.clients.claim());
});


self.addEventListener("fetch", (event) => {
    const url= event.request.url;

    if (!url.startsWith(GAME_PATH)) {
        console.log("clonerSW CORS", url);
        const REPLACEs= {
            //Poki
            "https://a.poki-cdn.com/prebid/": "./patch/poki/prebid.js",
            "https://geo.poki.io/": "./patch/poki/geo.json",
            "https://img.poki.com/": "./patch/ubg235/logo_512.png",
            "https://devs-api.poki.com/": "./patch/poki/+",
            "https://api.poki.com/": "./patch/poki/+",
            "https://game-cdn.poki.com/": "./patch/poki/+",
            "https://a.poki.com/": "./patch/poki/+",
            "https://a.poki-cdn.com/": "./patch/poki/+",

            // Famobi
            "https://pro.ip-api.com/json/": "./patch/famobi/pro-ip-api.json",
            "https://play.famobi.com/": "./patch/famobi/+",
            "https://games.cdn.famobi.com/": "./patch/famobi/+",
            "https://tools.famobi.com/": "./patch/famobi/+",

            // FreezeNova
            "https://unblocked-games.s3.amazonaws.com/": "./patch/freezenova/+",

            // CoolMathGames
            "https://www.coolmathgames.com/": "./patch/coolmathgames/+",

            // CrazyGames
            "https://sdk.crazygames.com/": "./patch/crazygames/+",

            // GameDistribution
            "https://html5.api.gamedistribution.com/": "./patch/gamedistribution/+",

            // GameMonetize
            "https://api.gamemonetize.com/": "./patch/gamemonetize/+",

            // YGGGames
            "https://h5gamessdk.yyggames.com/": "./patch/yyggames/+",

            // PlayTouch
            "https://games.playtouch.net/": "./patch/playtouch/+",

            // Kiz10
            "https://cdn.kiz10.com/": "./patch/kiz10/+",

            // itch.io
            "https://static.itch.io/": "./patch/itch/+",

            "https://scripts.gd.sbs.softgames.de/sdk/": "./patch/softgames/+",

            // CDN
            "https://cdn.fbrq.io/": "./patch/fbrq/+",
            "https://cdn.jsdelivr.net/": "./patch/jsdelivr/+",

            // Google
            "https://securepubads.g.doubleclick.net/": "./patch/google/+",
            "https://imasdk.googleapis.com/": "./patch/google/+",
            "https://www.googletagmanager.com/": "./patch/google/+",
            "https://pagead2.googlesyndication.com/": "./patch/google/pagead.js",
            "https://script.google.com/": "./patch/google/+",

            // Cloudflare
            "https://ajax.cloudflare.com/": "./patch/cloudflare/+",
            "https://static.cloudflareinsights.com/": "./patch/cloudflare/+",

            // Unity
            "https://config.uca.cloud.unity3d.com": "./patch/unity/config.json",
            "https://remote-config-prd.uca.cloud.unity3d.com/": "./patch/unity/config.json",
            "http://api.brainsoftware.org/": "./patch/unity/+",
            "https://api.brainsoftware.org/": "./patch/unity/+",
            "https://cdp.cloud.unity3d.com/": "./patch/unity/+",
            "https://cdp1cloud.unity3d.com/": "./patch/unity/+",
            "https://api.uca.cloud.unity3d.com/": "./patch/unity/+",
            "https://collect.analytics.unity3d.com/": "./patch/unity/+",

            // Other
            "https://accessanywheremahdi.herokuapp.com/": "./patch/herokuapp/null.json",
            "https://lightstudiotech.com/games/": "./patch/lightstudiotech/leaderboard.json",
            "https://rubick.gameanalytics.com/": "./patch/gameanalytics/+",
            "https://api.gameanalytics.com/": "./patch/gameanalytics/+",
            "https://lablockedgames.com/": "./patch/lablockedgames/+",
            "https://api.adinplay.com/": "./patch/adinplay/+",
            "https://c.amazon-adsystem.com/": "./patch/adsystem/+",
            "http://localhost:8080/": "./",
        };

        for (const [matchUrl, replaceUrl] of Object.entries(REPLACEs)) {
            if (url.startsWith(matchUrl)) {
                let replace_url= `${replaceUrl}?${matchUrl}`;
                if (replaceUrl.endsWith("+")) {
                    replace_url= `${replaceUrl.replace("+", "")}${url.replace(matchUrl, "")}`;
                }
                console.log("clonerSW REPLACE", url, "→", replace_url);
                event.respondWith(
                    fetch(replace_url)
                    .then((response)=> {
                        if (response.status=== 404) {
                            if (HOSTs.includes(HOST)) {
                                const FULL_ASSET_URL= `${CLONER_URL}${GROUP}/${GAME}/${replace_url}`.replace("/./", "/");
                                return fetch(FULL_ASSET_URL, {
                                    method: "GET",
                                    headers: {
                                        "Client": "Cloner Assets"
                                    },
                                });
                            }
                        }
                        return response;
                    })
                );
                return;
            }
        }

        if ([
            "https://gamecloner.wp235.workers.dev/",
            "https://ubg235.pages.dev/",
            "https://www.ubg235.com/",
            "https://ubg235.com/",
            "https://fonts.googleapis.com/",
            "https://ipwho.is/"
        ].some(prefix => url.startsWith(prefix))) {
            console.log("clonerSW ALLOWED", url);
            event.respondWith(fetch(event.request));
            return;
        }

        console.log("clonerSW BLOCKED", url);
        event.respondWith(fetch("./patch/blocked.xhtml"));
        return;
    }

    event.respondWith(
        fetch(event.request)
        .then((response) => {
            if (response.status === 404) {
                console.warn("clonerSW 404", url);
                const SCREENSHOTs= Array.from({ length: 9 }, (_, i) => [
                    `/screenshots/${i+1}-small.jpg`,
                    `/screenshots/${i+1}.jpg`,
                    `/screenshots/${i+1}.png`])
                    .flat();
                if (SCREENSHOTs.some(s => url.endsWith(s))) {
                    console.warn("clonerSW 404 Error", url);
                    return response;
                }
                // Change URL
                const ASSET_URL= url.replace(GAME_PATH, "");
                if (HOSTs.includes(HOST)) {
                    const FULL_ASSET_URL= `${CLONER_URL}${GROUP}/${GAME}/${ASSET_URL}`;
                    if (url!= FULL_ASSET_URL && !FETCHs.includes(FULL_ASSET_URL)) {
                        FETCHs.push(FULL_ASSET_URL);
                        console.log("clonerSW Retry", FULL_ASSET_URL);
                        return fetch(FULL_ASSET_URL, {
                            method: "GET",
                            headers: {
                                "Client": "Cloner Assets"
                            },
                        }).catch((err) => {
                            console.error("clonerSW Failed", err);
                            return response;
                        });
                    }
                }
            }
            return response;
        })
        .catch((error) => {
            console.error("clonerSW Error", url, error);
            throw error;
        })
    );
});
