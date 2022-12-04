import { DashboardLayout } from '../layouts/dashboard/Dashboard'

export default {
  title: 'Layouts/Dashboard',
  Component: DashboardLayout,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    linkSide: { control: 'array' },
    linkNav: { control: 'array' }
  }
}

const Template = (args) => <DashboardLayout {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'dashboard',
  logo: 'quanbu.jpg',
  linkSide: ['Home', 'User', 'Product', 'Order', 'About', 'Contact'],
  linkNav: ['Home', 'About', 'Contact'],
  backgroundColor: '#f5f5f5'
}
