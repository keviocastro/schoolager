export const environment = {
  production: false,
  host: 'http://localhost:4200/auth',
  schools_api_uri: 'http://schools-dev.logoseducacao.com.br/',
  auth0: {
    client_id: 'XxjI1CTNTGYN9tbBx0yJmtMvvTbt5hWW',
    domain: 'logos.auth0.com',
    logo_uri: './assets/img/logos-azul.png',
    redirect_uri: 'http://localhost:4200/auth',
    audience: 'api.schools',
    scope : 'openid profile email'
  },
  emptyState : false
};
