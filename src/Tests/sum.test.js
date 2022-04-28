import renderer from 'react-test-renderer';
import Navbar from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'


test('testing jest', () => {
  expect(true).toBe(true);
});

// SECTION:  Testing Components 

it(' should render correctly - Navigation bar', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(' should render correctly - Footer', () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
