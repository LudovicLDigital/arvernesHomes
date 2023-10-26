import styles from "./datasection.module.css";
import global from "@/app/page.module.css";
import WipHome from "@/app/components/wipHome/WipHome";

export default function DataSection() {
    return (
        <div className={`${global.center} ${styles.dataSection}`}>
            <WipHome />
        </div>
    )
}
