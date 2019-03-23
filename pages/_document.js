import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyCustomDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags } // return styles collected
	}

	render () {
		return (
		<html>
			<Head>
			{this.props.styleTags}
			<link rel="icon" type="image/x-icon" href='https://upload.wikimedia.org/wikipedia/it/7/7a/Giuseppe_Fanin.jpg' />
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</html>
		)
	}
}
