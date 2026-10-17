const si = require('react-icons/si');
const tb = require('react-icons/tb');
const siKeys = Object.keys(si);
const tbKeys = Object.keys(tb);

// Check for specific icons
console.log('SiVscodium exists:', !!si.SiVscodium);
console.log('SiHtml5 exists:', !!si.SiHtml5);
console.log('SiHtml exists:', siKeys.filter(k => k.toLowerCase().includes('html')));
console.log('TbBrandTabler exists:', tbKeys.filter(k => k.toLowerCase().includes('brand')).filter(k => k.toLowerCase().includes('tab')));
console.log('TbChartBar exists:', !!tb.TbChartBar);
console.log('TbChartLine exists:', !!tb.TbChartLine);
console.log('TbTextRecognition exists:', !!tb.TbTextRecognition);
console.log('TbMathFunction exists:', !!tb.TbMathFunction);
console.log('TbBrain exists:', !!tb.TbBrain);
console.log('TbBox exists:', !!tb.TbBox);
console.log('TbBinaryTree exists:', !!tb.TbBinaryTree);
console.log('TbApi exists:', !!tb.TbApi);
console.log('TbPhoto exists:', !!tb.TbPhoto);
console.log('TbWaveSine exists:', !!tb.TbWaveSine);
console.log('TbGridDots exists:', !!tb.TbGridDots);
