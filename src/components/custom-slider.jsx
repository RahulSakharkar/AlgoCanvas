import * as React from 'react';
import { Slider } from '@/components/ui/slider';

export function CustomSlider({
  title,
  onChange,
  min,
  max,
  step,
  defaultValue,
}) {
  const [value, setValue] = React.useState(defaultValue);
  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChangeCover = nextValue => {
    const normalizedValue = Array.isArray(nextValue) ? nextValue[0] : nextValue;
    setValue(normalizedValue);
    onChange(normalizedValue);
  };

  return (
    <div className="space-y-2">
      {/* <div className="flex items-center space-x-2"> */}
      <label
        className="text-sm font-medium whitespace-nowrap"
        style={{ color: 'aliceblue' }}
      >
        {title}
      </label>
      <Slider
        value={[value]}
        onValueChange={onChangeCover}
        min={min}
        max={max}
        step={step}
        className="w-full"
        // className="w-[180px]"
      />
      <span
        className="text-sm text-gray-500 w-8"
        style={{ color: 'aliceblue' }}
      >
        {value}
      </span>
    </div>
  );
}
