import images from "../../assets/images/images";
import "./fixtures.scss"

export default function ListFixtures() {
  return (
    <section id="fixtures" className="Fixtures">
      <img src={images.table} alt="Fixtures Table" />
    </section>
  );
}
