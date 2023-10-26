import styles from "./bannersection.module.css";
import global from "@/app/page.module.css";
import Image from "next/image";

export default function BannerSection() {
    return (
        <div className={`${global.center} ${styles.bannerSection}`}>
            <div className={`${global.center} ${global.card} ${styles.logo}`}>
                <Image
                    src="/logo.png"
                    alt="Arvernes Homes Logo"
                    width={180}
                    height={180}
                    priority
                    unoptimized={true}
                />
            </div>
        </div>
    )
}
