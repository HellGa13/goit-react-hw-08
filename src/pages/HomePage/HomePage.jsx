import PageTitle from "../../components/PageTitle/PageTitle";
import style from "./HomePage.module.css";


export default function HomePage() {
  return (
    <div className={style.cont}>
      <PageTitle>Welcome to Your Personal Contact Hub!{" "}
        <span role="img" aria-label="Greeting icon">
        🙋‍♀️
        </span>
      </PageTitle>
      <p>Stay connected with the people who matter most. Easily organize, access, and manage your personal and professional contacts in one convenient place. Whether it's friends, family, or colleagues, your digital address book keeps everything within reach.</p>
    </div>
  );
}