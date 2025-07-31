import React, { useState, useRef } from 'react'

import { Layout, NavBar, ToolBar, Divider, Icon, Space } from 'lyrixi-design-mobile'

export default () => {
  const [mainDOM, setMainDOM] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [item, setItem] = useState(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [invertSearchActive, setInvertSearchActive] = useState(false)
  const filterRef = useRef(null)

  return (
    <Layout className="full">
      <Layout.Header>
        <NavBar>
          <NavBar.Title>ToolBar</NavBar.Title>
        </NavBar>
      </Layout.Header>
      <Layout.Main
        ref={(current) => {
          if (!current?.rootDOM) return
          setMainDOM(current?.rootDOM || null)
        }}
      >
        <Divider>DateRange</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.DateRange
              arrow={<div>^</div>}
              portal={mainDOM}
              title={!dateRange ? 'DateRange' : undefined}
              value={dateRange}
              onChange={setDateRange}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              title={!dateRange ? 'DateRange' : undefined}
              format="MM-DD"
              value={dateRange}
              onChange={setDateRange}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              className="toolbar-button"
              title={!dateRange ? 'DateRange' : undefined}
              value={dateRange}
              onChange={setDateRange}
            />
          </ToolBar>
        </div>

        <Divider>List</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.List
              portal={mainDOM}
              title={!item ? 'List' : undefined}
              value={item}
              onChange={setItem}
              list={[
                {
                  disabled: true,
                  id: '',
                  name: 'Disabled'
                },
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
            />
            <ToolBar.List
              portal={mainDOM}
              className="toolbar-button"
              title={!item ? 'List' : undefined}
              value={item}
              onChange={setItem}
              list={[
                {
                  disabled: true,
                  id: '',
                  name: 'Disabled'
                },
                {
                  id: '1',
                  name: 'Option1'
                },
                {
                  id: '2',
                  name: 'Option2'
                }
              ]}
            />
          </ToolBar>
        </div>

        {/* Button */}
        <Divider>Button</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Button shape="square" onClick={() => console.log(1)}>
              <Icon className="seeds-icons seeds-icon-barcode"></Icon>
            </ToolBar.Button>
            <Space.Compact>
              <ToolBar.Button>1</ToolBar.Button>
              <ToolBar.Button>2</ToolBar.Button>
              <ToolBar.Button>3</ToolBar.Button>
            </Space.Compact>
            <Space.Compact>
              <ToolBar.List
                portal={mainDOM}
                arrow={null}
                title={({ active }) => {
                  return (
                    <ToolBar.Button shape="square" className={active ? 'active' : ''}>
                      <Icon className="seeds-icons seeds-icon-three-dots"></Icon>
                    </ToolBar.Button>
                  )
                }}
                maskProps={{
                  style: {
                    zIndex: 99
                  }
                }}
                value={item}
                onChange={setItem}
                list={[
                  {
                    id: 'desc',
                    name: 'Desc'
                  },
                  {
                    id: 'asc',
                    name: 'Asc'
                  }
                ]}
              />
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="seeds-icons seeds-icon-filter-menu"></Icon>
              </ToolBar.Button>
            </Space.Compact>
          </ToolBar>
        </div>

        {/* Filter */}
        <Divider>Filter</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Button
              onClick={() => {
                filterRef.current?.open()
              }}
            >
              Click to toggle filter modal visible
            </ToolBar.Button>
            <ToolBar.Filter
              active
              icon={<Icon className="toolbar-icon seeds-icons seeds-icon-search" />}
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div className="bg-white" style={{ height: '300px' }}>
                Modal Content
              </div>
            </ToolBar.Filter>
            <ToolBar.Filter
              ref={filterRef}
              className="toolbar-button"
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div className="bg-white" style={{ height: '300px' }}>
                Modal Content
              </div>
            </ToolBar.Filter>
          </ToolBar>
        </div>

        <Divider>SearchBar</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Search
              value={search}
              onSearch={(value) => {
                console.log('search:', value)
              }}
            />
          </ToolBar>
        </div>

        <Divider>SearchBar active</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Search
              value={search}
              readOnly
              onClick={() => {
                setSearchActive(true)
              }}
            />
            {searchActive && (
              <ToolBar.SearchActive
                value={search}
                onSearch={(keyword) => {
                  setSearch(keyword)
                  console.log('search keyword:' + keyword)
                  setSearchActive(false)
                }}
                onBlur={() => {
                  setSearchActive(false)
                }}
                // onCancel={() => {
                //   setSearchActive(false)
                // }}
              />
            )}
          </ToolBar>
        </div>

        <Divider>SearchBar Invert active</Divider>
        <div className="toolbar-bg invert">
          <ToolBar invert>
            <ToolBar.Search
              value={search}
              readOnly
              onClick={() => {
                setInvertSearchActive(true)
              }}
            />
            {invertSearchActive && (
              <ToolBar.SearchActive
                value={search}
                onSearch={(keyword) => {
                  setSearch(keyword)
                  console.log('search keyword:' + keyword)
                  setInvertSearchActive(false)
                }}
                onBlur={() => {
                  setInvertSearchActive(false)
                }}
              />
            )}
          </ToolBar>
        </div>
      </Layout.Main>
    </Layout>
  )
}
