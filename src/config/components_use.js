
/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from "vue";
import {
  ConfigProvider,
  Layout,
  Carousel,
  Button,
  Dropdown,
  Row,
  Col,
  Modal,
  Icon,
  Spin,
  Menu,
  Tooltip,
  Alert,
  Avatar,
  Popconfirm,
  notification,
} from 'ant-design-vue';
// import VueCropper from 'vue-cropper'

Vue.use(ConfigProvider);
Vue.use(Layout);
Vue.use(Carousel);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Icon);
Vue.use(Spin);
Vue.use(Menu);
Vue.use(Tooltip);
Vue.use(Alert);
Vue.use(Avatar);

Vue.use(Popconfirm);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
