module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
 keys: env.array('APP_KEYS', ['xQ+kjqNNANH5LL+9InA/e2owv8Vb08C9ndllJ8FGfKg=']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'xQ+kjqNNANH5LL+9InA/e2owv8Vb08C9ndllJ8FGfKg='), // Your JWT secret
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'EunxgGcUhJdX286NnsVJmg=='), // Your generated API token salt
  },

});
