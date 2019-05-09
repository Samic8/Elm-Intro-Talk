// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide';

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
  elmLogo: require('../assets/elm-logo.svg')
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
              <Heading size={3} textColor="secondary" style={{marginTop: '2.2rem'}} textAlign="left">
                How?
              </Heading>
              <List>
                <ListItem>Functional language</ListItem>
                <ListItem>Statically typed + inference</ListItem>
                <ListItem>All data is immutable</ListItem>
                <ListItem>All functions are pure (no side effects)</ListItem>
                <ListItem>'null' / 'undefined' / Exceptions do not exist</ListItem>
              </List>
            </div>
          </Appear>
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
            <List>
              <ListItem>Only one way to do all these things / structure code (elm architecture)</ListItem>
              <ListItem>They all work together nicely, maybe you have experienced pain points from integration JS stack together</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text textColor="secondary">
            Just because there are no exceptions does not mean you can produce code that is <b>wrong</b>
          </Text>
          <Text textColor="secondary" style={{marginTop: '3rem'}}>
            "The sky is <span style={{color: 'green'}}>green</span>" vs "The sky is [TypeError: color is not a property of undefined]"
          </Text>
          <Notes>
            <List>
              <ListItem>In elm you can write code that is wrong</ListItem>
              <ListItem>In JS you can write code that is broken</ListItem>
              <ListItem>Functional won't save you from semantic incorrectness but will save you from broken</ListItem>
              <ListItem>Could do this in plain JS with typescript and get the same benefit, but imperative code might be tempting under time pressure</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Text textColor="secondary" style={{marginTop: '3rem'}}>
            Side effects can happen, but outside of your elm code
          </Text>
          <Image src={images.elmElement} style={{marginBottom: '2.2rem'}}/>
          <Notes>
            <List>
              <ListItem>Elm app can command the runtime system to make an HTTP request or to generate a random number</ListItem>
              <ListItem>Elm app can subscribe to events from JS</ListItem>
              <ListItem>Create a strong boundary between elm and JS</ListItem>
              <ListItem>Applications can use cmd/sub, elm packages cannot</ListItem>
              <ListItem>All packages are written in Elm, and have all of the guarantees of pure functions and strict types. Plus enforced semantic versioning (wont let you do major version if breaking change)</ListItem>
            </List>
          </Notes>
        </Slide>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../example-app/src/Main-elm-arch.elm')}
          ranges={[
            { loc: [0, 5], title: 'The Elm Architecture'},
            { loc: [5, 9], title: 'The Elm Architecture', note: 'Initial Data Model'},
            { loc: [9, 15], title: 'The Elm Architecture', note: 'Msg is like redux actions. Update contains all business logic' },
            { loc: [15, 18], title: 'The Elm Architecture', note: 'Builds HTML. Set up messages (Msg) that might be triggered' }
          ]}/>
        <CodeSlide
          lang="js"
          code={require('raw-loader!../example-app/src/Main.elm')}
          ranges={[
            { loc: [0, 5], note: 'Imports' },
            { loc: [6, 8], note: 'Sandbox is the most restrictive version of the Elm Architecture' },
            { loc: [6, 8], image: images.elmSandbox, title: 'Browser.Sandbox', note: 'Basic version of the Elm Architecture **Init** **Update** **View**' },
            { loc: [6, 8], image: images.elmElement, title: 'Browser.Element', note: 'Introduces commands and subscriptions, which allows interaction with other JS things' },
            { loc: [9, 20], title: 'Init' },
            { loc: [21, 34], title: 'Update' },
            { loc: [23, 24], note: 'Union type definition. In this case only one type with two params'},
            { loc: [25, 26], note: 'Takes two arguments and returns model. Always!'},
            { loc: [26, 27], note: 'Using function paramaters'},
            { loc: [27, 34], note: 'Switch statement that makes the developer account for all cases'},
            { loc: [30, 31], note: 'Syntax for creating a new record, much like Object.assign() in JS. Does not mutate!'},
            { loc: [34, 49], title: 'View'},
            { loc: [36, 40], note: '**view**, like update is just a function. Elm architecture calls view after Model change'},
            { loc: [41, 49], note: 'Implementation details of building up HTML'},
          ]}/>
        <Slide>
          <Heading>Resources</Heading>
          <a href={"https://www.youtube.com/watch?v=kEitFAY7Gc8&t"}>elm crash course</a>
        </Slide>
      </Deck>
    );
  }
}