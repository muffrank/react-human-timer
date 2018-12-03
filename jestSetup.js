const enzyme = require('enzyme'); 
const Adapter = require('enzyme-adapter-react-16');
const { shallow, mount, render } = enzyme;

enzyme.configure({ adapter: new Adapter() });

global.enzyme = enzyme;
global.shallow = shallow;
global.mount = mount;
global.render = render;
