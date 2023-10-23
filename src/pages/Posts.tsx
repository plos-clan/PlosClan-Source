export default () => (
  <>
  <meta charSet="UTF-8" />
  <title>若智新闻</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        ul {\n            list-style-type: none;\n            margin: 0;\n            padding: 0;\n            overflow: hidden;\n            background-color: #333;\n            box-shadow: 2px 2px 5px #333;\n        }\n\n        li {\n            float: left;\n        }\n\n        li a {\n            display: block;\n            color: white;\n            text-align: center;\n            padding: 14px 16px;\n            text-decoration: none;\n        }\n\n        li a:hover {\n            background-color: #111;\n        }\n\n        a:link {\n            text-decoration: none;\n            color: black;\n        }\n\n        a:visited {\n            text-decoration: none;\n            color: #333\n        }\n\n        a:hover {\n            text-decoration: underline;\n        }\n\n        a:active {\n            text-decoration: underline;\n        }\n    "
    }}
  />
  <h1 style={{ display: "inline", color: "brown" }}>
    <s>若智新闻</s>整活贴吧
  </h1>
  <div style={{ display: "inline", color: "rgb(126, 126, 126)" }}>
    (OS群奇闻异事)若智升天，我即是仙
  </div>
  <ul>
    <li>
      <a href="https://plos-clan.github.io" style={{ color: "white" }}>
        OS群网站首页
      </a>
    </li>
    <li>
      <a>最新消息</a>
    </li>
    <li>
      <a
        style={{ color: "white" }}
        href="javascript:void(0);"
        onclick="ws_about()"
      >
        关于
      </a>
    </li>
  </ul>
  <div>
    <br />
  </div>
  <div id="wsm"></div>
  <div id="byd" />
  <div id="tish" />
</>
)
