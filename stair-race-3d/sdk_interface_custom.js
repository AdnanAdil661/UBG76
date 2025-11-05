// GAME-SPECIFIC SETTINGS / OVERRIDES

SDK_INTERFACE_SETTINGS.isProd = true;

SDK_INTERFACE_SETTINGS.GD_ID = "2b1d4c648be84b0dbae454899db706da";

SDK_INTERFACE_SETTINGS.GA_GAME_ID = "d0b98dbe9a58ff45e62015a96b5d1ce0";
SDK_INTERFACE_SETTINGS.GA_SECRET_ID = "700880f912b8aae7ab7526be25072927ca83ce3a";
SDK_INTERFACE_SETTINGS.interstitial.enabled = true;
SDK_INTERFACE_SETTINGS.rewarded.enabled = true;

if(SDK_INTERFACE_SETTINGS.isProd) {
	// PRODUCTION
	SDK_INTERFACE_SETTINGS.debugLevel = 0;
	SDK_INTERFACE_SETTINGS.forceMockObject = false;
} else {
	// TESTING
	SDK_INTERFACE_SETTINGS.debugLevel = 1;
	SDK_INTERFACE_SETTINGS.forceMockObject = true;
}

// overrides
SDK_INTERFACE_OVERRIDES.famobi_analytics.trackEvent = (event, params) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(event, params);
		
		switch(event) {
			case "EVENT_LEVELFAIL":


				window.famobi_analytics.trackEvent("EVENT_CUSTOM", {
					eventName: "ga:progression",
					progressionStatus: "Fail",
					progression01: params.levelName,
					progression02: params.reason
				});


				if(params.reason !== "quit") {
					return window.famobi.showAd(function() {
						resolve();
					});
				}
				break;
			case "EVENT_LEVELRESTART":


				window.famobi_analytics.trackEvent("EVENT_CUSTOM", {
					eventName: "ga:progression",
					progressionStatus: "Start",
					progression01: params.levelName
				});

				
				return window.famobi.showAd(function() {
					resolve(event, params);
				});
				break;
			case "EVENT_LEVELSTART":


				window.famobi_analytics.trackEvent("EVENT_CUSTOM", {
					eventName: "ga:progression",
					progressionStatus: "Start",
					progression01: params.levelName
				});


				return window.famobi.showAd(function() {
					resolve(event, params);
				});
				break;
			case "EVENT_LEVELSUCCESS":


				window.famobi_analytics.trackEvent("EVENT_CUSTOM", {
					eventName: "ga:progression",
					progressionStatus: "Complete",
					progression01: params.levelName
				});


				break;
			case "EVENT_LEVELSCORE":
				break;
			case "EVENT_LIVESCORE":
				break;
			case "EVENT_TOTALSCORE":
				break;
			case "EVENT_VOLUMECHANGE":
				break;
			case "EVENT_CUSTOM":
				if(params.eventName?.toLowerCase().startsWith("ga:") && gameanalytics !== "undefined") {

					switch(params.eventName?.toLowerCase().split(":")[1]) {

						case "business":
							gameanalytics.GameAnalytics?.addBusinessEvent(params?.cartType, params?.itemType, params?.itemId, params?.amount, params?.currency);
							break;

						case "resource":
							gameanalytics.GameAnalytics?.addResourceEvent(params?.flowType, params?.itemType, params?.itemId, params?.amount, params?.resourceCurrency);
							break;

						case "progression":
							gameanalytics.GameAnalytics?.addProgressionEvent(params?.progressionStatus, params?.progression01, params?.progression02, params?.progression03, params?.value);
							break;

						case "error":
							gameanalytics.GameAnalytics?.addErrorEvent(params?.severity, params?.message);
							break;

						case "design":
							gameanalytics.GameAnalytics?.addDesignEvent(params?.eventId, params?.value);
							break;

						case "ads":
							break;

						case "impression":
							break;

						default:
							SDK_INTERFACE_SETTINGS.debugLevel && console.log("unknown GA event type");
					}
					return;
				}
				break;
			case "EVENT_TUTORIALCOMPLETED":
				break;
			case "EVENT_TUTORIALSKIPPED":
				break;
			case "EVENT_PAUSE":
				break;
			case "EVENT_RESUME":
				break;
			default:
				// do nothing
		};

		return resolve(event, params);
	});
};

SDK_INTERFACE_OVERRIDES.famobi_analytics.trackScreen = (screen, pageTitle) => {

	return new Promise(function(resolve, reject) {

		SDK_INTERFACE.getDebugLevel() && console.log(screen, pageTitle);

		switch(screen) {
			case "SCREEN_HOME":
				// ...
				break;
			default:
				// ...
		}

		return resolve(screen, pageTitle);
	});
};