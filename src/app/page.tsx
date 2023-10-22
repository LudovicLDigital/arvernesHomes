import Image from 'next/image'
import styles from './page.module.css'
import { Button, ConfigProvider } from 'antd';

export default function Home() {
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#43A047',
              },
          }}
      >
            <main className={styles.main}>
              <div className={styles.center}>
                <Image
                  className={styles.logo}
                  src="/logo.png"
                  alt="Arvernes Homes Logo"
                  width={180}
                  height={180}
                  priority
                />
                  <p className={styles.description}>
                      🚧Site en construction
                  </p>
              </div>
              <div className={styles.grid}>
                  <Button type="primary">Nous contacter</Button>
              </div>
            </main>
        </ConfigProvider>
  )
}
