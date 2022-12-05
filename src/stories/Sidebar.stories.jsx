import { Sidebar } from '../layouts/sidebar/Sidebar'
export default {
  title: 'Layouts/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    linkSide: { control: 'array' }
  }
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  linkSide: ['Home', 'User', 'Product', 'Order', 'About', 'Contact'],
  backgroundColor: '#f5f5f5',
  textColor: '#000000'
}
