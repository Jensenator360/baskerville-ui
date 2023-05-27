Hooks.on('init', () => {

	game.settings.register('baskerville-ui', 'disableStyles', {
		name: game.i18n.localize('UI.SETTINGS.DISABLE_STYLES'),
		hint: game.i18n.localize('UI.SETTINGS.DISABLE_STYLES_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

	game.settings.register("baskerville-ui", "theme", {
		name: game.i18n.localize('UI.SETTINGS.THEME'),
		hint: game.i18n.localize('UI.SETTINGS.THEME_HINT'),
		scope: "client",
		config: true,
		type: String,
		choices: {
			"b": "Dark Mode",
			"w": "Light Mode",
		},
		default: "b",
		onChange: value => {
			location.reload();
		}
	});

	if ((!game.settings.get('baskerville-ui', 'disableStyles')) && (game.settings.get('baskerville-ui', 'theme') == "b")) {
		fantasyUIAddMainCss("b");
	} else if ((!game.settings.get('baskerville-ui', 'disableStyles')) && (game.settings.get('baskerville-ui', 'theme') == "w")) {
		fantasyUIAddMainCss("w")
	}

});


function addClassByQuerySelector(className, selector) {
	let navigation = document.querySelector(selector);
	navigation.classList.add(className)
}

function fantasyUIAddMainCss(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "b") {
		mainCss.setAttribute("href", "modules/baskerville-ui/css/dark/baskerville_dark.css")
	} else if (theme == "w") {
		mainCss.setAttribute("href", "modules/baskerville-ui/css/light/baskerville_light.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}