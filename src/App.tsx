import { Child } from '../src/Components/Child';

export const App = () => {
  return (
    <>
    <div>
      Hello World {3 + 5}
    </div>
    <Child 
      text={'This be child'}
      someNumber={3}
      bool={true}
    />
    </>
  );
}