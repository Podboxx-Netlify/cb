module.exports = {
  env: {
    station_id: 368,
  },
  reactStrictMode: true,
  target: 'serverless',
  images: {
    domains: ['podboxx-production.s3.amazonaws.com', 'podboxx-development.s3.amazonaws.com', 'next.podboxx.com'],
  },
}