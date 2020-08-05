<template>
  <div class="cloud">
    <div class="backdrop-wrap">
      <div class="backdrop-cont" :style="`backgroundImage: url(${backdrop})`"></div>
    </div>
    <div class="container">
      <h1 class="cloud-title">云系统</h1>
      <div class="cloud-container">
        <div class="cloud-nav">
          <div class="nav-item line">
            <img src="~@assets/cloud_1.png" />户型工具
          </div>
          <div class="nav-item line">
            <img src="~@assets/cloud_2.png" />装修工具
          </div>
          <div class="nav-item line">
            <img src="~@assets/cloud_3.png" />装修方案
          </div>
          <div class="nav-item">
            <img src="~@assets/cloud_4.png" />户型改造
          </div>
        </div>
        <div class="cloud-cont">
          <div class="cont-left">
            <h5>重庆最新户型图</h5>
            <div class="floor-plan">
              <img src="~@assets/yxt2.jpg" style="margin-right: 20px" />
              <img src="~@assets/yxt3.jpg" alt />
            </div>
          </div>
          <div class="cont-right">
            <h5>重庆热门楼盘</h5>
            <ul class="property">
              <li>
                世纪金源御府
                <span>422个户型</span>
              </li>
              <li>
                鲁能领秀城
                <span>329个户型</span>
              </li>
              <li>
                华宇金沙时代
                <span>224个户型</span>
              </li>
              <li>
                康德国会山
                <span>237个户型</span>
              </li>
              <li>
                和泓南山道
                <span>199个户型</span>
              </li>
              <li>
                金科天宸
                <span>199个户型</span>
              </li>
              <li>
                招商江湾城
                <span>173个户型</span>
              </li>
              <li>
                保利·香雪
                <span>163个户型</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let [backdrop, yxt2, yxt3] = [1, 2, 3].map((i) => require(`@assets/yxt${i}.jpg`));

export default {
  name: 'Cloud',
  data() {
    return {
      backdrop,
    };
  },
};
</script>

<style lang="less">
@color: #4698ff;
.hover-color() {
  &:hover {
    color: @color;
  }
}

.clear-both() {
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }
}
.cloud-title {
  margin-top: 36px;
}
.cloud-container {
  margin: 30px 0 60px;
  .cloud-nav {
    .clear-both();
    border: 1px solid @color;
    .nav-item {
      float: left;
      width: 25%;
      padding: 10px 0;
      color: #333;
      font-size: 14px;
      text-align: center;
      img {
        vertical-align: -2px;
        padding-right: 6px;
      }
    }
    .line {
      border-right: 1px solid #4698ff;
    }
  }
  .cloud-cont {
    position: relative;
    padding: 10px 0;
    .clear-both();
    .cont-left,
    .cont-right {
      float: left;
      padding: 0 40px;
      width: 50%;
    }
    .property {
      padding-left: 20px;
      font-size: 14px;
      li {
        margin-bottom: 10px;
        color: #333;
        span {
          float: right;
          color: #999;
        }
      }
    }
  }
}
</style>
