import { Footer } from '../layouts/footer/Footer'

export default {
  title: 'Layouts/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    linkNav: { control: 'array' }
  }
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {
  logo: 'quanbu.jpg',
  linkNav: ['Home', 'About', 'Contact']
}
