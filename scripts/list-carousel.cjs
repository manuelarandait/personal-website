const fs = require('fs')
const path = require('path')

const carouselDir = path.join(process.cwd(), 'public/img/carousel')
const outputPath = path.join(process.cwd(), 'data/carousel-images.json')

const imageExtensions = /\.(jpeg|jpg|png)$/i

if (!fs.existsSync(carouselDir)) {
  fs.writeFileSync(outputPath, '[]')
  process.exit(0)
}

const files = fs.readdirSync(carouselDir)
  .filter((f) => imageExtensions.test(f))
  .sort()

const paths = files.map((f) => '/img/carousel/' + encodeURIComponent(f))
fs.writeFileSync(outputPath, JSON.stringify(paths, null, 2))
console.log('Carousel: ' + paths.length + ' imágenes en data/carousel-images.json')
