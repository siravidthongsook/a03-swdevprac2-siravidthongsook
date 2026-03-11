import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <Banner />
        </section>

        <section className={styles.listingSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Featured Venue</p>
            <h2>Elegant spaces for weddings, launches, and private gatherings</h2>
          </div>

           <div className={styles.cardRow}>
             <Card
               venueName="The Sunbeam Pavilion"
               description="A sunlit garden hall where long wooden tables, hanging lights, and cascading greenery create an intimate setting for a warm, elegant gathering."
               imageSrc="/image1.jpg"
               imageAlt="The Sunbeam Pavilion"
             />
           </div>
        </section>
      </main>
    </div>
  );
}
