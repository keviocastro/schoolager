export const environment = {
  production: true,
  host: 'http://gestor.logosedtech.com.br/auth',
  schools_api_uri: 'http://schools-dev.logoseducacao.com.br/',
  auth0: {
    client_id: 'XxjI1CTNTGYN9tbBx0yJmtMvvTbt5hWW',
    domain: 'logos.auth0.com',
    logo_uri: './assets/img/logos-azul.png',
    redirect_uri: 'http://gestor.logosedtech.com.br/auth',
    audience: 'api.schools',
    scope : 'openid profile email'
  },
  emptyState : false
};
