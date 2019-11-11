// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { 
    View, 
    Text, 
    ActivityIndicator,
    TouchableOpacity,
    Button,
    Image,
    TextInput,
    Modal
} from './components';


storiesOf('Components',module).add('ActivityIndicator',()=><ActivityIndicator />);
storiesOf('Components',module).add('Button',()=><Button />);
storiesOf('Components',module).add('Grid',()=><div>暂无</div>);
storiesOf('Components',module).add('View',()=><View />);
storiesOf('Components',module).add('Text',()=><Text />);
storiesOf('Components',module).add('TextInput',()=><TextInput />);
storiesOf('Components',module).add('TouchableOpacity',()=><TouchableOpacity />);
storiesOf('Components',module).add('Image',()=><Image />);

storiesOf('Components',module).add('Modal',()=><Modal />);
storiesOf('Components',module).add('ListView',()=><div>暂无</div>);
storiesOf('Components',module).add('ScrollView',()=><div>暂无</div>);

storiesOf('Components',module).add('ProgressBar',()=><div>暂无</div>);
storiesOf('Components',module).add('Switch',()=><div>暂无</div>);
