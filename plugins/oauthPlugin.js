import fastifyOauth2 from '@fastify/oauth2';
import fastifyCookie from 'fastify-cookie';
import googleConfig from '../config/google.config.js';

const oauthPlugin = async (fastify, options) => {
  fastify.register(fastifyCookie);

  fastify.register(fastifyOauth2, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: googleConfig.client.id,
        secret: googleConfig.client.secret,
      },
      auth: fastifyOauth2.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/login',
    callbackUri: googleConfig.redirect_uri,
  });

  fastify.get('/login/callback', async (request, reply) => {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    const { data: userInfo } = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
  
    // You can now use token.access_token to call Google APIs
    reply.send({ token });
  });
}

export default oauthPlugin;