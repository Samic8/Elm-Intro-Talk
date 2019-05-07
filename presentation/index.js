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
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  elmSandbox: require('../assets/elm-sandbox.svg'),
  elmElement: require('../assets/elm-element.svg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
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
          ]}/>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
