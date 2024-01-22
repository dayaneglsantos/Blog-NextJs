import loadPosts from '../../Api/load-posts'
import BaseTemplate from '../../Templates/BaseTemplate'
import { Container } from './styles'

const About = async () => {
  const data = await loadPosts()
  return (
    <BaseTemplate settings={data.setting}>
      <Container>
        <h3>Our story</h3>
        <p>
          Morbi auctor finibus justo, et sollicitudin mi mollis nec. Sed purus
          dolor, dictum nec iaculis ac, scelerisque eget velit. Vivamus posuere
          molestie lorem, ut elementum felis scelerisque gravida. Curabitur
          sagittis, mauris eget facilisis sagittis, enim massa finibus est, eu
          lobortis tortor justo in est. Duis cursus sit amet libero sit amet
          molestie. Maecenas id est accumsan, vulputate tortor non, molestie
          ligula. Ut efficitur, ante eu vestibulum mattis, elit ligula auctor
          ante, ut vulputate tortor tortor eu nibh. Quisque vulputate aliquam
          tempor. Duis justo quam, blandit non semper eu, malesuada vel tellus.
          Fusce iaculis cursus velit, quis dictum purus.
        </p>

        <p>
          Cras rutrum ut ex ac laoreet. Suspendisse consectetur dolor id erat
          hendrerit, id porta ligula lobortis. Fusce tortor lorem, ullamcorper a
          rutrum eu, ultricies nec eros. Fusce aliquam cursus tellus at
          interdum. Pellentesque nec felis fringilla, ullamcorper risus eget,
          suscipit orci. Aliquam posuere eleifend lorem eget commodo. Nunc odio
          mi, gravida a sapien dapibus, consequat feugiat massa.
        </p>
      </Container>
    </BaseTemplate>
  )
}

export default About
