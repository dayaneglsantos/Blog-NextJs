import loadPosts from '../../Api/load-posts'
import BaseTemplate from '../../Templates/BaseTemplate'

import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { ContactContainer } from './styles'

const Contact = async () => {
  const data = await loadPosts()
  return (
    <BaseTemplate settings={data.setting}>
      <ContactContainer>
        <h3>Nossos contatos</h3>
        <p>Whatsapp: (61) 99999-9999</p>
        <p>Email: email@email.com</p>

        <div>
          <h3>Nos siga nas redes sociais</h3>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </ContactContainer>
    </BaseTemplate>
  )
}

export default Contact
