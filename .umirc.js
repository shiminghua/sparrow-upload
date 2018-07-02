export default {
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes', 
      { exclude: [/models/,/services/, /helps/, /utils/, /components/] }
    ],
  ],
  // disableServiceWorker: true,
}
