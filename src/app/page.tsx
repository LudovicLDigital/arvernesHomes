'use client';
import { ConfigProvider, notification } from 'antd';
import { useCallback, useEffect } from 'react';
import styles from './page.module.css';
import DataSection from '@/app/components/DataSection/DataSection';
import BannerSection from '@/app/components/BannerSection/BannerSection';
import ServiceSection from '@/app/components/ServiceSection/ServiceSection';
import PropertiesSection from '@/app/components/PropertiesSection/PropertiesSection';
import SocietySection from '@/app/components/SocietySection/SocietySection';

export default function Home() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = useCallback(() => {
    const placement = 'topLeft';
    api.info({
      message: `En ce moment pour l'ouverture !`,
      description:
        "Pour l'ouverture d'Arvernes Homes, nous vous offrons les frais de démarrage ( facturé 300€ ) !",
      placement,
      duration: 8,
    });
  }, [api]);

  useEffect(() => {
    openNotification();
  }, [openNotification]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#43A047',
        },
      }}
    >
      <main className={styles.main}>
        {contextHolder}
        <BannerSection />
        <DataSection />
        <SocietySection />
        <ServiceSection />
        <PropertiesSection />
      </main>
    </ConfigProvider>
  );
}
