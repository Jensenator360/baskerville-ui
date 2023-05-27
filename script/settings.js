Hooks.once('init', function() {
    game.settings.register('<baskerville-ui>', 'selectedStyle', {
      name: game.i18n.localize('<baskerville-ui>.settings.selectedStyle.name'),
      hint: game.i18n.localize('<baskerville-ui>.settings.selectedStyle.hint'),
      scope: 'client',
      config: true,
      type: String,
      choices: {
        'style1.css': 'Style 1',
        'style2.css': 'Style 2'
      },
      default: 'style1.css',
      onChange: value => {
        loadSelectedCSS(value);
      }
    });
  });
  
  Hooks.once('ready', function() {
    loadSelectedCSS(game.settings.get('<baskerville-ui>', 'selectedStyle'));
  });
  
  function loadSelectedCSS(cssFileName) {
    const cssLink = document.getElementById('<baskerville-ui>-css');
    if (cssLink) {
      cssLink.remove();
    }
  
    const head = document.getElementsByTagName('head')[0];
    const newCSS = document.createElement('link');
    newCSS.id = '<baskerville-ui>-css';
    newCSS.rel = 'stylesheet';
    newCSS.href = `modules/<baskerville-ui>/assets/${cssFileName}`;
    head.appendChild(newCSS);
  }
  