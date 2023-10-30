export function getAppData() {
  return {
    appName: process.env.APP_NAME || 'cartwise',
    website: process.env.WEBSITE || 'https://cartwise.com',
    test: process.env.NODE_ENV !== 'production' ? true : false
  }
}