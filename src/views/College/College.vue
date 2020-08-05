<template>
  <div class="college">
    <div class="backdrop-wrap">
      <div class="backdrop-cont" :style="`backgroundImage: url(${backdrop})`"></div>
    </div>
    <!-- 内容 -->
    <div class="container">
      <div class="index-title margin-index-top">
        <h1>视频教程</h1>
        <span>
          <a class="keyword-link">销售技巧</a>
          <a class="keyword-link">cad</a>
          <a class="keyword-link">ERP</a>
        </span>
        <a class="more-link">
          更多
          <a-icon type="double-right"></a-icon>
        </a>
      </div>
      <a-row :gutter="30">
        <a-col :span="15">
          <div class="list-case first-case">
            <a class="case-img">
              <img :src="sxy2" />
            </a>
            <div class="case-info">
              <a class="case-title">在线直播诚邀您一起速看破解之法</a>
              <p class="case-desc">宝剑出鞘谁与争锋</p>
            </div>
          </div>
        </a-col>
        <a-col :span="9">
          <div class="list-case">
            <a class="case-img">
              <img :src="sxy3" />
            </a>
            <div class="case-info">
              <a class="case-title">家具搭配学</a>
              <p class="case-desc">搭配技巧</p>
            </div>
            <div class="case-author">
              <a class="author-info">
                <img src="~@assets/logo-min.png" alt />
                <span class="author-name"></span>
                <span class="author-grade"></span>
              </a>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
let [backdrop, sxy2, sxy3] = [1, 2, 3].map((i) => require(`@assets/sxy${i}.jpg`));
let logoMini = require('@assets/logo-min.png');
export default {
  name: 'College',
  data() {
    return {
      backdrop,
      sxy2,
      sxy3,
      logoMini,
    };
  },
};
</script>

<style lang="less">
.index-title {
  position: relative;
  margin-bottom: 8px;
  color: #333;
  > h1 {
    display: inline-block;
  }
  .keyword-link {
    margin-left: 40px;
    color: #666;
    font-size: 16px;
    &:hover,
    &:first-child {
      color: #4698ff;
    }
  }
  .more-link {
    position: absolute;
    bottom: 2px;
    right: 4px;
    color: #666;
    font-size: 16px;
    i {
      -webkit-animation: 1.5 linear infinite;
      animation: 1.5s linear infinite;
    }
    &:hover {
      color: #4698ff;
      i {
        -webkit-animation-name: more-arrow;
        animation-name: more-arrow;
      }
    }
  }
}

.list-case {
  position: relative;
  margin-bottom: 24px;
  border-radius: 4px;
  background: #fff;
  -webkit-box-shadow: 0 0 6px 0px rgba(88, 88, 88, 0.1);
  box-shadow: 0 0 6px 0px rgba(88, 88, 88, 0.1);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: hidden;
  height: 407px;
  &:hover {
    -webkit-box-shadow: 0 0 6px 2px rgba(88, 88, 88, 0.15);
    box-shadow: 0 0 6px 2px rgba(88, 88, 88, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  .case-img {
    display: block;
    position: relative;
    width: 100%;
    background: #f4f4f4;
    img {
      width: inherit;
      height: inherit;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .case-info {
    padding: 20px 24px 0;
    > a {
      color: #333;
      margin-bottom: 10px;
      font-size: 16px;
    }
    &:hover > a {
      color: #4698ff;
    }
    .case-desc {
      color: #999;
      font-size: 14px;
    }
  }
  .case-author {
    padding: 11px 24px;
    line-height: 25px;
    border-top: 1px solid #ededed;
    .author-info {
      display: block;
      .ant-avatar {
        margin-right: 10px;
        vertical-align: top;
      }
      img {
        display: inline-block;
        height: 25px;
        vertical-align: top;
      }
      .author-name {
        margin-right: 15px;
        color: 14px;
      }
      .author-grade {
      }
    }
  }
}
</style>
