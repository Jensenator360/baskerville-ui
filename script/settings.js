Hooks.once('init', function() {
    game.settings.register('<dein-modul>', 'selectedStyle', {
      name: game.i18n.localize('<dein-modul>.settings.selectedStyle.name'),
      hint: game.i18n.localize('<dein-modul>.settings.selectedStyle.hint'),
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
    loadSelectedCSS(game.settings.get('<dein-modul>', 'selectedStyle'));
  });
  
  function loadSelectedCSS(cssFileName) {
    const cssLink = document.getElementById('<dein-modul>-css');
    if (cssLink) {
      cssLink.remove();
    }
  
    const head = document.getElementsByTagName('head')[0];
    const newCSS = document.createElement('link');
    newCSS.id = '<dein-modul>-css';
    newCSS.rel = 'stylesheet';
    newCSS.href = `modules/<dein-modul>/assets/${cssFileName}`;
    head.appendChild(newCSS);
  }
  