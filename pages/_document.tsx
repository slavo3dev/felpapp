import Document, {
	Html,
	Head,
	Main,
	NextScript, } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/felpapp.svg" />
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.x}', {
                                    page_path: window.location.pathname,
                                    });
                                `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="notifications"></div>
				</body>
			</Html>
		);
	}
}