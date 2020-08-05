<template>
  <div>
    <!-- Banner -->
    <div class="carousel-wrapper">
      <a-carousel effect="fade" autoplay :autoplaySpeed="5000">
        <div class="carousel-slide" v-for="(slide, index) in carousel" :key="index">
          <a class="link" :style="`backgroundImage: url(${slide})`"></a>
        </div>
      </a-carousel>
    </div>
    <!-- 柜么 -->
    <div class="section bg2">
      <div class="container">
        <div class="section-title">
          <h2>柜么</h2>
          <p>专注定制家具20年</p>
        </div>
        <a-row class="section-one" :gutter="[30, 30]">
          <template v-for="(item, index) in pictures6">
            <a-col :span="8" :key="index">
              <div class="inner" :style="`backgroundImage: url(${item})`">
                <!-- <div class="title">标题1</div> -->
                <!-- <div class="content">内容内容内容</div> -->
              </div>
            </a-col>
          </template>
        </a-row>
      </div>
    </div>
    <!-- 产品欣赏 -->
    <div class="section">
      <div class="container">
        <div class="section-title">
          <h2>柜么</h2>
          <p>专注定制家具20年</p>
        </div>
      </div>
      <div class="section-product" :style="`backgroundImage: url(${bgProduct})`">
        <!-- <div style="position:absolute; width: 1200px; margin: auto;"> -->
        <div class="product-wrap">
          <div class="product-item">
            <div class="tit">大，有所为</div>
            <a>探索>></a>
          </div>
          <div class="product-item" style="margin: 0 30px;">
            <div class="tit">精，则不凡</div>
            <a>探索>></a>
          </div>
          <div class="product-item">
            <div class="tit">变，而不同</div>
            <a>探索>></a>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!-- 块 -->
    <div class="section hidden">
      <div class="container">
        <div class="section-title">
          <h2>标题</h2>
          <p>描述文字</p>
        </div>
        <a-row class="section-two" :gutter="[30, 30]">
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/f4f4f4" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/f1f3f2" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/eeeeee" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/9fa6b9" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/79acc1" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="inner">
              <div class="cover">
                <img src="http://dummyimage.com/556x500/f3f3f3" />
              </div>
              <div class="content">
                <a>标题标题</a>
                <p>描述描述</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 设计师 -->
    <div class="section bg2">
      <div class="container">
        <div class="section-title">
          <h2>设计师</h2>
          <p>年轻就是要出色</p>
        </div>
        <div class="slider3-wrapper">
          <a-carousel :dots="false" arrows infinite :slidesToShow="3" :slidesToScroll="3">
            <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
              <a-icon type="arrow-left" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="arrow-right" />
            </div>
            <div>
              <div class="single-slide">
                <a>
                  <img src="~@assets/design1.jpg" alt />
                  <!-- <div class="hover-bottom">描述文字</div> -->
                </a>
              </div>
            </div>
            <div>
              <div class="single-slide">
                <a>
                  <img src="~@assets/design2.jpg" alt />
                  <!-- <div class="hover-bottom">描述文字</div> -->
                </a>
              </div>
            </div>
            <div>
              <div class="single-slide">
                <a>
                  <img src="~@assets/design3.jpg" alt />
                  <!-- <div class="hover-bottom">描述文字</div> -->
                </a>
              </div>
            </div>
          </a-carousel>
        </div>
      </div>
    </div>
    <!-- 新闻动态 -->
    <div class="section">
      <div class="container">
        <div class="section-title">
          <h2>新闻动态</h2>
          <p>描述文字描述文字</p>
        </div>
        <a-row class="section-three" :gutter="15">
          <a-col :span="12">
            <ul class="news-wrap">
              <li class="news-list">
                <a class="title" @click="() => $router.push('/news')">柜么全屋定制品牌介绍</a>
                <span class="time">05/10</span>
              </li>
              <li class="news-list">
                <a class="title" @click="() => $router.push('/news')">全屋定制智能家居之路—-柜么全屋定制总裁李双林</a>
                <span class="time">03/05</span>
              </li>
              <li class="news-list">
                <a class="title" @click="() => $router.push('/news')">重庆家具行业协会第五届第一次副会长大会成功举行</a>
                <span class="time">01/13</span>
              </li>
            </ul>
          </a-col>
          <a-col :span="12">
            <div class="news-image">
              <img src="~@assets/news_b.jpg" />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: [1, 2, 3].map((i) => require(`@assets/banner${i}.jpg`)),
      bgProduct: require('@assets/bg_product.jpg'),
      pictures6: [1, 2, 3, 4, 5, 6].map((i) => require(`@assets/slide${i}.png`)),
    };
  },
};
</script>

