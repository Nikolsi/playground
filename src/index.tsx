import * as ReactDOM from 'react-dom'
import { Playground } from './Playground'

// import styles
import '../assets/styles/main.scss'

// const self = window as any
// self.API_VERSION = process.env.API_VERSION
// self.YOUR_APP_ID = process.env.YOUR_APP_ID
// self.YOUR_APP_CODE = process.env.YOUR_APP_CODE
// self.YOUR_ACCESS_TOKEN = process.env.YOUR_ACCESS_TOKEN
// const buildType = process.env.BUILD_TYPE

// Use routing component a main entry point.
ReactDOM.render(Playground(), document.getElementById('playground-host') as HTMLElement)
