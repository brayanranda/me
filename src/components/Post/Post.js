import data from "../../data/data.json";
import PostDescription from "../PostDescription/PostDescription";
import PostSlider from "../PostSlider/PostSlider";

export default function Post() {
  return (
    <main className="pb-12">
      <PostSlider/>
      <PostDescription/>
    </main>
  );
}
