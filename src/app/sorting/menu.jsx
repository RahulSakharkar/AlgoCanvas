import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { CustomToggle } from '@/components/custom-toggle';
import { Button } from '@/components/ui/button';
import { Component } from 'react';
import SpotlightCard from '../components/SpotlightCard';

class Menu extends Component {
  render() {
    return (
      <div className="self-center m-4">
        <SpotlightCard className="menu-spotlight-card" spotlightColor="#56055d">
          <div
            className="menu-container w-64 p-4 space-y-6"
            style={{ backgroundColor: '#180e28' }}
          >
            <h2
              className="text-lg font-semibold"
              style={{ color: 'aliceblue' }}
            >
              Settings
            </h2>

            <CustomSlider
              title="Numbers"
              defaultValue={20}
              min={10}
              max={30}
              step={2}
              onChange={this.props.onCountChange}
              disable={this.props.disable}
            />
            <CustomSlider
              defaultValue={50}
              title="Speed"
              onChange={this.props.onSpeedChange}
              min={10}
              max={100}
              step={1}
              disable={this.props.disable}
            />

            <CustomSelect
              title="Select Algorithm 1"
              options={[
                'Bubble Sort',
                'Selection Sort',
                'Insertion Sort',
                'Quick Sort',
              ]}
              onChange={this.props.onAlgoChanged1}
            />
            <CustomToggle
              title="Double"
              onCheckedChange={this.props.onDoubleChange}
            />
            {/* <SwitchLabels
                        disable={this.props.disable}
                        onDoubleChange={this.props.onDoubleChange}
                    /> */}
            <CustomSelect
              title="Select Algorithm 2"
              options={[
                'Bubble Sort',
                'Selection Sort',
                'Insertion Sort',
                'Quick Sort',
              ]}
              onChange={this.props.onAlgoChanged2}
            />
            <Button
              className="w-full"
              onClick={this.props.onRandomize}
              disabled={this.props.disable}
              style={{
                backgroundColor: '#32063b',
                color: 'aliceblue',
                ...(this.props.disable && {
                  cursor: 'not-allowed',
                  opacity: 0.6,
                }),
              }}
            >
              Randomize
            </Button>

            <Button
              className="w-full"
              onClick={this.props.onViusalize}
              disabled={this.props.disable}
              style={{
                backgroundColor: '#32063b',
                color: 'aliceblue',
                ...(this.props.disable && {
                  cursor: 'not-allowed',
                  opacity: 0.6,
                }),
              }}
            >
              Visualize
            </Button>
          </div>
        </SpotlightCard>
      </div>
    );
  }
}

export default Menu;
