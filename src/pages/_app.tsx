import '../styles/global.scss';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
