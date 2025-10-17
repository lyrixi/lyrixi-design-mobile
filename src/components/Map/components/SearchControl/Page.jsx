import React, { useState } from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
import ToolBar from './../../../ToolBar'
import Page from './../../../../components/Page'
import Result from './../../../Result'
import Typography from './../../../Typography'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, ToolBar, Page, Result, Typography } from 'lyrixi-design-mobile'
测试使用-end */

// 搜索
function SearchPage({ map, open, onOpen, onClose, onChange }) {
  let [searchList, setSearchList] = useState(null)
  const [keyword, setKeyword] = useState('')

  // 返回
  function handleBack() {
    // Reset list
    setSearchList(null)

    // Go back
    onClose && onClose()
  }

  // 搜索
  async function handleSearch(keyword) {
    if (!keyword) {
      return
    }
    let center = map.getCenter()
    Loading.show({
      content: LocaleUtil.locale('搜索中', 'SeedsUI_searching')
    })
    let list = await map.queryNearby({
      map: map,
      keyword: keyword,
      latitude: center.latitude,
      longitude: center.longitude,
      type: center.type
    })
    Loading.hide()

    setSearchList(list)
  }

  // 选中一项
  function handleClick(item) {
    if (onChange) onChange(item)

    // 回到地图页面
    handleBack()
  }

  if (!open) {
    return null
  }

  return (
    <Page className="map-searchControl-page">
      <Page.Header className="map-searchControl-header">
        <ToolBar.SearchActive
          value={keyword}
          onSearch={(keyword) => {
            setKeyword(keyword)
            handleSearch(keyword)
          }}
          // onBlur={() => {
          //   setSearchActive(false)
          // }}
          onCancel={() => {
            handleBack()
          }}
        />
      </Page.Header>
      <div className="map-searchControl-body">
        {Array.isArray(searchList) && searchList.length
          ? searchList.map((item, index) => {
              return (
                <div
                  className="map-searchControl-item"
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  <div className="map-searchControl-item-content">
                    <div className="map-searchControl-item-title">
                      <Typography.Text highlight={keyword || ''}>{item.name}</Typography.Text>
                    </div>
                    <div className="map-searchControl-item-content-description">{item.address}</div>
                  </div>
                </div>
              )
            })
          : null}

        {/* Query error */}
        {typeof searchList === 'string' && (
          <Result className="map-main-result" status="500" title={searchList} />
        )}
        {/* List is empty */}
        {Array.isArray(searchList) && searchList.length === 0 ? (
          <Result className="map-main-result" status="empty" />
        ) : null}
      </div>
    </Page>
  )
}
export default SearchPage
