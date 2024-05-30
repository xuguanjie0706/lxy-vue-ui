import './index.scss';

const BorderPages = () => {
  const count = 8;
  const styleList = [
    'bg',
    'horn',
    'gradient',
    'gradient bg_norepeat',
    'active-dash',
    'active-color',
    'chase-color',
  ];
  return (
    <>
      <h1>Base</h1>
      <section className="container">
        {Array(count)
          .fill(0)
          .map((item, index) => ({ name: item, key: index + 1 }))
          .map((item) => (
            <>
              <div className="item" key={item.key}>
                {item.key}
              </div>
            </>
          ))}
      </section>
      <h1>Style</h1>
      <section className="container container-style">
        {styleList
          .map((item, index) => ({ name: item, key: index + 1 }))
          .map((st) => (
            <>
              <div className={st.name + ' item'} key={st.key}>
                {st.key}
              </div>
            </>
          ))}
      </section>
      <h1>boxShadow </h1>
      <p>box-shadow: h-shadow v-shadow blur spread color inset;</p>
      <section className="container container-style">
        <div className="box-shadow-border item">
          <div className="box-cell">
            boxShadow 当内编剧不够时，内容的背景会覆盖
          </div>
        </div>
        <div className="box-shadow-border1 item"></div>
        <div className="box-shadow-border2 item"></div>
      </section>

      <h1>Example</h1>
      <section className="container container-style">
        <div className="active-color item">
          <div
            style={{
              position: 'absolute',
              zIndex: 1000,
              textAlign: 'center',
              width: '100%',
              lineHeight: '150px',
            }}
          >
            123
          </div>
        </div>
      </section>
    </>
  );
};

export default BorderPages;
