// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import 'prismjs/components/prism-elm';
import 'prismjs/themes/prism.css';
import Elm from 'react-elm-components';
import elmSource from '../example-app/dist/counter.js';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  elmSandbox: require('../assets/elm-sandbox.svg'),
  elmElement: require('../assets/elm-element.svg'),
  elmLogo: require('../assets/elm-logo.svg'),
  sandbox1: require('../assets/sandbox-1.svg'),
  sandbox2: require('../assets/sandbox-2.svg'),
  sandbox3: require('../assets/sandbox-3.svg'),
  sandbox4: require('../assets/sandbox-4.svg'),
  sandbox5: require('../assets/sandbox-5.svg'),
  sandbox6: require('../assets/sandbox-6.svg'),
  sandbox7: require('../assets/sandbox-7.svg'),
  element1: require('../assets/element-1.svg'),
  element2: require('../assets/element-2.svg'),
  element3: require('../assets/element-3.svg'),
  element4: require('../assets/element-4.svg'),
  element5: require('../assets/element-5.svg'),
  element6: require('../assets/element-6.svg'),
  element7: require('../assets/element-7.svg'),
  element8: require('../assets/element-8.svg'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#444951',
    tertiary: '#03A9FC',
    quaternary: '#60B5CC'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const styleComparison = {
  backgroundColor: '#EEEDEF',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '2px'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="quaternary">
          <Image src={images.elmLogo} style={{marginBottom: '2.2rem'}}/>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Introduction to elm
          </Heading>
        </Slide>
        <Slide bgColor="quaternary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary" style={{marginBottom: '2.2rem'}}>
              What is elm?
          </Heading>
          <Appear>
            <Text style={{marginBottom: '2.2rem'}} textColor="secondary" textAlign="left">
              A delightful language for reliable web apps
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary" textAlign="left">
              Generate Javascript with great performance and <b>no runtime exceptions</b>
            </Text>
          </Appear>
          <Appear>
            <div>
              <List>
                <ListItem>Functional language</ListItem>
                <ListItem>Statically typed + inference</ListItem>
                <ListItem>All data is immutable</ListItem>
                <ListItem>All functions are pure (no side effects)</ListItem>
                <ListItem>'null' / 'undefined' / Exceptions do not exist</ListItem>
              </List>
            </div>
          </Appear>
          <Notes>
            - Guarantees
            <br/>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <div style={{display: 'flex'}}>
            <div style={{flex: '1 1 0'}}>
              <Heading size={5} textColor="secondary" style={{marginBottom: '2rem'}}>
                Javascript
              </Heading>
              <div style={styleComparison}>npm</div>
              <div style={styleComparison}>Webpack</div>
              <div style={styleComparison}>React</div>
              <div style={styleComparison}>Redux</div>
              <div style={styleComparison}>Typescript</div>
              <div style={styleComparison}>Immutable.js</div>
            </div>
            <div style={{flex: '1 1 0', marginLeft: '3rem'}}>
              <Heading size={5} textColor="secondary" style={{marginBottom: '2rem'}}>
                elm
              </Heading>
              <Appear>
                <div>
                  <div style={styleComparison}>built in</div>
                  <div style={styleComparison}>built in</div>
                  <div style={styleComparison}>built in</div>
                  <div style={styleComparison}>built in</div>
                  <div style={styleComparison}>built in</div>
                  <div style={styleComparison}>built in</div>
                </div>
              </Appear>
            </div>
          </div>
          <Notes>
            - Mirror elm in JS, possible options
            <hr/>
            - Only one way to do all these things / structure code (elm architecture)
            <hr/>
            - They all work together nicely, maybe you have experienced pain points from integration JS stack together
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text textColor="secondary">
            Just because there are no exceptions does not mean you cant produce code that is <b>wrong</b>
          </Text>
          <Text textColor="secondary" style={{marginTop: '3rem'}}>
            <BlockQuote>"The sky is <span style={{color: 'green'}}>green</span>" vs "The sky is <span style={{color: 'red'}}>[TypeError: color is not a property of undefined]</span>"</BlockQuote>
          </Text>
          <Notes>
            - In elm you can write code that is wrong
            <hr/>
            - In JS you can write code that is broken
            <hr/>
            - Functional won't save you from semantic incorrectness but will save you from broken
            <hr/>
            - Could do this in plain JS with typescript and get the same benefit, but imperative code might be tempting under time pressure
          </Notes>
        </Slide>
        <Slide>
          <Heading size={4}>The Elm Architecture</Heading>
          <List>
            <ListItem>Pattern for creating applications</ListItem>
            <ListItem>Opinionated pattern, only way to structure applications</ListItem>
            <ListItem>Projects like redux have been inspired by it, ideas here might some familiar</ListItem>
            <ListItem>Separate concept form the core language, which is the basic types. e.g. ("hello" ++ "world")</ListItem>
          </List>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="elm"
          code={require('raw-loader!../example-app/src/Main-elm-arch.elm')}
          ranges={[
            { loc: [0, 5] },
            { loc: [5, 9], note: 'Initial Data Model'},
            { loc: [9, 15], note: 'Msg is like redux actions. Update contains all business logic' },
            { loc: [15, 18], note: 'Builds HTML. Set up messages (Msg) that might be triggered' }
          ]}>
          <Notes>
            - Blank assignments to get a feel for the architecture
          </Notes>
        </CodeSlide>
        <Slide>
          <Elm src={elmSource.Elm.Main}/>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="elm"
          code={require('raw-loader!../example-app/src/Counter.elm')}
          ranges={[
            { loc: [0, 3], note: 'Imports' },
            { loc: [4, 6], note: 'Sandbox is the most restrictive version of the Elm Architecture' },
            { loc: [7, 8], note: 'Union type definition. Like a ENUM'},
            { loc: [9, 17], note: 'Like redux actions'},
            { loc: [17, 24], note: '**view**, like update is just a function. Elm architecture calls view after Model change'},
          ]}/>
        <Slide>
          <div style={{display: 'flex'}}>
            <span>main = Browser.sandbox &#123;</span>
            <span style={{flex: '1 1 auto'}}>init</span>
            <span style={{flex: '1 1 auto'}}>update</span>
            <span style={{flex: '1 1 auto'}}>view</span>
            <span>&#125;</span>
          </div>
          <br/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox1} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox2} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox3} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox4} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox5} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox6} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Sandbox</Heading>
          <img src={images.sandbox7} style={{width: '100%'}}/>
        </Slide>
        <Slide>
          <Heading size={4}>How do you do side effects?</Heading>
          <List>
            <ListItem>HTTP</ListItem>
            <ListItem>Time</ListItem>
            <ListItem>DOM event commands</ListItem>
            <ListItem>Randomness e.g. Math.Random</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element1} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element2} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element3} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element4} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element5} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element6} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element7} style={{width: '100%'}}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'}>Browser.Element</Heading>
          <img src={images.element8} style={{width: '100%'}}/>
        </Slide>
        <Slide bgColor="quaternary" >
          <Heading textColor="primary">Things I have not worked out yet</Heading>
          <List>
            <ListItem>How and when to break a file into multiple modules. Interesting talk: <a href="https://www.youtube.com/watch?v=XpDsk374LDE">The life of a file</a></ListItem>
          </List>
        </Slide>
        <Slide bgColor="quaternary">
          <Heading textColor="primary">Resources</Heading>
          <List>
            <ListItem><a href={"https://www.youtube.com/watch?v=kEitFAY7Gc8&t"}>elm crash course</a></ListItem>
            <ListItem><a href={"https://elm-lang.org/docs"}>elm docs + official guide</a></ListItem>
            <ListItem>elm cli: <b>elm repl</b></ListItem>
          </List>
          <Notes>
            - elm repl good for learning the core language
          </Notes>
        </Slide>
      </Deck>
    );
  }
}