import './index.scss';
const FlexPages = () => {
  const flexDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContent = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ];
  const alignItems = [
    'a-flex-start',
    'a-flex-end',
    'a-center',
    'a-baseline',
    'a-stretch',
  ];
  const alignContent = [
    'c-flex-start',
    'c-flex-end',
    'c-center',
    'c-space-between',
    'c-space-around',
    'c-stretch',
  ];
  const flexWarp = ['nowrap', 'wrap', 'wrap-reverse'];
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="flex-pages flex flex-col" lxy:h="100px">
      <h1>flex-direction</h1>
      <section>
        {flexDirection.map((item) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
          </div>
        ))}
      </section>
      <h1>flex-warp</h1>
      <p>
        默认情况下，所有的项目都排列在一条线上（又称为“轴线“）.
        flex-wrap属性定义， 如果在一条轴线上排不下， 如何换行。
      </p>
      <p>
        默认交叉轴是等份的，所以你需要设置align-content:flex-start使得cell从上往下排列{' '}
      </p>
      <section>
        {flexWarp.map((item) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
          </div>
        ))}
        <div className="flex-box wrap" style={{ alignContent: 'flex-start' }}>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
        </div>
        <div
          className="flex-box wrap"
          style={{ alignContent: 'space-between' }}
        >
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
        </div>
        <div
          className="flex-box wrap"
          style={{ alignItems: 'flex-start', alignContent: 'center' }}
        >
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
        </div>
        <div className="flex-box wrap" style={{ alignItems: 'center' }}>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
        </div>
      </section>
      <h1>justify-content</h1>
      <section>
        {justifyContent.map((item) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
          </div>
        ))}
      </section>
      <h1>align-items</h1>
      <p>交叉轴方向高度或者宽度会影响默认效果</p>
      <section>
        {alignItems.map((item, index) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item"></div>
            <div
              className="flex-item"
              style={
                index === 3
                  ? { fontSize: '30px', height: 'unset' }
                  : { height: 'unset' }
              }
            ></div>
            <div className="flex-item" style={{ height: 'unset' }}></div>
          </div>
        ))}
      </section>
      <h1>align-content</h1>
      <p>
        属性设置了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性是不生效的。
      </p>
      <section>
        {alignContent.map((item, index) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div
              className="flex-item"
              style={
                index === 3
                  ? { fontSize: '30px', height: 'unset' }
                  : { height: 'unset' }
              }
            ></div>
            <div className="flex-item" style={{ height: 'unset' }}></div>
            <div className="flex-item"></div>
          </div>
        ))}
      </section>
      <h1>order</h1>
      <p>
        属性定义项目的排列顺序，数值越小，排列越靠前，
        默认值为0。图例给第一个item设置了4,所以牌子最后面
      </p>
      <section>
        {justifyContent.map((item) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div className="flex-item" style={{ order: 4 }}></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
          </div>
        ))}
        <div className="flex-box c-flex-start">
          <div className="flex-item" style={{ order: 4 }}></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div
            className="flex-item"
            style={{ fontSize: '30px', height: 'unset' }}
          ></div>
          <div className="flex-item" style={{ height: 'unset' }}></div>
          <div className="flex-item"></div>
        </div>
      </section>

      <h1>flex-grow</h1>
      <p>
        属性定义项目的放大比列。默认为0，即
        即使存在剩余空间，也不放大,对多行交叉轴有剩余空间的行有效。
      </p>
      <p>
        如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为4，其他项目都为1，则前者占据的剩余空间将比其他多4倍。
      </p>
      <section>
        {justifyContent.map((item) => (
          <div key={Math.random()} className={`flex-box ${item}`}>
            <div
              className="flex-item"
              style={{ flexGrow: 4, background: 'red' }}
            ></div>
            <div
              className="flex-item"
              style={{ flexGrow: 2, background: 'blue' }}
            ></div>
            <div className="flex-item"></div>
          </div>
        ))}
        <div className="flex-box flex-start">
          <div
            className="flex-item"
            style={{ flexGrow: 4, background: 'red' }}
          ></div>
          <div
            className="flex-item"
            style={{ flexGrow: 3, background: 'blue' }}
          ></div>
          <div className="flex-item" style={{ flexGrow: 3 }}></div>
          <div className="flex-item"></div>
        </div>
        <div className="flex-box c-flex-start">
          <div
            className="flex-item"
            style={{ order: 4, flexGrow: 4, background: 'red' }}
          ></div>
          <div className="flex-item" style={{ width: '70px' }}></div>
          <div className="flex-item"></div>
          <div
            className="flex-item"
            style={{ flexGrow: 2, background: 'blue' }}
          ></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div
            className="flex-item"
            style={{ height: 'unset', flexGrow: 2, background: 'yellow' }}
          ></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div className="flex-item"></div>
          <div
            className="flex-item"
            style={{ fontSize: '30px', height: 'unset' }}
          ></div>
          <div className="flex-item"></div>
        </div>
      </section>

      <h1>flex-shrink</h1>
      <p>属性定义项目的缩小比例，默认值为1， 如果剩余空间不足，项目将缩小。</p>
      <p>
        图一代表flex-shrink都为1，如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小
      </p>
      <p>
        图二代表第一个flex-shrink为10,其余为1，如果所有项目的flex-shrink属性都为1，其他的flex-shrink
        为10，那么后者的缩小比例是前者的10倍
      </p>
      <p>
        图二代表第一个flex-shrink为10,第二个为1，第三个为0，如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
      </p>
      <section>
        <div className={`flex-box flex-shrink-1 flex-start`}>
          <div className="flex-item large" style={{ background: 'red' }}></div>
          <div className="flex-item large" style={{ background: 'blue' }}></div>
          <div className="flex-item large"></div>
        </div>
        <div className={`flex-box c-flex-start`}>
          <div
            className="flex-item large"
            style={{ flexShrink: 10, background: 'red' }}
          ></div>
          <div
            className="flex-item large"
            style={{ flexShrink: 1, background: 'blue' }}
          ></div>
          <div className="flex-item large"></div>
        </div>
        <div className={`flex-box flex-start`}>
          <div
            className="flex-item large"
            style={{ flexShrink: 10, background: 'red' }}
          ></div>
          <div
            className="flex-item large"
            style={{ flexShrink: 1, background: 'blue' }}
          ></div>
          <div className="flex-item large" style={{ flexShrink: 0 }}></div>
        </div>
      </section>
      <h1>flex-basis</h1>
      <p>
        flex-basis属性定义在分配剩余空间之前，
        项目占主轴的空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小,可以代表高度或者是宽度,在flex-direction:row下及可以理解为宽度，但是权重高于width。设置auto后由宽度或者高度决定主轴方向的长度
      </p>
      <section>
        <div className={`flex-box flex-start`}>
          <div
            className="flex-item flex-item-basis"
            style={{ background: 'red' }}
          ></div>
          <div className="flex-item" style={{ background: 'blue' }}></div>
          <div className="flex-item"></div>
        </div>
      </section>
      <h1>flex</h1>
      <p>
        flex属性是flex-grow flex-shrink flex-basis 的简写，默认值为0 1
        auto。后两个属性可选。
      </p>
      <p>flex:1 代表能放能缩</p>
      <p>flex:none 代表不能放不能缩</p>
      <p>
        设置了flex:1理论上无法进行换行，因为他既能放大又能缩小。但是你可以通过flex-basic在分配剩余空间之前占据主轴空间
      </p>
      <section>
        <div className={`flex-box flex-start`}>
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'blue' }}
          ></div>
          <div className="flex-item flex-1"></div>
        </div>
        <div className={`flex-box c-flex-start`}>
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'blue' }}
          ></div>
        </div>
        <div
          className={`flex-box c-flex-start`}
          style={{ background: '#00ff55' }}
        >
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'blue' }}
          ></div>
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'blue' }}
          ></div>
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'blue' }}
          ></div>
        </div>
        <div className={`flex-box c-flex-start`}>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'red' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'orange', alignSelf: 'flex-end' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'green', alignSelf: 'center' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{
              background: 'blue',
              alignSelf: 'baseline',
              fontSize: '20px',
            }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{
              background: 'yellow',
              alignSelf: 'stretch',
              height: 'unset',
            }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'red' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'orange', alignSelf: 'flex-end' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{ background: 'green', alignSelf: 'center' }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{
              background: 'blue',
              alignSelf: 'baseline',
              fontSize: '20px',
            }}
          ></div>
          <div
            className="flex-item flex-1 flex-item-basis"
            style={{
              background: 'yellow',
              alignSelf: 'stretch',
              height: 'unset',
            }}
          ></div>
        </div>
      </section>
      <h1>align-self</h1>
      <p>
        属性允许单个项目与其他项目不一样的对齐方式，可覆盖align-items，默认值为auto，表示继承父级的align-items。如果没有父元素，则等同于stretch。对多行交叉轴无效
      </p>
      <section>
        <div className={`flex-box flex-start`}>
          <div className="flex-item flex-1" style={{ background: 'red' }}></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'orange', alignSelf: 'flex-end' }}
          ></div>
          <div
            className="flex-item flex-1"
            style={{ background: 'green', alignSelf: 'center' }}
          ></div>
          <div
            className="flex-item flex-1"
            style={{
              background: 'blue',
              alignSelf: 'baseline',
              fontSize: '20px',
            }}
          ></div>
          <div
            className="flex-item flex-1"
            style={{
              background: 'yellow',
              alignSelf: 'stretch',
              height: 'unset',
            }}
          ></div>
        </div>

        <div className={`flex-box c-flex-start`}>
          <div className="flex-item " style={{ background: 'red' }}></div>
          <div
            className="flex-item "
            style={{ background: 'orange', alignSelf: 'flex-end' }}
          ></div>
          <div
            className="flex-item "
            style={{ background: 'green', alignSelf: 'center' }}
          ></div>
          <div
            className="flex-item "
            style={{
              background: 'blue',
              alignSelf: 'baseline',
              fontSize: '20px',
            }}
          ></div>
          <div
            className="flex-item "
            style={{
              background: 'yellow',
              alignSelf: 'stretch',
              height: 'unset',
            }}
          ></div>
          <div className="flex-item " style={{ background: 'red' }}></div>
          <div
            className="flex-item "
            style={{ background: 'orange', alignSelf: 'flex-end' }}
          ></div>
          <div
            className="flex-item "
            style={{ background: 'green', alignSelf: 'center' }}
          ></div>
          <div
            className="flex-item "
            style={{
              background: 'blue',
              alignSelf: 'baseline',
              fontSize: '20px',
            }}
          ></div>
          <div
            className="flex-item "
            style={{
              background: 'yellow',
              alignSelf: 'stretch',
              height: 'unset',
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};
export default FlexPages;
