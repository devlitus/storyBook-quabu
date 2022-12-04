import { Header } from '../layouts/header'

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
  logo: 'quanbu.jpg'
}
