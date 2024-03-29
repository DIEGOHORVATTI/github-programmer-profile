// routes
import { PATH_DASHBOARD } from '@Routes/paths'
import { Icon } from '@iconify/react'
import Label from '@Components/Label'

const ICONS = {
  home: <Icon icon="material-symbols:home" />,
  blog: <Icon icon="brandico:blogger-rect" />,
  cart: <Icon icon="ic:baseline-shopping-cart" />,
  chat: <Icon icon="material-symbols:chat" />,
  mail: <Icon icon="material-symbols:mail" />,
  user: <Icon icon="mdi:user-circle" />,
  kanban: <Icon icon="material-symbols:view-kanban-rounded" />,
  banking: <Icon icon="mdi:bank" />,
  calendar: <Icon icon="material-symbols:calendar-month-rounded" />,
  ecommerce: <Icon icon="material-symbols:shopping-bag" />,
  analytics: <Icon icon="material-symbols:analytics" />,
  dashboard: <Icon icon="material-symbols:dashboard" />,
  booking: <Icon icon="mdi:calendar-badge" />,
  frota: <Icon icon="ic:baseline-directions-car-filled" />
}

const navConfig = [
  // GENERAL
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard
      },
      {
        title: 'e-commerce',
        path: PATH_DASHBOARD.general.ecommerce,
        icon: ICONS.ecommerce
      },
      {
        title: 'analytics',
        path: PATH_DASHBOARD.general.analytics,
        icon: ICONS.analytics
      },
      {
        title: 'banking',
        path: PATH_DASHBOARD.general.banking,
        icon: ICONS.banking
      },
      {
        title: 'booking',
        path: PATH_DASHBOARD.general.booking,
        icon: ICONS.booking
      },
      {
        title: 'frota',
        path: PATH_DASHBOARD.general.frota,
        icon: ICONS.frota
      }
    ]
  },

  // MANAGEMENT
  {
    subheader: 'management',
    items: [
      // MANAGEMENT : USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'profile', path: PATH_DASHBOARD.user.profile },
          { title: 'cards', path: PATH_DASHBOARD.user.cards },
          { title: 'list', path: PATH_DASHBOARD.user.list },
          { title: 'create', path: PATH_DASHBOARD.user.newUser },
          { title: 'edit', path: PATH_DASHBOARD.user.editById },
          { title: 'account', path: PATH_DASHBOARD.user.account }
        ]
      },

      // MANAGEMENT : E-COMMERCE
      {
        title: 'e-commerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
          { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
          { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
          { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice }
        ]
      },

      // MANAGEMENT : BLOG
      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'post', path: PATH_DASHBOARD.blog.postById },
          { title: 'new post', path: PATH_DASHBOARD.blog.newPost }
        ]
      }
    ]
  },

  // APP
  {
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: (
          <Label variant="outlined" color="error">
            +32
          </Label>
        )
      },
      { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      {
        title: 'calendar',
        path: PATH_DASHBOARD.calendar,
        icon: ICONS.calendar
      },
      {
        title: 'kanban',
        path: PATH_DASHBOARD.kanban,
        icon: ICONS.kanban
      }
    ]
  }
]

export default navConfig
