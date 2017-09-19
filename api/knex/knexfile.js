module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'dev_user',
      password: 'dev_user_password',
      database: 'hummingtree_backend_dev',
    },
    seeds: {
      directory: './seeds/dev',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'test_user',
      password: 'test_user_password',
      database: 'hummingtree_backend_test',
    },
  },
  cloudTest: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'hummingtree-cloud-test-password',
      database: 'cloud_test',
    },
    seeds: {
      directory: './seeds/dev',
    },
  },
  production: {
    client: 'pg',
    connection: {
      user: 'root',
      password: 'hummingtree-cloud-test-password',
      database: 'cloud_test',
      socketPath: '/cloudsql/hello-hummingtree:us-central1:hummingtree-cloud-test',
    },
  },
};
