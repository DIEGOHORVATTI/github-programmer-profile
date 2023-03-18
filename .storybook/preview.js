import { addParameters } from '@storybook/react'
// import GloablStyle from 'styles/global-style'
import theme from './theme'

addParameters({
  options: {
    theme
  }
})

export const decorators = [(Story) => <Story />]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
