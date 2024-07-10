import image1 from '../ProductImages/shopifylink1.jpeg';
import image2 from '../ProductImages/shopifylink2.jpeg';
import image3 from '../ProductImages/shopifylink3.jpeg';

const collections = [
  { id: 1, name: 'Denim tye set', price: '₹' + 3800, imageUrl: image1, shopifyId: '8779742740736', sizes:['XS', 'S', 'M', 'L', 'XL']},
  { id: 2, name: 'The Bloom Set', price: '₹' + 7500, imageUrl: image3, shopifyId: '8779661115648', sizes: ['XS', 'S', 'M', 'L', 'XL'] }, //change sizes and other options when given
  { id: 3, name: 'Organza bowtie top', price: '₹' + 3800, imageUrl: image2, shopifyId: '8780317622528', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
];

export default collections;
