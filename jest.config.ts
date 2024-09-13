import { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {},
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default createJestConfig(config);
