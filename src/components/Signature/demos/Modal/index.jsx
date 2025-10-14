import React, { useRef, useState } from 'react'
import { Signature, Page } from 'lyrixi-design-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="text-center">手写签名</Page.Header>
      <Page.Main className="bg-white">
        <Signature.Modal
          open={true}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
