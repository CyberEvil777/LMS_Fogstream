import React from 'react';
import { AppProps } from 'next/app';

import '@fontsource/inter';
import '@fontsource/raleway/800.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
