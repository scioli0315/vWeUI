import { createRouter, createWebHashHistory } from 'vue-router'

import ActionSheet from '../pages/ActionSheet.vue'
import Article from '../pages/Article.vue'
import Badge from '../pages/Badge.vue'
import Button from '../pages/Button.vue'
import Dialog from '../pages/Dialog.vue'
import Flex from '../pages/Flex.vue'
import Footer from '../pages/Footer.vue'
import Form from '../pages/Form.vue'
import FormCheckbox from '../pages/form/FormCheckbox.vue'
import FormInputStatus from '../pages/form/FormInputStatus.vue'
import FormPage from '../pages/form/FormPage.vue'
import FormRadio from '../pages/form/FormRadio.vue'
import FormSelectPrimary from '../pages/form/FormSelectPrimary.vue'
import FormSwitch from '../pages/form/FormSwitch.vue'
import FormTextarea from '../pages/form/FormTextarea.vue'
import FormVcode from '../pages/form/FormVcode.vue'
import Gallery from '../pages/Gallery.vue'
import Grid from '../pages/Grid.vue'
import HalfScreenDialog from '../pages/HalfScreenDialog.vue'
import Home from '../pages/Home.vue'
import Icons from '../pages/Icons.vue'
import List from '../pages/List.vue'
import LoadMore from '../pages/LoadMore.vue'
import Msg from '../pages/Msg.vue'
import MsgSuccess from '../pages/msg/Success.vue'
import MsgText from '../pages/msg/Text.vue'
import MsgTextPrimary from '../pages/msg/TextPrimary.vue'
import MsgWarn from '../pages/msg/Warn.vue'
import NavBar from '../pages/NavBar.vue'
import Panel from '../pages/Panel.vue'
import Picker from '../pages/Picker.vue'
import Preview from '../pages/Preview.vue'
import Progress from '../pages/Progress.vue'
import SearchBar from '../pages/SearchBar.vue'
import Slider from '../pages/Slider.vue'
import Tabbar from '../pages/Tabbar.vue'
import Toast from '../pages/Toast.vue'
import TopTips from '../pages/TopTips.vue'
import Uploader from '../pages/Uploader.vue'

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/home', redirect: '/' },
    { path: '/', component: Home },
    { path: '/actionsheet', component: ActionSheet },
    { path: '/article', component: Article },
    { path: '/badge', component: Badge },
    { path: '/button', component: Button },
    { path: '/dialog', component: Dialog },
    { path: '/flex', component: Flex },
    { path: '/footer', component: Footer },
    { path: '/form', component: Form },
    { path: '/form_checkbox', component: FormCheckbox },
    { path: '/form_input_status', component: FormInputStatus },
    { path: '/form_page', component: FormPage },
    { path: '/form_radio', component: FormRadio },
    { path: '/form_select_primary', component: FormSelectPrimary },
    { path: '/form_switch', component: FormSwitch },
    { path: '/form_textarea', component: FormTextarea },
    { path: '/form_vcode', component: FormVcode },
    { path: '/half-screen-dialog', component: HalfScreenDialog },
    { path: '/gallery', component: Gallery },
    { path: '/grid', component: Grid },
    { path: '/icons', component: Icons },
    { path: '/list', component: List },
    { path: '/loadmore', component: LoadMore },
    { path: '/msg', component: Msg },
    { path: '/msg_success', component: MsgSuccess },
    { path: '/msg_text', component: MsgText },
    { path: '/msg_text_primary', component: MsgTextPrimary },
    { path: '/msg_warn', component: MsgWarn },
    { path: '/navbar', component: NavBar },
    { path: '/picker', component: Picker },
    { path: '/panel', component: Panel },
    { path: '/preview', component: Preview },
    { path: '/progress', component: Progress },
    { path: '/searchbar', component: SearchBar },
    { path: '/slider', component: Slider },
    { path: '/tabbar', component: Tabbar },
    { path: '/toast', component: Toast },
    { path: '/top-tips', component: TopTips },
    { path: '/uploader', component: Uploader }
  ]
})

export default router
