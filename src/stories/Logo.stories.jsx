import { Logo } from '../components/logo/Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Logo {...args} />
export const Default = Template.bind({})

Default.args = {
  logo: 'quanbu.jpg'
}
