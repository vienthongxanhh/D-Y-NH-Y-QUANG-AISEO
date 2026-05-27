const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

const smImages = [
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600",
];

const mmImages = [
  "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1620286820299-addb3c1bfff1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=600",
];

const outImages = [
  "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=600",
];

const dcImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1614315584058-29ea094254bb?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1610427339719-756ef2ec4a29?auto=format&fit=crop&q=80&w=600"
];

const allImages = [...smImages, ...smImages, ...mmImages, ...mmImages, ...outImages, ...outImages, ...dcImages, ...dcImages];

let count = 0;
// We also replace the image on the Feature tab which have the same URL
code = code.replace(/img: "https:\/\/vienthongxanh.vn\/wp-content\/uploads\/2021\/04\/day-nhay-quang.jpg"/g, () => {
  const imgUrl = allImages[count % allImages.length];
  count++;
  return `img: "${imgUrl}"`;
});

code = code.replace(/image: "https:\/\/vienthongxanh.vn\/wp-content\/uploads\/2021\/04\/day-nhay-quang.jpg"/g, () => {
    return `image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"`;
});

fs.writeFileSync('src/App.tsx', code);
console.log("Images replaced in App.tsx!");
