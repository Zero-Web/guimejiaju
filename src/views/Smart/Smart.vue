<template>
  <div class="smart">
    <div class="backdrop-wrap">
      <div class="backdrop-cont" :style="`backgroundImage: url(${backdrop})`"></div>
    </div>
    <div class="container">
      <div class="smart-container">
        <div class="smart-slider">
          <img :src="wlzn2" alt />
        </div>
        <div class="smart-cont">
          <div class="smart-tab">
            <div class="tab-item on">01.搜索您的户型图</div>
            <div class="tab-item">02.不同风格，不同设计效果图</div>
          </div>
          <div class="smart-title">户型搜索</div>
          <div class="smart-search">
            <span class="select">
              全国
              <a-icon type="caret-down" />
            </span>
            <input class="input" type="text" placeholder="输入您的户型图" />
            <span class="button">
              <a-icon type="search"></a-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let [backdrop, wlzn2] = [1, 2].map((i) => require(`@assets/wlzn${i}.jpg`));

export default {
  name: 'Cloud',
  data() {
    return {
      backdrop,
      wlzn2,
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

.smart-container {
  margin: 60px 0;
  .clear-both();
  .smart-slider {
    float: left;
  }
  .smart-cont {
    float: right;
    display: block;
    position: relative;
    width: 805px;
    height: 559px;
    background: #fff;
  }
  .smart-tab {
    position: relative;
    background: #d8e4f3;
    .tab-item {
      display: inline-block;
      height: 70px;
      width: 50%;
      text-align: center;
      color: @color;
      font-size: 20px;
      line-height: 70px;
      &.on {
        color: #fff;
        background: @color;
      }
    }
  }
  .smart-title {
    margin-top: 60px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 28px;
  }
  .smart-search {
    display: flex;
    margin: 0 auto;
    width: 650px;
    box-sizing: border-box;
    border: 1px solid @color;
    line-height: 50px;
    .select {
      width: 134px;
      padding-left: 16px;
      border-right: 1px solid @color;
      font-size: 22px;
    }
    .input {
      flex: 1;
      width: auto;
      padding-left: 16px;
      border: none;
      outline: none;
      font-size: 22px;
      &::placeholder {
        color: #ccc;
      }
    }
    .button {
      width: 134px;
      text-align: center;
      background: @color;
      font-size: 22px;
      color: #fff;
    }
  }
}
</style>
