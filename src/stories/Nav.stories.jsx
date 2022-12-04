import { Nav } from '../components/navigator/Nav'
export default {
  title: 'Components/Navigate',
  component: Nav,

  argTypes: {
    backgroundColor: { control: 'color' }
  }

}

const Template = (args) => <Nav {...args} />

export const Navigation = Template.bind({})

Navigation.args = {
  primary: true,
  link: ['Home', 'About', 'Contact'],
  logo: 'quanbu.jpg'
}
