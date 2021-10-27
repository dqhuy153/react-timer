import { v4 as uuidv4 } from 'uuid';

export const millisecondsToHuman = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return { seconds, minutes, hours, humanized };
};

export const humanizedTimeToMilliseconds = (hours, minutes, seconds) => {
  if (minutes < 0 || minutes > 60 || seconds < 0 || seconds > 60) {
    throw new Error('Invalid time!');
  }

  return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
};

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export const newTimer = (attrs = {}) => {
  const timer = {
    id: uuidv4(),
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    type: attrs.type || 'up',
    alarm: attrs.alarm || false,
    time: attrs.time || 0,
    isRunning: false,
  };

  return timer;
};
