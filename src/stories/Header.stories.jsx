import { Header } from '../layouts/header/Header'

export default {
  title: 'Layouts/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  argsTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
  logo: 'quanbu.jpg',
  linkNav: ['Home', 'About', 'Contact'],
  backgroundColor: '#f5f5f5'
}
