export const getSecondsSinceT0 = (t0) => {
  return `${((performance.now() - t0) / 1000).toFixed(2)}`
}

export const readArrayBufferAsString = (arrayBuffer) => {
  return new Promise(resolve => {
    let reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.readAsText(new Blob([arrayBuffer]))
  })
}

export const removeProtocolFromEndpoint = (endpoint) => {
  const http = 'http://'
  const https = 'https://'

  if (endpoint.substring(0, http.length) === http) {
    return endpoint.substring(http.length)
  } else if (endpoint.substring(0, https.length) === https) {
    return endpoint.substring(https.length)
  } else {
    return endpoint
  }
}

export const getProtocolFromEndpoint = (endpoint) => {
  return endpoint.split(':')[0]
}

export const byteSizeOfString = (string) => {
  return string.length * 2
}

export const parseQueryStringWithoutArrayElems = (queryString) => {
  const query = {}
  const keyValuePairsArray = queryString.split('&')
  for (const keyValuePair of keyValuePairsArray) {
    const keyValueArray = keyValuePair.split('=')
    const key = decodeURIComponent(keyValueArray[0]).replace('userbase-', '')
    const value = decodeURIComponent(keyValueArray[1])
    query[key] = value
  }
  return query
}
