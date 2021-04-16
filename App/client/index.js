import './styles/style.scss'
import './assets/favicon/android-chrome-192x192.png'
import './assets/favicon/android-chrome-512x512.png'
import './assets/favicon/apple-touch-icon.png'
import './assets/favicon/favicon-16x16.png'
import './assets/favicon/favicon-32x32.png'
import './assets/favicon/favicon.ico'
// import './assets/favicon/site.webmanifest'

import {nplAPIUsage} from './src/meaningCloudAPI'
import {handleSubmit} from './src/handleSubmit'
import {updateUI} from './src/updateUI'

export {
    handleSubmit,
    nplAPIUsage,
    updateUI
}