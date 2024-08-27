import url from 'url'

const urlString = 'https://www.google.com/serarch?q=hellow+world'

const urlobj = new URL(urlString) 
console.log(urlobj);


//URL {
//     href: 'https://www.google.com/serarch?q=hellow+world',
//     origin: 'https://www.google.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.google.com',
//     hostname: 'www.google.com',
//     port: '',
//     pathname: '/serarch',
//     search: '?q=hellow+world',
//     searchParams: URLSearchParams { 'q' => 'hellow world' },
//     hash: ''
//   }


console.log(url.format(urlobj));


 