import React from 'react'
import { Storage, Page, Button } from 'lyrixi-design-mobile'

export default () => {
  const [data, setData] = Storage.useCacheState(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Page className="full">
      <Page.Main>
        <h1>Cache State</h1>
        <p>{JSON.stringify(data)}</p>
        <Button
          className="flex primary"
          onClick={() => {
            setData({ name: 'morpheus' })
          }}
        >
          Set Cache
        </Button>
        <Button
          className="flex"
          onClick={() => {
            setData()
          }}
        >
          Remove Cache
        </Button>
        <Button
          className="flex"
          onClick={() => {
            alert(JSON.stringify(data))
          }}
        >
          Get Cache
        </Button>
      </Page.Main>
    </Page>
  )
}
