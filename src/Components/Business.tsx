import { features } from '../Constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    Cards
  </div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    Business
  </section>
)

export default Business
