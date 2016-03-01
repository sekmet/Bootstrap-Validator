Package.describe({
  name: 'sekmet:bootstrap-validator',
  summary: 'bootstrapValidator to validate forms and use bootstrap 3 to show errors',
  version: '0.5.3',
  git: 'https://github.com/sekmet/Bootstrap-Validator'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('jquery', 'client');
    api.addFiles('lib/js/bootstrapValidator.js', 'client');
    api.addFiles('lib/js/language/en_US.js', 'client');
    api.addFiles('lib/css/bootstrapValidator.css', 'client');
});
