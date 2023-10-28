import styles from "./datasection.module.css";
import global from "@/app/page.module.css";
import {Badge, Col, theme, Row} from "antd";
import {StarFilled} from "@ant-design/icons";
import {Bubble, homeData} from "@/app/datas/HomeData";

const { useToken } = theme;
type BubbleProps = {
    bubble: Bubble
}

function Bubble(props: BubbleProps) {
    const { bubble } = props;
    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
                {bubble.star && <StarFilled />}
                <p>{bubble.text}</p>
            </div>
            <span className={styles.bubbleLegend}>{bubble.legend}</span>
        </div>
    )
}
export default function DataSection() {
    const { token } = useToken();

    return (
        <div className={`${global.center} ${styles.dataSection}`}>
            <div className={`${global.card} ${styles.cardContainer}`}>
                <div className={`${styles.cardDisplayer}`}>
                    <div className={styles.left}>
                        <h3 className={styles.titles}>{homeData.leftTitle}</h3>
                        <h5 className={styles.subTitle}>{homeData.leftSubtitle}</h5>
                        <div className={styles.lcdPart}>
                            <div className={styles.revenusContainer}>
                                <p>{homeData.classicRentTitle}</p>
                                <span >{homeData.classicRentValue} € / Mois</span>
                                <p>{homeData.lcdRentTitle}</p>
                                <span style={{
                                    color: token.colorPrimary
                                }}>
                                    {homeData.lcdRentValue} € / Mois
                                </span>
                                <p>{homeData.highestMonthRevenueTitle}
                                    <span style={{
                                        color: token.colorPrimary
                                    }}>
                                        {homeData.highestMonthRevenueValue} €
                                    </span>
                                </p>
                                <p>{homeData.lowestMonthRevenueTitle}
                                    <span style={{
                                    color: token.colorPrimary
                                    }}>
                                        {homeData.lowestMonthRevenueValue} €
                                    </span>
                                </p>
                            </div>
                            <div className={styles.advantagesContainer}>
                                <p>{homeData.advantageTitle}</p>
                                {homeData.advantage.map((advantage, index) => (
                                    <Badge color={token.colorPrimary} className={styles.badges} key={index} text={advantage}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.right}>
                        <h3 className={styles.titles}>{homeData.rightSideTitle}</h3>
                        <Row justify={"space-between"} >
                            {homeData.bubbles.slice(0, 3).map((bubble, index) => (
                                <Col key={index} span={8}>
                                    <Bubble key={index} bubble={bubble} />
                                </Col>
                            ))}
                        </Row>
                        <Row justify={"center"} className={styles.comRow}>
                            <Col  span={16}>
                                <Bubble bubble={homeData.bubbles[3]} />
                            </Col>
                        </Row>
                    </div>
                </div>
                <p className={styles.sourceText}>
                    {homeData.dataSourceText}
                </p>
            </div>
        </div>
    )
}
