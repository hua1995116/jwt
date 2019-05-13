export function base64UrlEncodeJSON (json: Object) {
  return Buffer.from(
    JSON.stringify(json)
  ).toString('base64')
   .replace(/\+/g, '-')
   .replace(/\//g, '_')
}

export function base64UrlDecodeToJSON (str: string) {
  return JSON.parse(
    Buffer.from(
      str.replace(/-/g, '+').replace(/_/g, '/'), 'base64'
    ).toString('utf8')
  )
}

export function payloadWithExpirationTime (payload: Object, minutesFromNow: number) {
  let date = new Date()
  date.setMinutes(date.getMinutes() + minutesFromNow)
  const payloadExp = {
    ...payload,
    exp: date.getTime()
  }
  return payloadExp;
}