<style lang="less">
.section {
  padding-top: 90px;
  padding-bottom: 90px;
}

.bg1 {
  background: #4698ff;
}

.bg2 {
  background: #f3f6fa;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 717px;
  .ant-carousel {
    .carousel-slide {
      position: relative;
      .link {
        display: block;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 715px;
      }
    }
    .slick-dots {
      bottom: 50px;
      .slick-active > button {
        width: 40px;
        background: #4698ff;
      }
      li > button {
        width: 20px;
        height: 8px;
        border-radius: 30px;
        opacity: 1;
      }
    }
  }
}

.section-title {
  &.white {
    color: #fff;
    h2 {
      color: #fff;
    }
  }
  text-align: center;
  font-size: 16px;
  color: #7d91aa;
  font-weight: 300;
  margin-bottom: 30px;
  h2 {
    margin: 0 0 5px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #222538;
  }
}
.section-one {
  .inner {
    position: relative;
    height: 123px;
    padding: 30px;
    border-radius: 7px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all 0.3s cubic-bezier(0.84, 0.35, 0.39, 0.74) 0s;
    box-sizing: border-box;
    &:hover {
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.15);
    }
    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .content {
      font-weight: 300;
      font-size: 14px;
      color: #2d3666;
      line-height: 26px;
    }
  }
}
.section-two {
  .inner {
    position: relative;
    .cover {
      img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
    }
    .content {
      text-align: center;
      padding-top: 25px;
      color: #6d7784;
      a {
        display: block;
        font-weight: 400;
        font-size: 24px;
        color: #222538;
        &:hover {
          color: #4698ff;
        }
      }
    }
  }
}
.slider3-wrapper {
  margin: 0 -15px;
  .single-slide {
    position: relative;
    margin: 0 15px;
    // padding: 35px;
    font-weight: 300;
    color: #7d91aa;
    font-size: 36px;
    // line-height: 100px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    & > a:hover {
      img {
        transform: scale(1.05);
      }
    }
    & > a {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        transition: all 0.4s;
      }
      .hover-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 76px;
        padding-top: 40px;
        color: #333;
        text-align: center;
        font-size: 20px;
        box-sizing: border-box;
        background: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(14, 22, 32, 0.04));
        transition: all 0.4s;
      }
    }
  }
  .slick-arrow {
    margin-top: -17px;
    width: 35px;
    height: 35px;
    border-radius: 4px;
    background: #222;
    text-align: center;
    line-height: 35px;
    &:hover {
      background: #222 !important;
    }
    .anticon {
      padding-top: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .slick-prev {
    left: -45px;
  }
  .slick-next {
    right: -45px;
  }
}
.section-three {
  .news-wrap {
    position: relative;
    list-style: none;
    .news-list {
      position: relative;
      margin-bottom: 15px;
      list-style: none;
      padding: 20px 50px;
      // padding-left: 50px;
      border-radius: 4px;
      background-image: url('../../assets/new.png');
      background-size: 35px;
      background-repeat: no-repeat;
      background-position: 10px center;
      background-color: #f3f3f3;
      .title {
        display: block;
        position: relative;
        line-height: 28px;
        font-weight: 700;
        color: #333;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
    }
  }
  .news-image {
    position: relative;
    text-align: center;
    height: 332px;
    img {
      max-width: 80%;
    }
  }
}
.section-product {
  position: relative;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  .product-wrap {
    position: absolute;
    left: calc(50% - 600px);
    bottom: 40px;
    right: 0;
    .product-item {
      float: left;
      position: relative;
      width: 380px;
      height: 180px;
      padding-top: 40px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      .tit {
        position: relative;
        margin-bottom: 50px;
        font-size: 24px;
        &::after {
          content: '';
          position: absolute;
          bottom: -28px;
          left: calc(50% - 18px);
          height: 0;
          width: 36px;
          border: 1px solid #4698ff;
        }
      }
      a {
        color: #fff;
        &:hover {
          color: #4698ff;
        }
      }
    }
  }
}
</style>
