import fs from 'node:fs';
import { createReadableTime, startTime } from './time';

const startTimeStr = createReadableTime(startTime);

/**
 * From first parameter of Node.js CLI command line.
 */
const fileName = process.argv[2] ?? 'log';

/**
 * Do not replace the old log file, so we create a new one with
 * different file name by timestamp.
 */
const fullFileName = `logs/${fileName}-${startTimeStr}.log`;

const logStream = fs.createWriteStream(fullFileName, { flags: 'a' });

const logToFile = (message: string) => {
  logStream.write(`${message}\n`);
};

process.on('exit', () => {
  logStream.end();
});

/**
 * Describes the log levels.
 */
const levelObj = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;

/**
 * Whatever you want to log.
 */
type OtherInfoNotString = object | number | boolean | string;

/**
 * Same as `console.log(message: string, param2)`.
 */
const addOtherInfoToLog = (
  level: keyof typeof levelObj,
  message: string,
  otherInfo?: OtherInfoNotString,
) => {
  let logMess = `[${level}] ${message}`;

  if (typeof otherInfo === 'string') {
    logMess += ` ${otherInfo}`;
  } else if (otherInfo !== undefined) {
    logMess += ` ${JSON.stringify(otherInfo)}`;
  }
  return logToFile(logMess);
};

/**
 * Do the same thing with `console.log`, so we can
 * replace `console.log` with `logger.info`.
 *
 * @example
 * ```ts
 * logger.info('Application started')
 * logger.warn('This could be risky')
 * logger.error('Something went wrong')
 * ```
 */
export const logger = {
  info: (message: string, otherInfo?: OtherInfoNotString) =>
    addOtherInfoToLog(levelObj.INFO, message, otherInfo),

  warn: (message: string, otherInfo?: OtherInfoNotString) =>
    addOtherInfoToLog(levelObj.WARN, message, otherInfo),

  error: (message: string, otherInfo?: OtherInfoNotString) =>
    addOtherInfoToLog(levelObj.ERROR, message, otherInfo),
};
