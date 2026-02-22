import { CustomSelect } from '@/components/custom-select';
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

            <CustomSelect
              title="Select Algorithm"
              options={this.props.algorithms}
              onChange={this.props.onAlgoChanged}
            />
            <CustomSelect
              title="Select Maze Division"
              options={this.props.mazes}
              onChange={this.props.onMazeChanged}
            />
            <Button
              className="m-1"
              onClick={this.props.onClearPath}
              style={{ backgroundColor: 'transparent', color: 'aliceblue' }}
            >
              Clear Path
            </Button>
            <Button
              className="m-1"
              onClick={this.props.onClearBoard}
              style={{ backgroundColor: 'transparent', color: 'aliceblue' }}
            >
              Clear Board
            </Button>
            <Button
              className="w-full"
              onClick={this.props.onCreateMaze}
              style={{ backgroundColor: 'transparent', color: 'aliceblue' }}
            >
              Create Maze
            </Button>
            <Button
              className="w-full"
              onClick={this.props.onVisualize}
              style={{ backgroundColor: 'transparent', color: 'aliceblue' }}
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
