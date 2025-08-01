import React, { useRef, useState, useEffect } from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Loading from './../../../Loading'
import Input from './../../../Input'
import Layout from './../../../../components/Layout'
import Result from './../../../Result'
import Typography from './../../../Typography'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Loading, Input, Layout, Result, Typography } from 'lyrixi-design-mobile'
测试使用-end */

// 搜索
function Page({ map, visible, onVisibleChange, onChange }) {
  const inputRef = useRef(null)
  let [searchList, setSearchList] = useState(null)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (visible && inputRef?.current?.inputDOM) {
      inputRef.current.inputDOM.focus()
    }
    // eslint-disable-next-line
  }, [visible])

  // 返回
  function handleBack() {
    // Reset list
    setSearchList(null)

    // Go back
    onVisibleChange && onVisibleChange(false)
  }

  // 搜索
  async function handleSearch() {
    let inputText = inputRef.current.inputDOM
    if (!inputText.value) {
      return
    }
    let center = map.getCenter()
    Loading.show({
      content: LocaleUtil.locale('搜索中', 'SeedsUI_searching')
    })
    let list = await map.queryNearby({
      map: map,
      keyword: inputText.value,
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

  if (!visible) {
    return null
  }

  return (
    <Layout className="map-searchControl-page">
      <Layout.Header className="map-searchControl-header">
        <form
          action="."
          className="map-searchControl-header-input"
          style={{ backgroundColor: 'white' }}
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleSearch()
          }}
        >
          <Input.Text
            ref={inputRef}
            type="search"
            value={keyword}
            // placeholder={LocaleUtil.locale('搜索地点', 'SeedsUI_search_place')}
            leftIcon={<i className="map-searchControl-header-input-icon"></i>}
            allowClear
            onChange={setKeyword}
          />
        </form>
        <span className="map-searchControl-header-cancel" onClick={handleBack}>
          {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
        </span>
      </Layout.Header>
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
                      <Typography.Text highlight={inputRef?.current?.inputDOM?.value || ''}>
                        {item.name}
                      </Typography.Text>
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
    </Layout>
  )
}
export default Page
