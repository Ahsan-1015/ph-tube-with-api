// video  thumbaile time format start
// function timeFormat(time) {
//   const hour = parseInt(time / 3600);
//   let secondRemaining = parseInt(time % 3600);
//   const minute = parseInt(secondRemaining / 60);
//   secondRemaining = parseInt(minute % 60);
//   return `${hour} hour ${minute} minute ${secondRemaining} second ago`;
// }
// video  thumbaile time format end

// load categories videos category_id way functionally start
// const loadCategoriesVideos = id => {
//   const loadCategories = async () => {
//     try {
//       const res = await fetch(
//         `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
//       );
//       const data = await res.json();
//       displayVideos(data.category);
//     } catch (error) {
//       console.error('something is wrong ', error);
//     }
//   };
//   loadCategories();
// };
// load categories videos category_id way functionally end
