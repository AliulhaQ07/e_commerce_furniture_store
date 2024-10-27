import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import SearchBar from "../components/SearchBar.jsx";
import SocialIcons from "../components/SocialIcons.jsx";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path = "/SearchBar" >
      <SearchBar />
    </ComponentPreview >
    <ComponentPreview path = "/SocialIcons" >
      <SocialIcons />
    </ComponentPreview >
  </Previews>;
};

export default ComponentPreviews;
