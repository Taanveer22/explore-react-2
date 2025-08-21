import ArrayMap from "./components/ArrayMap";
import HookOne from "./components/HookOne";
import HookTwo from "./components/HookTwo";

function App() {
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-5xl font-bold">Explore React 2</h1>
      <ArrayMap></ArrayMap>
      <HookOne></HookOne>
      <HookTwo></HookTwo>
    </div>
  );
}

export default App;
