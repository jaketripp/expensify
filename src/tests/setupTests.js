import Enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({
    adapter: new adapter()
});

DotEnv.config({ path: '.env.test' });