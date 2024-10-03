// load categories fetch

// load categories start
const loadCategories = async () => {
  try {
    const res = await fetch(
      'https://openapi.programming-hero.com/api/phero-tube/categories'
    );
    const data = await res.json();
    displayCategories(data.categories);
  } catch (error) {
    console.error('something is wrong ', error);
  }
};

// category: 'Music';
// category_id: '1001';

// display categories
const displayCategories = categories => {
  const categoriesContainer = document.getElementById('categories-contanier');
  categories.forEach(element => {
    console.log(element);

    // create element
    const button = document.createElement('button');
    button.classList = ' btn navbar-center';
    button.innerText = element.category; /* category: 'Music'; */
    categoriesContainer.appendChild(button);
  });
};
// load categories end

// loadVideos section start
const loadVideos = async () => {
  try {
    const res = await fetch(
      ' https://openapi.programming-hero.com/api/phero-tube/videos'
    );
    const data = await res.json();
    displayVideos(data.videos);
  } catch (error) {
    console.error('something is wrong ', error);
  }
};

const videoDemo = {
  category_id: '1001',
  video_id: 'aaaa',
  thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg',
  title: 'Shape of You',
  authors: [
    {
      profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg',
      profile_name: 'Olivia Mitchell',
      verified: '',
    },
  ],
  others: {
    views: '100K',
    posted_date: '16278',
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};
// time format function start
function timeFormat(time) {
  const hour = parseInt(time / 3600);
  let secondRemaining = parseInt(time % 3600);
  const minute = parseInt(secondRemaining / 60);
  secondRemaining = parseInt(minute % 60);
  return `${hour} hour ${minute} minute ${secondRemaining} second ago`;
}
// time format function end

// display Videos start
const displayVideos = videos => {
  const videosContainer = document.getElementById('videos');
  videos.forEach(video => {
    console.log(video);
    const card = document.createElement('div');
    card.classList = ' card card-compact bg-base-100 ';
    card.innerHTML = ` 
     <figure class = "h-[200px] relative">
    <img class ="w-full h-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      ${
        video.others.posted_date?.length === 0
          ? ''
          : `<p class ="absolute right-2 bottom-2 bg-black text-white text-xs p-1 rounded">${timeFormat(
              video.others.posted_date
            )}</p>`
      }
      
  </figure>
  <div class="py-4 flex gap-4">
    <div>
      <img class ="w-10 h-10 rounded-full object-cover" src="${
        video.authors[0].profile_picture
      }" alt="" />
    </div>

    <div class ="space-y-1">
      <h3 class ="font-bold text-xl">${video.title}</h3>
      <div class ="flex items-center gap-3">
        <p class ="text-gray-400">${video.authors[0].profile_name}</p>
        ${
          video.authors[0].verified === true
            ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="" />'
            : ''
        }
      </div>
      <p class ="text-gray-400">${video.others.views} views </p>
    </div>
  </div>
    `;

    videosContainer.appendChild(card);
  });
};
// display Videos end

// calling function
loadCategories();
loadVideos();
