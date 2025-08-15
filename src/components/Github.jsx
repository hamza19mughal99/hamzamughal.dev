import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";
import { textVariant } from '../utils/motion';
import GitHubHeatmap from './GitHubHeatmap';

const Github = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Github</p>
                <h2 className={styles.sectionHeadText}>Contributions</h2>
            </motion.div>

            <div>
                <GitHubHeatmap username="hamza19mughal99" year={2024} />
            </div>
        </>
    )
}

export default SectionWrapper(Github, "github");