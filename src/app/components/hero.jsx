'use client';

import Image from 'next/image';
import { LayoutGroup, motion } from 'motion/react';
import RotatingText from './RotatingText';

export default function Hero() {
  return (
    <section className="heading-container relative py-20 px-4">
      <div className="main-heading max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          <LayoutGroup>
            <motion.span layout style={{ display: 'inline-block' }}>
              Watch
            </motion.span>{' '}
            <RotatingText
              texts={[
                'Bubble Sort',
                'Quick Sort',
                'Merge Sort',
                'Heap Sort',
                'Dijkstra',
                'BFS',
                'DFS',
                'A* Algorithm',
              ]}
              mainClassName="px-3 md:px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden py-1 md:py-2 justify-center rounded-lg inline-flex"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />{' '}
            <motion.span layout style={{ display: 'inline-block' }}>
              Come Alive
            </motion.span>
          </LayoutGroup>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Master algorithms through interactive visualization. See every step,
          understand every move.
        </p>
      </div>
    </section>
  );
}
