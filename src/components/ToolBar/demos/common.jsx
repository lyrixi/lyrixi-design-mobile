import React, { useState, useRef } from 'react'

import {
  LocaleUtil,
  Layout,
  NavBar,
  ToolBar,
  Divider,
  Icon,
  Space,
  FooterBar
} from 'lyrixi-design-mobile'

export default () => {
  const dropdownRef = useRef(null)
  const [mainDOM, setMainDOM] = useState(null)
  const [dateRange, setDateRange] = useState(null)
  const [item, setItem] = useState(null)
  const [search, setSearch] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [invertSearchActive, setInvertSearchActive] = useState(false)
  const filterRef = useRef(null)

  function getDropdownModalNode({ open, close } = {}) {
    return (
      <div>
        <div style={{ height: '300px' }}>Modal Content</div>
        <FooterBar>
          <FooterBar.Button
            onClick={() => {
              typeof close === 'function' ? close() : dropdownRef.current.close()
            }}
          >
            {LocaleUtil.locale('取消', 'SeedsUI_cancel')}
          </FooterBar.Button>
          <FooterBar.Button
            className="primary"
            onClick={() => {
              console.log('ok')
            }}
          >
            {LocaleUtil.locale('确定', 'SeedsUI_ok')}
          </FooterBar.Button>
        </FooterBar>
      </div>
    )
  }

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
        {/* Dropdown */}
        <Divider>Dropdown</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.Dropdown left={12} title="Dropdown left" color="primary" variant="fill">
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Dropdown>
            <ToolBar.Dropdown title="Dropdown ref" ref={dropdownRef}>
              {getDropdownModalNode()}
            </ToolBar.Dropdown>
            <ToolBar.Dropdown title="Dropdown modal" modal={getDropdownModalNode} />
            <ToolBar.Dropdown right={12} title="Dropdown right">
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Dropdown>
          </ToolBar>
        </div>

        <Divider>DateRange</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.DateRange
              arrowRender={({ visible }) => {
                if (visible) {
                  return '^'
                }
                return '>'
              }}
              portal={mainDOM}
              title={!dateRange ? 'DateRange' : undefined}
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              title={!dateRange ? 'DateRange' : undefined}
              format="MM-DD"
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
            <ToolBar.DateRange
              portal={mainDOM}
              variant="fill"
              title={!dateRange ? 'DateRange' : undefined}
              value={dateRange}
              // allowClear={true}
              onChange={(newDateRange, { rangeId }) => {
                console.log('修改:', newDateRange)
                setDateRange(newDateRange)
                // setDateRangeId(rangeId)
              }}
            />
          </ToolBar>
        </div>

        <Divider>List</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.List
              left={12}
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
              variant="fill"
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

        <Divider>ActionSheet</Divider>
        <div className="toolbar-bg">
          <ToolBar>
            <ToolBar.ActionSheet
              portal={mainDOM}
              // color="primary"
              // variant="fill"
              title={!item ? 'ActionSheet' : undefined}
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
                arrowRender={null}
                shape="square"
                variant="fill"
                title={<Icon className="seeds-icons seeds-icon-three-dots"></Icon>}
                maskStyle={{
                  zIndex: 99
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
                <Icon className="seeds-icons seeds-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter variant="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
          </ToolBar>
        </div>

        {/* Filter */}
        <Divider>Filter Side</Divider>
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
              color="primary"
              shape="square"
              icon={<Icon className="toolbar-button-icon seeds-icons seeds-icon-search" />}
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div style={{ height: '300px' }}>Modal Content</div>
            </ToolBar.Filter>
            <ToolBar.Filter
              ref={filterRef}
              variant="fill"
              shape="square"
              onReset={() => {
                console.log('reset')
              }}
              onOk={() => {
                console.log('submit')
              }}
            >
              <div style={{ height: '300px' }}>Modal Content</div>
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
            <Space.Compact>
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="seeds-icons seeds-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter variant="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
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
            <Space.Compact>
              <ToolBar.Button shape="square" onClick={() => console.log(1)}>
                <Icon className="seeds-icons seeds-icon-barcode"></Icon>
              </ToolBar.Button>
              <ToolBar.Filter variant="fill" shape="square">
                <div style={{ height: '300px' }}>Modal Content</div>
              </ToolBar.Filter>
            </Space.Compact>
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
