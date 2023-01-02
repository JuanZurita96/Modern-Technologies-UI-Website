import styles from '../style'
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Transactions,
  CardDeal,
  ClientFeedBack,
  Clients,
  Information,
  Footer,
} from '../Components'

const AppContainer = () => (
  <>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Transactions />
        <CardDeal />
        <ClientFeedBack />
        <Clients />
        <Information />
        <Footer />
      </div>
    </div>
  </>
)
export default AppContainer
