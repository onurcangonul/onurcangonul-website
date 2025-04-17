import About from "@/components/About";
import MyProject from "@/components/MyProjects";
import MyExperience from "@/components/MyExperience";
import PersonalAppProject from "@/components/MyProjects/PersonalAppProject";
import Introduction from "@/components/Introduction";

const Home = () => {
  return (
    <main>
      <Introduction />
      <About />
      <MyProject />
      <PersonalAppProject />
      <MyExperience />
    </main>
  );
};

export default Home;
