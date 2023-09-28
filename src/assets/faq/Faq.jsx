import {useState} from 'react'
import faqData from './faq-data'
import styles from './Faq.module.css'
const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
      setExpandedIndex(index);
  }
  const 
  
  handleMouseLeave = () => {
    setExpandedIndex(null);
  };
  return (
    <div className={styles.container}>
      <ul>
        {faqData.map((faqItem, index) => (
          <div className={styles.items} key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
           <div className={styles.questionContainer}> <p className={styles.question}>Q: {faqItem.question}</p> </div> 
            {expandedIndex === index && <div className={styles.anwserContainer}><p className={styles.answer}>A: {faqItem.answer}</p></div> }
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Faq