// video  thumbaile time format start
function timeFormat(time) {
  const hour = parseInt(time / 3600);
  let secondRemaining = parseInt(time % 3600);
  const minute = parseInt(secondRemaining / 60);
  secondRemaining = parseInt(minute % 60);
  return `${hour} hour ${minute} minute ${secondRemaining} second ago`;
}
// video  thumbaile time format end
