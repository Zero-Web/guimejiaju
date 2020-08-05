<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container clear">
        <div class="footer_widget">
          <h3>13635355999</h3>
          <p>地址： 重庆市渝北区金开大道西段210号3楼3号附20-05-001704号</p>
          <p>柜么（重庆）智能家居有限公司是全屋定制十大品牌和定制家具十大品牌之一，产品材质包括实木、板木、板式等材质。欢迎咨询</p>
        </div>
        <div class="footer_widget text-right">
          <div class="er-code">
            <img src="../assets/ercode.png" alt="二维码" />
            <p>关注我们</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        柜么（重庆）智能家居
        <a href="http://www.beian.miit.gov.cn/">渝ICP备20007955号-1</a>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
.footer {
  background-color: #272938;
  color: #7286a0;
  line-height: 24px;
}
.footer-top {
  padding: 65px 0;
  .footer_widget {
    float: left;
    width: 50%;
  }
  h3 {
    position: relative;
    margin-bottom: 18px;
    color: #b5c3d4;
    font-size: 24px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 420px;
      height: 1px;
      background: rgba(92, 91, 89, 1);
    }
  }
  p {
    margin: 0;
    line-height: 28px;
    font-size: 14px;
  }
  .er-code {
    display: inline-block;
    width: 120px;
    height: 120px;
    text-align: center;
    img {
      display: block;
      max-width: 100%;
    }
  }
}
.footer-bottom {
  background-color: #1f2131;
  padding: 25px 0;
}
</style>