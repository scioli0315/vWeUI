import { App } from 'vue'

import ActionSheet from './components/ActionSheet'
import Agree from './components/Agree'
import Article from './components/Article'
import Badge from './components/Badge'
import Button from './components/Button'
import Cell from './components/Cell'
import CellGroup from './components/CellGroup'
import Checkbox from './components/Checkbox'
import DatePicker from './components/DatePicker'
import Dialog from './components/Dialog'
import Divider from './components/Divider'
import Flex from './components/Flex'
import FlexItem from './components/FlexItem'
import Footer from './components/Footer'
import FooterLink from './components/FooterLink'
import Form from './components/Form'
import Gallery from './components/Gallery'
import Grid from './components/Grid'
import GridItem from './components/GridItem'
import HalfScreenDialog from './components/HalfScreenDialog'
import Icon from './components/Icon'
import Loading from './components/Loading'
import LoadMore from './components/LoadMore'
import Msg from './components/Msg'
import Navbar from './components/Navbar'
import NavBarItem from './components/NavBarItem'
import Panel from './components/Panel'
import PanelGroup from './components/PanelGroup'
import PanelMeta from './components/PanelMeta'
import Picker from './components/Picker'
import Preview from './components/Preview'
import PreviewItem from './components/PreviewItem'
import Progress from './components/Progress'
import Radio from './components/Radio'
import SearchBar from './components/SearchBar'
import Select from './components/Select'
import Slider from './components/Slider'
import Switch from './components/Switch'
import Tabbar from './components/Tabbar'
import TabbarItem from './components/TabbarItem'
import TextArea from './components/TextArea'
import Toast from './components/Toast'
import TopTips from './components/TopTips'
import Uploader from './components/Uploader'
import VInput from './components/VInput'

const components = [
  ActionSheet,
  Agree,
  Article,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  DatePicker,
  Dialog,
  Divider,
  Flex,
  FlexItem,
  Footer,
  FooterLink,
  Form,
  Gallery,
  Grid,
  GridItem,
  HalfScreenDialog,
  Icon,
  Loading,
  LoadMore,
  Msg,
  Navbar,
  NavBarItem,
  Panel,
  PanelGroup,
  PanelMeta,
  Picker,
  Preview,
  PreviewItem,
  Progress,
  Radio,
  SearchBar,
  Select,
  Slider,
  Switch,
  Tabbar,
  TabbarItem,
  TextArea,
  TopTips,
  Uploader,
  VInput
]

function install(app: App) {
  if ((install as any).installed) return
  ;(install as any).installed = true

  app.config.globalProperties.$toast = Toast

  components.forEach((c) => {
    app.component(c.name as string, c)
  })
}

export {
  ActionSheet,
  Agree,
  Article,
  Badge,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  DatePicker,
  Dialog,
  Divider,
  Flex,
  FlexItem,
  Footer,
  FooterLink,
  Form,
  Gallery,
  Grid,
  GridItem,
  HalfScreenDialog,
  Icon,
  Loading,
  LoadMore,
  Msg,
  Navbar,
  NavBarItem,
  Panel,
  PanelGroup,
  PanelMeta,
  Picker,
  Preview,
  PreviewItem,
  Progress,
  Radio,
  SearchBar,
  Select,
  Slider,
  Switch,
  Tabbar,
  TabbarItem,
  TextArea,
  Toast,
  TopTips,
  Uploader,
  VInput
}

export default {
  install
}
