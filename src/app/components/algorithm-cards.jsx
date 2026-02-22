import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';
import { Network, ArrowUpDown, Repeat } from 'lucide-react';

const algorithms = [
  {
    id: 'pathfinder',
    title: 'Pathfinder',
    description:
      'Navigate the shortest paths with intelligent graph traversal algorithms.',
    details:
      'Watch Dijkstra, BFS, and DFS dynamically explore weighted and unweighted graphs, revealing optimal routes in real-time visualization.',
    icon: Network,
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithm',
    description:
      'Experience the elegance of sorting through side-by-side comparisons.',
    details:
      "From Quick Sort's divide-and-conquer strategy to Bubble Sort's simplicity, witness how different approaches tackle the same challenge with varying efficiency.",
    icon: ArrowUpDown,
  },
  {
    id: 'recursive-sorting',
    title: 'Recursive Sorting',
    description: 'Dive deep into the recursive nature of advanced sorting.',
    details:
      'Unravel the divide-and-conquer magic of Merge Sort and Quick Sort as they break down problems into elegant, self-similar solutions that rebuild optimal order.',
    icon: Repeat,
  },
];

export function AlgorithmCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {algorithms.map(algorithm => {
        const Icon = algorithm.icon;
        return (
          <SpotlightCard
            key={algorithm.id}
            className="custom-spotlight-card"
            spotlightColor="#56055d"
          >
            <Link href={`/${algorithm.id}`} className="block group h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Icon
                      className="w-10 h-10 text-purple-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2">
                      {algorithm.title}
                    </h2>
                  </div>
                </div>
                <p className="text-base text-gray-300 leading-relaxed flex-1">
                  <span className="block font-medium text-gray-200 mb-3">
                    {algorithm.description}
                  </span>
                  <span className="block text-sm text-gray-400 leading-loose">
                    {algorithm.details}
                  </span>
                </p>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <span className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                    Explore Algorithm →
                  </span>
                </div>
              </div>
            </Link>
          </SpotlightCard>
        );
      })}
    </div>
  );
}
