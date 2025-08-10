import { Icon } from "@iconify/react/dist/iconify.js"
import chefClaudeLogo from "../assets/chef-claude-icon.png"

function Header() {

  return (
    <header>
      {/* <img src={chefClaudeLogo} alt="Chef Claude Logo" /> */}
      <Icon icon="streamline-ultimate-color:chef-gear-gloves" width="45" height="45" />
      <h1>Recipe Maker</h1>
    </header>
  )

}

export default Header