import './index.scss';
const SkillPages = () => {
  return (
    <div className="lxy-skill-page">
      <h1>Empty选择器</h1>
      <section>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box"></div>
      </section>
      <h1>css滞空</h1>
      <section>
        <div className="box bgcolor-red unset">1</div>
      </section>
      <h1>首字母大写</h1>
      <section>
        <div className="box capitalize">bob is genius</div>
        <div className="box uppercase">bob is genius</div>
        <div className="box lowercase">bob is genius</div>
      </section>
      <h1>Css斜线</h1>
      <section>
        <div className="box diagonal-line-1"></div>
      </section>
    </div>
  );
};

export default SkillPages;
