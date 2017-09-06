const items = [
  { title: 'Главная страница', href: '#home' },
  { title: 'О компании', href: '#about' },
  { title: 'Контакты', href: '#contact' }
];

const app = (
  <Menu items={items} />
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
