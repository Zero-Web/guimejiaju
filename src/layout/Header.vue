<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="logo-column">
          <a class="logo" @click="goLink('/')">
            <img src="~@assets/logo.jpg" alt="logo" />
          </a>
        </div>
        <div class="nav-column">
          <ul>
            <li :class="{ current: current === '/' }">
              <a @click="goLink('/')">首页</a>
            </li>
            <li :class="{ current: current === '/cloud' }">
              <a-dropdown>
                <a @click="goLink('/cloud')">
                  柜么云系统
                  <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a @click="goLink('/cloud')">柜么云系统</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
            <li :class="{ current: current === '/smart' }">
              <a @click="goLink('/smart?a=1')">柜么智能</a>
            </li>
            <li :class="{ current: current === '/college' }">
              <a @click="goLink('/college')">商学院</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      current: this.$route.path,
    };
  },
  methods: {
    goLink(path) {
      this.$router.push(path);
    },
  },
  watch: {
    $route(route) {
      this.current = route.path;
    },
  },
};
</script>
<style lang="less">
.header {
  background-color: #222538;
  padding: 18px 0;
}
.header-wrap {
  display: flex;
}
.logo-column {
  flex: 0 0 25%;
  max-width: 25%;
  height: 40px;
  .logo {
    display: inline-block;
    height: 40px;
    // padding: 5px 0;
  }
  img {
    display: block;
    max-height: 100%;
  }
}
.nav-column {
  flex: 0 0 75%;
  max-width: 75%;
  padding: 6px 0;
  font-size: 16px;
  ul {
    text-align: right;
    margin: 0;
    & > li {
      display: inline-block;
      position: relative;
      &:hover a {
        color: #b5c3d4;
      }
    }
    a {
      padding: 0 20px;
      font-weight: 500;
      line-height: 25px;
    }
    .current > a {
      color: #b5c3d4;
    }

    .anticon {
      vertical-align: unset;
      font-size: 14px;
    }
  }
  a {
    color: #7286a0;
    line-height: 25px;
    vertical-align: top;
    cursor: pointer;
  }
}
</style>
