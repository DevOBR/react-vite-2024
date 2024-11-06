const URL_FACT_PREFIX = 'https://catfact.ninja/fact'

export async function getFactAsync() {
  return await (await fetch(URL_FACT_PREFIX)).json()
}
