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
				<link rel="icon" type="image/x-icon" href='static/favico.png' />
				<meta charset="UTF-8" />
				<meta name="description" content="Vita di Giuseppe Fanin" />
				<meta name="keywords" content="Guseppe, Fanin, Servo di Dio, Santo, San, Beato, Lorenzatico, Tassinara, Martire" />
				<meta name="author" content="Lorenzo Cazzoli" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</html>
		)
	}
}
