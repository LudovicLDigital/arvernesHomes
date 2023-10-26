import styles from "@/app/page.module.css";
import Image from "next/image";
import {Button} from "antd";

export default function WipHome() {

    return (
        <div className={styles.center}>
            <div className={styles.card}>
                <Image
                    className={styles.logo}
                    src="/logo.png"
                    alt="Arvernes Homes Logo"
                    width={180}
                    height={180}
                    priority
                    unoptimized={true}
                />
                <p className={styles.description}>
                    🚧Site en construction
                </p>
            </div>
            <div className={styles.center}>
                <Button type="primary">
                    <a href={'mailto:ludovic.laurichesse@arverneshomes.fr?subject=Demande de contact'}>Nous contacter</a>
                </Button>
            </div>
        </div>
    )
}
