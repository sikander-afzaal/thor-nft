import React from "react";
import thor from "../../assets/characters/thor.jpeg";
import heimdall from "../../assets/characters/heimdall.jpeg";
import odin from "../../assets/characters/odin.jpeg";
import freya from "../../assets/characters/freya.jpeg";
import NftCard from "../../components/NftCard/NftCard";
import Fade from "react-reveal/Fade";
function Character() {
  return (
    <div id="collection" className="character">
      <Fade cascade top>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div>
          <h1>The Gods of Asgard</h1>
        </div>
      </Fade>
      <Fade top delay={400}>
        <p>
          The God of Asgard are NFTs from our upcoming collection minting May
          1st. Each God is equipped with their own unique skills and story. The
          NFTs act as your playable character and key to entering in this
          universe
        </p>
      </Fade>
      <div className="wrapper-grid">
        <Fade delay={200} bottom>
          <NftCard
            img={heimdall}
            desc={`The watchman of the gods and guardian of the Bifrost; Heimdall,
            defends the rainbow bridge that connects all nine realms together.
            He is gifted with the power of prescience; a divine capacity of
            foresight, allowing him to see and hear across all realms, both
            mortal and god alike. He wields, Hofund, a sword with the ability to
            draw energy from other magical entities that exist within the
            universe.`}
          />
        </Fade>
        <Fade delay={400} bottom>
          <NftCard
            img={freya}
            desc={`Queen of the Valkyries and goddess of love and war, Freya, is
            equipped with her sword, shield, and magical bow. Blessed by magical
            forces, she leads her fearless Valkyries into battle; the entheat &
            powerful league of goddesses, who form her royal guard`}
          />
        </Fade>
        <Fade delay={600} bottom>
          <NftCard
            img={thor}
            desc={`Son of, Odin, and the god of thunder, Thor, wields his mystical
            hammer, Mjolnir. He is equipped with his belt, Megingjord, bestowing
            him with increased strength and governance over the powerful element
            of lightning.`}
          />
        </Fade>
        <Fade delay={800} bottom>
          <NftCard
            img={odin}
            desc={`The great & powerful all father and king of Asgard. Odin is the
            strongest, fiercest, and most wise of all the Gods in all the nine
            realms. Equipped with his magical spear, Gungnir, he is ever ready
            to bring order to the universe; fighting side by side with his
            comrades to restore peace and prosperity to its lands.`}
          />
        </Fade>
      </div>
    </div>
  );
}

export default Character;
