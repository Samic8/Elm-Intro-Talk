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
  element9: require('../assets/element-9.svg'),
  element10: require('../assets/element-10.svg'),
  browserKey: require('../assets/browser-key.svg'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#444951',
    tertiary: '#03A9FC',
    quaternary: '#90d3e5'
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
        contentWidth={"1200px"}
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
                <ListItem>Compiles to Javascript</ListItem>
                <ListItem>Functional language</ListItem>
                <ListItem>All functions are pure (no side effects)</ListItem>
                <ListItem>Statically typed + inference</ListItem>
                <ListItem>All data is immutable</ListItem>
                <ListItem>'null' / 'undefined' / Exceptions do not exist</ListItem>
              </List>
            </div>
          </Appear>
          <Notes>
            Completely new language<br/>
            Type annotations<br/>
            Can work out ints<br/>
            <hr/>
            Same input, same output <br/>
            Guarantees <br/>
            Cant mix imperative
            <hr/>
            What elm does well<br/>
            Refactoring is so easy<br/>
            Helpful complier
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary">
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
            What you get in elm 
            <hr/>
            Dead code elimination<br/>
            <hr/>
            Only one way in elm
            <hr/>
            Baked in, work together nicely<br/>
            JS Swap in and out
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary" textColor="tertiary">
          <Text textColor="secondary">
            Just because there are no exceptions does not mean you cant produce code that is <b>wrong</b>
          </Text>
          <Text textColor="secondary" style={{marginTop: '3rem'}}>
            <BlockQuote>"The sky is <span style={{color: 'green'}}>green</span>" vs "The sky is <span style={{color: '#942c2c'}}>[TypeError: color is not a property of undefined]</span>"</BlockQuote>
          </Text>
          <Notes>
            Started, hard to imagine
            <hr/>
            Elm wrong
            <hr/>
            JS Broken
            <hr/>
            Functional won't save you from incorrectness but will save you from broken
            <hr/>
            Can do in JS (and maybe TS) <br/>
            Imperative code might be tempting<br/>
            e.g sprinkle in a function that mutates global state
          </Notes>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="elm"
          code={require('raw-loader!../example-app/src/Main-elm-arch.elm')}
          ranges={[
            { loc: [0, 5] },
            { loc: [5, 9], note: 'Initial Data Model'},
            { loc: [9, 15], note: 'Update contains all business logic' },
            { loc: [15, 18], note: 'Builds HTML. Set up messages (Msg) that might be triggered' }
          ]}>
          <Notes>
            - Blank assignments to get a feel for the architecture
          </Notes>
        </CodeSlide>
        <Slide transition={['fade']}>
          <Elm src={elmSource.Elm.Main}/>
          <Notes>
            Step through the code to create this app next
            <hr/>
            Simple counter, can increment and decrement
          </Notes>
        </Slide>
        <CodeSlide
          transition={['fade']}
          bgColor="primary"
          lang="elm"
          code={require('raw-loader!../example-app/src/Counter.elm')}
          ranges={[
            { loc: [0, 3], note: 'Imports' },
            { loc: [4, 6], note: 'In Sandbox mode everything is Elm' },
            { loc: [7, 8], note: 'Union type definition. Like a ENUM. Each value is like a label'},
            { loc: [9, 17], note: 'Actions that can happen in our app. Business logic goes here'},
            { loc: [17, 24], note: 'View is called after every Model change. Builds HTML'},
          ]}/>
        <Slide transition={['fade']} bgColor="quaternary">
          <Heading size={4} textColor="primary">The Elm Architecture</Heading>
          <List>
            <ListItem>Pattern for creating applications</ListItem>
            <ListItem>Projects like redux have been inspired by it so some ideas here might some familiar</ListItem>
            <ListItem>One-way data flow</ListItem>
            <ListItem>Separate concept form the core language which is the basic types, functions and syntax. e.g. ("hello" ++ "world")</ListItem>
          </List>
          <Notes>
            Opinionated pattern
            <hr/>
            Only way to structure applications
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <div style={{display: 'flex'}}>
            <span><b>main</b> = Browser.<span style={{color: '#60B5CC'}}>Sandbox</span> &#123;</span>
            <span style={{flex: '1 1 auto'}}>init</span>
            <span style={{flex: '1 1 auto'}}>update</span>
            <span style={{flex: '1 1 auto'}}>view</span>
            <span>&#125;</span>
          </div>
          <br/>
          <Notes>
            Every elm program has a main variable it looks for
            <hr/>
            Lets focus on sandbox
            <hr/>
            Sandbox cant communicate outside of elm code
            <hr/>
            Good for learning and can help us get an idea of how the architecture works
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox1} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox2} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox3} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox4} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox5} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox6} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Sandbox</Heading>
          <img src={images.sandbox7} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary">
          <Heading size={4} textColor="primary">Side effects?</Heading>
          <List>
            <ListItem>HTTP</ListItem>
            <ListItem>Time</ListItem>
            <ListItem>DOM events (focus, click)</ListItem>
          </List>
          <Notes>
            Mentioned no side effects in Elm code
            <hr/>
            All things you don't have control of
            <hr/>
            How does Elm handle them
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <div style={{display: 'flex'}}>
            <span><b>main</b> = Browser.<span style={{color: '#60B5CC'}}>Element</span> &#123;</span>
            <span style={{flex: '1 1 auto'}}>init</span>
            <span style={{flex: '1 1 auto'}}>update</span>
            <span style={{flex: '1 1 auto'}}>view</span>
            <span style={{flex: '1 1 auto'}}>subscriptions</span>
            <span>&#125;</span>
          </div>
          <br/>
          <Notes>
            Commands and subscriptions<br/>
            <hr/>
            Can <b>Command</b> the runtime system to make HTTP request
            <hr/>
            <b>Subscribe</b> to the current time every 10 seconds
            <hr/>
            Interact with the outside world (Javascript)
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element1} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element2} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element3} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element4} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element5} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element6} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element7} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element8} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element9} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textAlign={'left'} textColor="secondary">Browser.Element</Heading>
          <img src={images.element10} style={{height: '563px'}} />
          <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <img src={images.browserKey}/>
          </div>
        </Slide>
        <Slide bgColor="quaternary" >
          <Heading textColor="primary" size={5}>When not to use Elm?</Heading>
          <List>
            <ListItem>When you are reliant on existing Javascript libraries</ListItem>
            <ListItem>All packages have to be written in elm. Only core libraries can use JS (Good and Bad)</ListItem>
            <ListItem>Growing but not huge ecosystem of packages compared to JS</ListItem>
            <ListItem>Lack of breakpoint debugging</ListItem>
          </List>
          <Notes>
            Not used elm on a large app<br/>
            <hr/>
            Wait for elm to update, new JS feature
          </Notes>
        </Slide>
        <Slide bgColor="quaternary">
          <Heading textColor="primary">Resources</Heading>
          <List>
            <ListItem><a href={"https://www.youtube.com/watch?v=kEitFAY7Gc8&t"}>elm crash course</a></ListItem>
            <ListItem><a href={"https://elm-lang.org/docs"}>elm docs + official guide</a></ListItem>
            <ListItem>elm cli: <b>elm repl</b></ListItem>
          </List>
          <Notes>
            elm repl good for learning the core language
          </Notes>
        </Slide>
      </Deck>
    );
  }
}