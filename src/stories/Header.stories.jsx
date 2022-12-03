import { Header } from '../components/header/Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
