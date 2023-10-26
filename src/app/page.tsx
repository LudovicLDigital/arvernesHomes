'use client';
import styles from './page.module.css'
import { ConfigProvider } from 'antd';
import DataSection from "@/app/components/DataSection/DataSection";
import BannerSection from "@/app/components/BannerSection/BannerSection";

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
                <BannerSection />
                <DataSection />
            </main>
        </ConfigProvider>
  )
}
