'use client';
import styles from './page.module.css'
import { ConfigProvider } from 'antd';
import WipHome from "@/app/components/WipHome";

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
                <WipHome />
            </main>
        </ConfigProvider>
  )
}
