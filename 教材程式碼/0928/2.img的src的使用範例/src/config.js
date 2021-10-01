const debug = true

export const devUrl = 'http://localhost:3000' // 開發時的網址
export const prodUrl = 'http://www.abc.com' // 正式上線的網址
export const imgUrl = debug ? devUrl : prodUrl
