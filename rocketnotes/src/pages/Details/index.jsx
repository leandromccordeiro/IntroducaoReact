
import { Container, Links} from './styles.js'

import { Header } from '../../componets/Header/index.jsx'
import { Button } from '../../componets/Button/index.jsx'
import { Section } from '../../componets/Section/index.jsx'

export function Details() {
  
  return(
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https:\\google.com.br</a></li>
          <li><a href="#">https:\\rocketseat.com.br</a></li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>

  )
} 