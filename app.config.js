import 'dotenv/config'

export default {
  name: 'Ninja Scout',
  version: '1.0.0',
  extra: {
    apiEndpoint: process.env.API_ENDPOINT,
  },
};