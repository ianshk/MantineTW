import { Button, Slider } from '@mantine/core';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button>Connect to database</Button>
          <div>
            <Slider
              value={value}
              onChange={setValue}
              onChangeEnd={setEndValue}
              marks={[
                { value: 0, label: 'xs' },
                { value: 25, label: 'sm' },
                { value: 50, label: 'md' },
                { value: 75, label: 'lg' },
                { value: 100, label: 'xl' },
              ]}
            />
            <div className="pt-8 text-base text-slate-800">onChange value: {value}</div>
            <div className="text-base text-slate-800">onChangeEnd value:{endValue}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
