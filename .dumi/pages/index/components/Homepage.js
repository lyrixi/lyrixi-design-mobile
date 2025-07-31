import { useLocale } from 'dumi'
import './Homepage.less'
import phone from './assets/phone.png'

export default () => {
  const locale = useLocale()

  // 国际化
  function trans(en, zh) {
    return locale?.id === 'en-US' ? en : zh
  }

  return (
    <div className="homepage">
      {/* 内容部分 */}
      <div className="main">
        {/* <div className="header"> */}
        <div className="main-left">
          <h1 className="title">勤策</h1>
          <h1 className="title" style={{ marginTop: 12 }}>
            Design Mobile
          </h1>
          <p className="description">
            {trans(
              'A Mobile First HTMl5 and CSS3 UI Framework',
              '为产品设计提供通用指导原则，助力产研团队高效协作，为用户提供友好的产品体验'
            )}
          </p>
          <p className="buttons">
            <a href={trans('/en-US/', '/ux/introduce')}>{trans('Get Started', '开始使用')}</a>
            <a href={trans('/en-US/ux/introduce', '/components')}>
              {trans('Components', '组件列表')}
            </a>
          </p>
        </div>
        {/* logo动画 */}
        <div className="main-right">
          <img src={phone} style={{ width: 298 }} />
        </div>
        {/* </div> */}
      </div>
      {/* 卡片 */}
      <div className="snippets">
        <div className="snippet">
          <div className="title">设计价值观</div>
          <div className="description">
            我们的目标是通过通用的设计系统去解决产品中的体验问题,
            并为产品设计提供指导原则解决业务问题，同时它能够促进设计部门和研发部门之间协作,
            成为开发者之间沟通的语言。
          </div>
        </div>
        <div className="snippet">
          <div className="title">组件</div>
          <div className="description">
            软件开发中的独立、可重用的模块或部件，具有特定的功能和接口。它们可以被组合和组装成更大的系统，提供系统所需的特定功能，从而提高开发效率、代码可维护性和重用性。
          </div>
        </div>
        <div className="snippet">
          <div className="title">应用</div>
          <div className="description">
            APAAS 的使用场景包括各种应用程序的开发和部署，包括 Web
            应用、移动应用、企业应用、物联网应用等。它适用于不同规模和类型的组织，包括初创公司、中小型企业和大型企业，以及独立开发人员和团队。
          </div>
        </div>
      </div>
    </div>
  )
}
