import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { SITE_FOOTER_ID, SITE_HEADER_ID, SITE_MAIN_ID } from '~/utils/constants'
import {
  AppFooter,
  AppHeader,
  AppLoader,
  AppNavDrawer,
  AppSkipLink,
  AppExitPreview,
} from './partials'

const AppRoot = styled('div', {
  name: 'App',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

const AppMain = styled('main', {
  name: 'App',
  slot: 'Main',
})({
  flexGrow: 1,
  outline: 0, // Disable focus ring as `main` is focusable via "Skip Link".
})

function App(props) {
  const { children, disableFooter, disableHeader, headerColor, headerMode, preview } = props

  return (
    <AppRoot>
      <AppSkipLink href={`#${SITE_MAIN_ID}`} />

      {!disableHeader && (
        <AppHeader headerColor={headerColor} headerMode={headerMode} id={SITE_HEADER_ID} />
      )}

      <AppMain id={SITE_MAIN_ID} role="main" tabIndex="-1">
        {children}
      </AppMain>

      {!disableFooter && <AppFooter id={SITE_FOOTER_ID} />}

      <AppNavDrawer />
      <AppLoader />

      {preview && <AppExitPreview />}


    </AppRoot>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  disableFooter: PropTypes.bool,
  disableHeader: PropTypes.bool,
  headerColor: PropTypes.string,
  headerMode: PropTypes.string,
  preview: PropTypes.bool,
}

export default App
