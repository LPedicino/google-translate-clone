import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Container, Button, Row, Col } from 'react-bootstrap'

import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'


function App() {

  const {fromLanguage, toLanguage, interchangeLanguages, setToLanguage, setFromLanguage} = useStore()

  return (
      <Container fluid>
        <h1>Google Translate</h1>
        
        <Row>
          <Col>
          <LanguageSelector onChange={setFromLanguage}/>
          </Col>

        
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
          </Col>


          <Col>
          <LanguageSelector onChange={setToLanguage} />
          </Col>


        </Row>
      </Container>
  )
}

export default App
