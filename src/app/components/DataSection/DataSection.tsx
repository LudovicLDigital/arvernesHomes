import styles from "./datasection.module.css";
import global from "@/app/page.module.css";
import {Badge, Divider} from "antd";
import {StarFilled} from "@ant-design/icons";

export default function DataSection() {
    const advantages = [
        "Ménage régulier garantissant un logement de qualité",
        "Interventions rapide sur les petites réparations et besoin de maintenance",
        "Aucun risque d’impayés"
    ];
    const bubbles = [
        {
            star: true,
            text: "4,83",
            legend: "Airbnb"
        },
        {
            star: false,
            text: "86 %",
            legend: "d’occupation"
        },
        {
            star: true,
            text: "9,4",
            legend: "Booking"
        },
        {
            star: false,
            text: "25 %",
            legend: "De commission ( hors ménage )"
        }
    ]
    return (
        <div className={`${global.center} ${styles.dataSection}`}>
            <div className={`${global.card} ${styles.cardDisplayer}`}>
                <div>
                    <h3 className={styles.titles}>Maximiser vos gains avec la location courte durée</h3>
                    <h5 className={styles.subTitle}>Pour un T2 de 30m2 :</h5>
                    <div className={styles.lcdPart}>
                        <div className={styles.revenusContainer}>
                            <p>Location Meublé Classique : </p>
                            <span>500 € / Mois</span>
                            <p>Location Courte Durée :</p>
                            <span>1236 € / Mois</span>
                            <p>Le mois le plus rentable : Août 2023 avec <span>1970 €</span></p>
                            <p>Et le moins rentable : Février 2023 avec <span>702 €</span></p>
                        </div>
                        <div className={styles.advantagesContainer}>
                            <p>Les avantages : </p>
                            {advantages.map((advantage, index) => (
                                <Badge key={index} color={`var(--primary)`} text={advantage}/>
                            ))}
                        </div>
                    </div>
                </div>
                <Divider type="vertical" />
                <div>
                    <h3 className={styles.titles}>Nos prestations ?</h3>
                    <div className={styles.bubbles}>
                        {bubbles.map((bubble, index) => (
                            <div key={index}>
                                <div className={styles.bubble}>
                                    {bubble.star && <StarFilled />}
                                    <p>{bubble.text}</p>
                                </div>
                                <span className={styles.bubbleLegend}>{bubble.legend}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
