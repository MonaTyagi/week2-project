import ArticleCard from "../components/ArticleCard";

export default function MainContent() {
  return (
    <div>
      <h1>This is the MainContent page</h1>
      <p>
        <ArticleCard
          title="First article"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, lacus vitae consectetur consequat, risus ipsum auctor nibh, non gravida nibh dui congue leo. Phasellus tempus nulla a elit aliquet, a gravida dolor varius. Etiam non ligula sed erat ornare condimentum vitae ut purus. Fusce ac maximus turpis. Donec eget sollicitudin dolor. Aliquam tempor varius vulputate. Quisque nec arcu ex. Integer cursus, ligula sit amet ornare dictum, eros est facilisis mi, in suscipit libero orci ac dolor. Nunc laoreet, justo sed aliquam vestibulum, neque mi viverra odio, at pretium ante sem at erat. Mauris auctor egestas vehicula."
        />
        <ArticleCard
          title="Second article"
          text="Etiam at libero vitae nulla dignissim egestas et id odio. Duis efficitur erat et nibh tempor ultrices. Nullam ut lacus magna. Phasellus rhoncus lobortis purus vel tempor. Aenean quis malesuada orci, vitae luctus felis. Suspendisse euismod mauris a enim blandit lacinia. Vestibulum sodales eget arcu non vulputate. Donec turpis dui, pharetra quis purus ut, faucibus mollis quam. Vestibulum at purus vehicula, cursus lectus a, accumsan elit. Fusce cursus mi nec mi condimentum, at lobortis tortor gravida."
        />
        <ArticleCard
          title="Third article"
          text="Integer posuere, augue et interdum egestas, augue quam imperdiet sapien, vitae maximus mi arcu eu mauris. Mauris sit amet accumsan sem. Nulla auctor lacus eu nisi luctus, sed dignissim nisl porttitor. Suspendisse fermentum convallis mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer a justo id nunc accumsan mollis. Maecenas lacinia dignissim nibh, quis sollicitudin lectus pellentesque at. Ut eleifend suscipit laoreet."
        />
        <ArticleCard
          title="Fourth article"
          text="Aliquam vel pulvinar justo. In sollicitudin urna id rhoncus porta. Fusce interdum ut arcu sit amet sollicitudin. Sed dapibus felis id sapien molestie commodo ac vitae quam. Vivamus nec sem sed arcu aliquet sodales. Mauris gravida metus nec magna finibus, ac dignissim nunc venenatis. Cras sed tincidunt est. Aenean vel sapien magna. Ut diam nibh, mollis eu urna eget, vehicula mollis ipsum. Praesent malesuada dui nisi, ac imperdiet nunc finibus ac. Ut dictum rhoncus lacus at ornare. Aliquam lobortis ac arcu sit amet condimentum. Praesent elementum vitae orci ut aliquet. Fusce at dignissim nulla."
        />
        <ArticleCard
          title="Last article"
          text="Aliquam consectetur sodales sem fermentum cursus. Nulla ac tempus lectus, ac varius ipsum. Duis tortor mi, consequat non venenatis nec, auctor et lectus. Integer egestas ut urna ut commodo. Suspendisse commodo lorem sed odio luctus finibus. Duis feugiat scelerisque ligula. Mauris tincidunt sem at sapien fermentum efficitur. Vivamus feugiat quis quam nec iaculis. In placerat neque elementum urna porttitor, vel faucibus tortor efficitur."
        />
      </p>
    </div>
  );
}
