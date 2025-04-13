/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config:any) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    })
    return config
  }
}

module.exports = nextConfig