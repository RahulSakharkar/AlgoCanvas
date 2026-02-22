import { CustomSelect } from '@/components/custom-select';
import { CustomSlider } from '@/components/custom-slider';
import { Button } from '@/components/ui/button';
import { Component } from 'react';
import SpotlightCard from '../components/SpotlightCard';

class Menu extends Component {
    render() {
        return (
            <div className="self-center m-4">
                <SpotlightCard className="menu-spotlight-card" spotlightColor="#56055d">
                    <div className="menu-container w-64 p-4 space-y-6" style={{ backgroundColor: '#180e28' }}>
                        <h2 className="text-lg font-semibold" style={{ color: 'aliceblue' }}>Settings</h2>

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
                    title="Speed"
                    defaultValue={50}
                    min={10}
                    max={100}
                    step={1}
                    onChange={this.props.onSpeedChange}
                    disable={false}
                />
                <CustomSelect
                    title="Select Algorithm"
                    options={["Merge Sort", "Heap Sort", "Quick Sort"]}
                    onChange={this.props.onAlgoChanged}
                />
                        <Button
                            className="w-full"
                            onClick={this.props.onRandomize}
                            disabled={this.props.disable}
                            style={{ backgroundColor: '#32063b', color: 'aliceblue', ...(this.props.disable && { cursor: 'not-allowed', opacity: 0.6 }) }}
                        >
                            Randomize
                        </Button>
                        <Button
                            className="w-full"
                            onClick={this.props.onViusalize}
                            disabled={this.props.disable}
                            style={{ backgroundColor: '#32063b', color: 'aliceblue', ...(this.props.disable && { cursor: 'not-allowed', opacity: 0.6 }) }}
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